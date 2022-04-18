import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;