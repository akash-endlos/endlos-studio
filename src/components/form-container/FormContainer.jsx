import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

const FormContainer = () => {
    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
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
        const { name, email, message } = data;
        try {
            await axios.post('/api/send-email', { name, email, message });
            reset()
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
            <div className='text-white pb-10'><span className="font-bold tracking-[.2em] cursor-pointer text-2xl align-middle ">Write Us</span></div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                    </label>
                    <input type="text" {...register('name')} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="please enter full name" />
                    {errors.name && <p className='text-white'>{errors.name.message}</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Email
                    </label>
                    <input type="email" {...register('email')} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="please enter email" />
                    {errors.email && <p className='text-white'>{errors.email.message}</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">YOUR MESSAGE</label>
                    <textarea name="message" {...register('message')} id="message" rows="4" className=" outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    {errors.message && <p className='text-white'>{errors.message.message}</p>}
                </div>
            </div>
            <div>
                <button type='submit' className="bg-white text-black hover:text-white hover:bg-black py-2 px-4 rounded">Submit</button>
            </div>
        </form>
    )
}

export default FormContainer