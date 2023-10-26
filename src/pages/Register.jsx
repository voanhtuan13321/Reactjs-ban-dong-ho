import { Link, useNavigate } from 'react-router-dom';
import requestHandle from '../utils/requestHandle';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import undraw from '../assets/img/bg-01.jpg';

export default function Register() {
  const navigate = useNavigate();

  const initialValues = {
    fullname: '',
    birthday: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    rePassword: '',
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    birthday: Yup.date().required('Birthday is required'),
    phone: Yup.string().required('Phone is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // localStorage.setItem('message', "User register successfully");

  const handleRegister = async (values) => {
    try {
      const response = await requestHandle.post('register', values);

      const data = response.data;

      if (data.status === 'success') {
        localStorage.setItem('message', data.message);
        navigate('/login');
      } else {
        console.log('Registration failed');
      }
    } catch (err) {
      console.error('Error:', err);
      navigate('/error');
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white w-full max-w-screen-md rounded-lg overflow-hidden'>
        <div
          className='bg-cover bg-center bg-gray-400 py-16'
          style={{ backgroundImage: `url(${undraw})` }}
        >
          <h1 className='text-4xl text-white font-bold uppercase text-center p-4'>Register</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form className='w-full py-10 px-20'>
            <div className='mb-6'>
              <label
                className='text-[#808080] text-sm font-bold self-center'
                htmlFor='fullname'
              >
                Fullname
              </label>
              <Field
                type='text'
                id='fullname'
                name='fullname'
                className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                placeholder='Enter fullname'
              />
              <ErrorMessage
                name='fullname'
                component='div'
                className='text-red-500'
              />
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-10'>
              <div className='col-span-1 mb-6'>
                <label
                  className='text-[#808080] text-sm font-bold self-center'
                  htmlFor='birthday'
                >
                  Birthday
                </label>
                <Field
                  type='date'
                  id='birthday'
                  name='birthday'
                  className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                />
                <ErrorMessage
                  name='birthday'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div className='col-span-1 mb-6'>
                <label
                  className='text-[#808080] text-sm font-bold self-center mb-3'
                  htmlFor='phone'
                >
                  Phone
                </label>
                <Field
                  type='text'
                  id='phone'
                  name='phone'
                  className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                  placeholder='Enter phone'
                />
                <ErrorMessage
                  name='phone'
                  component='div'
                  className='text-red-500'
                />
              </div>
            </div>

            <div className='mb-6'>
              <label
                className='text-[#808080] text-sm font-bold self-center'
                htmlFor='address'
              >
                Address
              </label>
              <Field
                type='text'
                id='address'
                name='address'
                className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                placeholder='Enter address'
              />
              <ErrorMessage
                name='address'
                component='div'
                className='text-red-500'
              />
            </div>

            <div className='mb-6'>
              <label
                className='text-[#808080] text-sm font-bold self-center'
                htmlFor='email'
              >
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                placeholder='Enter email'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-red-500'
              />
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-10'>
              <div className='col-span-1 mb-6'>
                <label
                  className='block text-[#808080] text-sm font-bold self-center'
                  htmlFor='password'
                >
                  Password
                </label>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                  placeholder='Enter password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500'
                />
              </div>
              <div className='col-span-1 mb-6'>
                <label
                  className='block text-[#808080] text-sm font-bold self-center'
                  htmlFor='rePassword'
                >
                  Re-Password
                </label>
                <Field
                  type='password'
                  id='rePassword'
                  name='rePassword'
                  className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                  placeholder='Enter re-password'
                />
                <ErrorMessage
                  name='rePassword'
                  component='div'
                  className='text-red-500'
                />
              </div>
            </div>
            <div className='mb-6 pt-7'>
              <button
                type='submit'
                className='w-full col-span-7 bg-main-red text-white font-bold py-2 rounded-full hover-bg-main-black'
              >
                Register
              </button>
            </div>
            <div className='col-span-2 text-right'>
              <Link
                to='/login'
                className='text-[#999999] text-sm'
              >
                Login?
              </Link>
            </div>
          </Form>
        </Formik>
        <div className='relative bg-gray-600 bg-opacity-70 top-0 left-0 h-full'></div>
      </div>
    </div>
  );
}
