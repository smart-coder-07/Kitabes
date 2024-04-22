import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Course/Courses";
import Signup from "./components/Signup";
import ContactForm from "./Contact/ContactForm";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Abouts from "./About/Abouts";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
