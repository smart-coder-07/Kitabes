import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      Password: data.password,
    };
    await axios
      .post(`${window.location.origin}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        } else {
          toast.error(err);
        }
      });
  };
  return (
    <>
      <center>
        <div className="flex h-screen items-center justify-center border-[2px] shadow-md">
          <div className="w-[500px]">
            <div className="modal-box dark:bg-slate-900 dark:text-white">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link
                  to={"/"}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>

                <h3 className="font-bold text-lg text-center">Signup</h3>
                <div className="space-y-4 ">
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
                      {...register("fullname", { required: true })}
                    />
                  </label>
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
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
                      type="text"
                      className="grow outline-none dark:bg-slate-900 dark:text-white"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </label>
                  {errors.email && (
                    <span className="text-sm text-red-500">
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
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow outline-none dark:bg-slate-900 dark:text-white"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                  </label>
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="btn btn-secondary hover:bg-pink-800 hover:border-pink-800 dark:bg-blue-500 dark:hover:bg-blue-800 dark:hover:border-blue-800 dark:border-blue-500">
                    Signup
                  </button>
                  <span className="mt-3 mx-2 text-lg ">
                    Have an account?{" "}
                    <button
                      className="link-primary underline"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Signup;
