import React from "react";
import banner from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500 dark:text-blue-500">
                new everyday!!!
              </span>
            </h1>
            <p className="text-xl">
              We offer diverse books for learning, including both free and paid
              categories, catering to various educational needs and interests.
              Explore our range for your learning journey.
            </p>
            <label className="input input-bordered dark:border-white flex items-center gap-2 dark:bg-slate-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:bg-slate-900 "
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow dark:bg-slate-900 "
                placeholder="Email"
              />
            </label>
          </div>
          <button className="btn mt-6 dark:bg-blue-500 hover:bg-pink-800 hover:border-pink-800 dark:hover:bg-blue-800 dark:hover:border-blue-800 dark:border-blue-500 btn-secondary">
            Get Start
          </button>
        </div>
        <div className="w-full order-1 md:w-1/2  ">
          <img
            className="w-92 h-92 md:ml-20 md:mt-28 mt-8 "
            src={banner}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
