import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <button
      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-800 duration-300 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
