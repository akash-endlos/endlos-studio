import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const FormContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Mobile Number is required'),
    message: Yup.string().required('Message is required'),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { name, email, phone, message } = data;
    setIsSubmitting(true);

    try {
      await axios.post('/api/send-email', { name, email, phone, message });
      reset();
      toast.success('Successfully Sent', { theme: 'colored', position: 'top-right' });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', { theme: 'colored' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full pb-10" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-white pb-10">
        <span className="font-bold tracking-[.2em] cursor-pointer text-2xl align-middle">Write Us</span>
      </h4>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-name">
            Name
          </label>
          <input
            type="text"
            {...register('name')}
            className="appearance-none block w-full text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-black focus:bg-black"
            id="grid-name"
            placeholder="Please enter full name"
          />
          {errors.name && <p className="text-white">{errors.name.message}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="appearance-none block w-full bg-black text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black"
            id="grid-email"
            placeholder="Please enter email"
          />
          {errors.email && <p className="text-white">{errors.email.message}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-phone">
            Mobile Number
          </label>
          <input
            type="text"
            {...register('phone')}
            className="appearance-none block w-full text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-black focus:bg-black"
            id="grid-phone"
            placeholder="Please enter mobile number"
          />
          {errors.phone && <p className="text-white">{errors.phone.message}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
            YOUR MESSAGE
          </label>
          <textarea
            name="message"
            {...register('message')}
            id="message"
            rows="4"
            className="outline-none block p-2.5 w-full text-sm text-white bg-black rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Write your thoughts..."
          ></textarea>
          {errors.message && <p className="text-white">{errors.message.message}</p>}
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-black hover:text-white hover:bg-black py-2 px-4 rounded"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default FormContainer;
