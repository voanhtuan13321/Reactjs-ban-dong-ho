import { Link, useNavigate } from 'react-router-dom';
import requestHandle from '../utils/requestHandle';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import undraw from '../assets/img/bg-01.jpg';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  useEffect(() => {
    localStorage.removeItem('token')
  },[])

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = async (values) => {
    try {
      const response = await requestHandle.post('login', {
        email: values.email,
        password: values.password,
      });

      const data = response.data;

      if (data.status === 'success') {
        const accessToken = data.accessToken;
        localStorage.setItem('token', accessToken);
        navigate('/client/cart');
      } else {
        console.log('Đăng nhập không thành công');
      }
    } catch (err) {
      console.error('Lỗi:', err);
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
          <h1 className='text-4xl text-white font-bold uppercase text-center p-4'>Sign In</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className='w-full py-10 px-20'>
            <div className='mb-6 grid grid-cols-8 gap-2'>
              <label
                className='text-[#808080] text-sm font-bold self-center col-span-1'
                htmlFor='email'
              >
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className='w-full col-span-7 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                placeholder='Enter email'
              />
              <div className="col-span-1"></div>
              <ErrorMessage
                name='email'
                component='div'
                className='text-red-500 col-span-7'
              />
            </div>

            <div className='mb-6 grid grid-cols-8 gap-2'>
              <label
                className='block text-[#808080] text-sm font-bold self-center col-span-1'
                htmlFor='password'
              >
                Password
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                className='w-full col-span-7 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                placeholder='Enter password'
              />
              <div className="col-span-1"></div>
              <ErrorMessage
                name='password'
                component='div'
                className='text-red-500 col-span-7'
              />
            </div>
            <div className='mb-6 grid grid-cols-8 pt-7'>
              <div className='col-span-1'></div>
              <button
                type='submit'
                className='w-full col-span-7 bg-main-red text-white font-bold py-2 rounded-full hover:bg-main-black'
              >
                Login
              </button>
            </div>
            <div className='col-span-2 text-right'>
              <Link
                to='/register'
                className='text-[#999999] text-sm'
              >
                Register?
              </Link>
            </div>
          </Form>
        </Formik>
        <div className='relative bg-gray-600 bg-opacity-70 top-0 left-0 h-full'></div>
      </div>
    </div>
  );
}
