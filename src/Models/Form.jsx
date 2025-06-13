import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(`Submitted Name: ${data.firstName} ${data.lastName}`);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>First Name is required</span>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>Last Name is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
