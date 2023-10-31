import React, { useEffect, useState } from 'react';
import requestHandler from '../../utils/requestHandle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Toast from '../../components/Toast';

export default function Brands() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [editBrand, setEditBrand] = useState(null);
  const [state, setState] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
    setEditBrand(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditBrand(null);
  };

  const brandSchema = Yup.object().shape({
    name: Yup.string().required('Brand name is required'),
  });

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await requestHandler.get('brands/');
        const data = response.data.data;
        setBrands(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBrands();
  }, [state]);

  const handleEdit = (brand) => {
    setEditBrand(brand);
    setIsModalOpen(true);
  };

  const handleAddOrUpdateBrand = async (values) => {
    try {
      let response;
      if (editBrand) {
        response = await requestHandler.put(`brands/${editBrand.id}`, values);
      } else {
        response = await requestHandler.post('brands/', values);
      }
      const data = response.data.data;
      const updatedBrands = brands.map((brand) => (brand.id === data.id ? data : brand));
      setBrands(updatedBrands);
      setState(!state);
      setType('success')
      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <main className='flex-1 overflow-y-auto pt-8 px-6  bg-base-200'>
        <div className='card w-full p-6 bg-base-100 shadow-xl mt-2'>
          <div className='text-xl font-semibold inline-block'>
            Brands
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
                    <th>Id</th>
                    <th>Name</th>
                    <th>Create Date</th>
                    <th>Update Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr key={brand.id}>
                      <td>{brand.id}</td>
                      <td>{brand.name}</td>
                      <td>{brand.createDate}</td>
                      <td>{brand.updateDate}</td>
                      <td>
                        <button onClick={() => handleEdit(brand)}>Edit</button>
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
          <div className='modal-box  '>
            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={closeModal}
            >
              ✕
            </button>
            <Formik
              initialValues={{ name: editBrand ? editBrand.name : '' }}
              validationSchema={brandSchema}
              onSubmit={handleAddOrUpdateBrand}
            >
              <Form>
                <h3 className='font-semibold text-2xl pb-6 text-center'>
                  {editBrand ? 'Edit Brand' : 'Add New Brand'}
                </h3>
                <div className='form-control w-full mt-4'>
                  <label className='label'>
                    <span className='label-text text-base-content undefined'>Name</span>
                  </label>
                  <Field
                    type='text'
                    name='name'
                    className='input  input-bordered w-full '
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='text-error'
                  />
                </div>
                <p className='text-center  text-error mt-16'></p>
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
