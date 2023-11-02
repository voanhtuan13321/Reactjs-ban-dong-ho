import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import requestHandler from '../../utils/requestHandle';
import Toast from '../../components/Toast';

const INIT_IMAGE = 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg';

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [state, setState] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const [idDanhMuc, setIdDanhMuc] = useState(0);
  const [brands, setBrands] = useState([]);
  const [base64String, setBase64String] = useState(INIT_IMAGE);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
    setEditProduct(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditProduct(null);
  };

  const productSchema = Yup.object().shape({
    name: Yup.string().required('Brand name is required'),
  });

  useEffect(() => {
    fetchProducts();
    fetchBrands();
  }, [state]);

  const fetchBrands = async () => {
    try {
      const response = await requestHandler.get('brands/');
      const data = await response.data.data;
      setBrands(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await requestHandler.get('product/');
      const data = await response.data.data;
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (brand) => {
    setEditProduct(brand);
    setIsModalOpen(true);
  };

  const handleAddOrUpdateBrand = async (values) => {
    const dataRequest = { ...values, idBrand: idDanhMuc };
    console.log('data', dataRequest);
    // try {
    //   let response;
    //   if (editProduct) {
    //     response = await requestHandler.put(`brands/${editProduct.id}`, values);
    //   } else {
    //     response = await requestHandler.post('product/', values);
    //   }
    //   setState(!state);
    //   setType('success');
    //   closeModal();
    // } catch (error) {
    //   console.error('Error:', error);
    //   navigate('/error');
    // }
  };

  // handle select brands
  const handleSelect = (event) => {
    const id = event.target.value;
    setIdDanhMuc(Number(id));
  };

  // render options
  const renderOptions = () => {
    return brands.map((brand) => (
      <option
        key={brand.id}
        value={brand.id}
      >
        {brand.name}
      </option>
    ));
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setBase64String(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <main className='flex-1 overflow-y-auto pt-8 px-6 bg-base-200'>
        <div className='card w-full p-6 bg-base-100 shadow-xl mt-2'>
          <div className='text-xl font-semibold inline-block'>
            Products
            <div className='inline-block float-right'>
              <div className='inline-block float-right'>
                <button
                  className='btn px-6 btn-sm normal-case btn-primary'
                  onClick={openModal}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
          <div className='divider mt-2'></div>
          <div className='h-full w-full pb-6 bg-base-100'>
            <div className='overflow-x-auto w-full'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    <th className='text-center'>image</th>
                    <th>Name</th>
                    <th className='text-center'>price</th>
                    <th className='text-center'>discount</th>
                    <th className='text-center'>quantity</th>
                    <th className='text-center'>sold quantity</th>
                    <th className='text-center'>createDate</th>
                    <th className='text-center'>updateDate</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className='w-36 text-center'>
                        <img
                          src='https://picsum.photos/200'
                          alt='product'
                        />
                      </td>
                      <td>{product.name}</td>
                      <td className='w-16 text-center'>{product.price}</td>
                      <td className='w-16 text-center'>{product.discount}</td>
                      <td className='w-16 text-center'>{product.quantity}</td>
                      <td className='w-16 text-center'>{product.soldQuantity}</td>
                      <td className='w-16'>{product.createDate}</td>
                      <td className='w-16'>{product.updateDate}</td>
                      <td className='w-16 text-center'>
                        <button onClick={() => handleEdit(product)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='h-16'></div>
      </main>

      {message && (
        <Toast
          message={message}
          type={type}
          onClose={() => setMessage('')}
        />
      )}

      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box'>
            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={closeModal}
            >
              ✕
            </button>
            <Formik
              initialValues={{ name: editProduct ? editProduct.name : '' }}
              validationSchema={productSchema}
              onSubmit={handleAddOrUpdateBrand}
            >
              <Form>
                <h3 className='font-semibold text-2xl pb-6 text-center'>
                  {editProduct ? 'Edit Product' : 'Add New Product'}
                </h3>

                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text text-base-content undefined'>Name</span>
                  </label>
                  <Field
                    type='text'
                    name='name'
                    className='input input-bordered w-full '
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='text-error'
                  />
                </div>

                <div className='form-control w-full flex flex-row gap-5'>
                  <div className='basis-1/4'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>price</span>
                    </label>
                    <Field
                      type='number'
                      name='price'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='price'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/4'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>discount</span>
                    </label>
                    <Field
                      type='number'
                      name='discount'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='discount'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/4'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>quantity</span>
                    </label>
                    <Field
                      type='number'
                      name='quantity'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='quantity'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/4'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>soldQuantity</span>
                    </label>
                    <Field
                      type='number'
                      name='soldQuantity'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='soldQuantity'
                      component='div'
                      className='text-error'
                    />
                  </div>
                </div>

                <div className='form-control w-full flex flex-row gap-5'>
                  <div className='basis-1/3'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>model</span>
                    </label>
                    <Field
                      type='text'
                      name='model'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='model'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/3'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>color</span>
                    </label>
                    <Field
                      type='text'
                      name='color'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='color'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/3'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>origin</span>
                    </label>
                    <Field
                      type='text'
                      name='origin'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='origin'
                      component='div'
                      className='text-error'
                    />
                  </div>
                </div>

                <div className='form-control w-full flex flex-row gap-5'>
                  <div className='basis-1/3'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>warrantyPeriod</span>
                    </label>
                    <Field
                      type='number'
                      name='warrantyPeriod'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='warrantyPeriod'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/3'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>screenSize</span>
                    </label>
                    <Field
                      type='number'
                      name='screenSize'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='screenSize'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/3'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>faceSize</span>
                    </label>
                    <Field
                      type='number'
                      name='faceSize'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='faceSize'
                      component='div'
                      className='text-error'
                    />
                  </div>
                </div>

                <div className='form-control w-full flex flex-row gap-5'>
                  <div className='basis-1/2'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>faceMaterial</span>
                    </label>
                    <Field
                      type='text'
                      name='faceMaterial'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='faceMaterial'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/2'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>frameMaterial</span>
                    </label>
                    <Field
                      type='text'
                      name='frameMaterial'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='frameMaterial'
                      component='div'
                      className='text-error'
                    />
                  </div>
                </div>

                <div className='form-control w-full flex flex-row gap-5'>
                  <div className='basis-1/2'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>wireMaterial</span>
                    </label>
                    <Field
                      type='text'
                      name='wireMaterial'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='wireMaterial'
                      component='div'
                      className='text-error'
                    />
                  </div>
                  <div className='basis-1/2'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>productWeight</span>
                    </label>
                    <Field
                      type='number'
                      name='productWeight'
                      className='input input-bordered w-full '
                    />
                    <ErrorMessage
                      name='productWeight'
                      component='div'
                      className='text-error'
                    />
                  </div>
                </div>

                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text text-base-content undefined'>description</span>
                  </label>
                  <Field
                    type='text'
                    name='description'
                    className='input input-bordered w-full '
                    as='textarea'
                    rows='4'
                  />
                  <ErrorMessage
                    name='description'
                    component='div'
                    className='text-error'
                  />
                </div>

                <div className='form-control w-full flex flex-row gap-5'>
                  <div className='basis-1/2'>
                    <img
                      src={base64String}
                      alt='hinh anh'
                      className='w-1/2 mx-auto my-3'
                    />
                    <Field name='file'>
                      {({ field, form, meta }) => (
                        <input
                          id='file'
                          name='file'
                          type='file'
                          onChange={(event) => {
                            handleOnChangeImage(event);
                            form.setFieldValue('file', event.currentTarget.files[0]);
                          }}
                        />
                      )}
                    </Field>
                  </div>
                  <div className='basis-1/2'>
                    <label className='label'>
                      <span className='label-text text-base-content undefined'>brand</span>
                    </label>
                    <Field
                      as='select'
                      name='brand'
                      className='input input-bordered w-full '
                      onChange={handleSelect}
                    >
                      {renderOptions()}
                    </Field>
                  </div>
                </div>

                <div className='modal-action'>
                  <button
                    className='btn btn-ghost'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary px-6'
                  >
                    Save
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}
