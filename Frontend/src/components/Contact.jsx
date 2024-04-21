import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" container mx-auto md:px-20 px-4 pt-5">
        <div className=" p-5 md:px-16 md:pb-16 mt-28 mb-16 items-center justify-center rounded-md text-center border-[2px] shadow-md w-46 md:mx-48">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="pb-3 md:pb-5 font-bold text-2xl mt-6">Contact Us</h1>
            <label className="border-[2px] p-3 rounded-md flex items-center gap-2 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:bg-slate-900 dark:text-white"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none dark:bg-slate-900 dark:text-white"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <span className="text-sm flex justify-between text-red-500">
                This field is required
              </span>
            )}
            <label className="border-[2px] p-3 rounded-md flex items-center gap-2 mt-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:bg-slate-900 dark:text-white"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow outline-none dark:bg-slate-900 dark:text-white"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-sm flex justify-between text-red-500">
                This field is required
              </span>
            )}
            <label className="border-[2px] p-3 rounded-md flex items-center gap-2 mt-6 ">
              <input
                type="number"
                className="grow outline-none dark:bg-slate-900 dark:text-white"
                placeholder="Mobile"
                {...register("number", { required: true })}
              />
            </label>
            {errors.number && (
              <span className="text-sm flex justify-between text-red-500">
                This field is required
              </span>
            )}
            <label className=" border-[2px] p-3 rounded-md flex items-center gap-2 mt-6 ">
              <textarea
                placeholder="Type Your Query"
                className="textarea-md w-full outline-none dark:bg-slate-900 dark:text-white"
                {...register("textarea", { required: true })}
              ></textarea>
            </label>
            {errors.textarea && (
              <span className="text-sm flex justify-between text-red-500">
                This field is required
              </span>
            )}
            <div className="mt-4 flex justify-between">
              <button className="btn  btn-accent">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
