import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
import Pic from "../assets/loginSignup.jpg";

const Signup = () => {
  return (
    <div className="flex flex-row">
      <img className="hidden lg:w-2/3 lg:h-screen lg:inline" src={Pic} />
      <div className="flex flex-col flex-grow justify-center">
        <h1 className="text-[#C6A136] text-head text-center">Sign Up</h1>
        <div className="mx-auto mt-8">
          <p className="text-norm text-gray-400">Enter your Email:</p>
          <div className="mx-auto rounded overflow-hidden shadow-md bg-slate-50">
            <input
              type="email"
              className="w-96 px-4 py-2 border border-[#F8EED5] bg-[#F8EED5] focus:outline-none focus:border-[#B28D26] rounded"
              required
            />
          </div>
          <p className="text-norm text-gray-400 mt-4">Enter your Password:</p>
          <div className="mx-auto rounded overflow-hidden shadow-md bg-slate-50">
            <input
              type="password"
              className="w-96 px-4 py-2 border border-[#F8EED5] bg-[#F8EED5] focus:outline-none focus:border-[#B28D26] rounded"
              required
            />
          </div>
          <p className="text-norm text-gray-400 mt-4">
            Re-enter your Password:
          </p>
          <div className="mx-auto rounded overflow-hidden shadow-md bg-slate-50">
            <input
              type="password"
              className="w-96 px-4 py-2 border border-[#F8EED5] bg-[#F8EED5] focus:outline-none focus:border-[#B28D26] rounded"
              required
            />
          </div>
          <br />
          <div className="flex flex-col flex-grow justify-center">
            <input
              className="shadow appearance-none border border-[#B28D26] bg-[#F8EED5] rounded-lg text-[#C6A136] h-12 w-32 mt-8 mx-auto hover:bg-[#B28D26] hover:text-[#F8EED5]"
              type="submit"
              value="SIGN UP"
            />
            <p className=" text-gray-400 mx-auto mt-8">Already have an account?</p>
            <Link className="mx-auto text-[#2F99E7]" to="/">click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
