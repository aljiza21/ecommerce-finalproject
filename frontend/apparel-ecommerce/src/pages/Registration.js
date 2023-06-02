import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import RegistrationImg from '../img/registration-img.png'
 
const Registration = () => {
    
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/');
    }

  return <div>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src={RegistrationImg}
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left mb-5">
            <h4 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Create an Account
            </h4>
          <label className="mr-1">Please fill out all the fields.</label>
        </div>
          <div className="flex items-center border border-solid border-gray-300 rounded mt-4">
            <FaUser className="ml-3 text-themecolor" />
            <input
              className="text-sm w-full px-4 py-2 focus:outline-none focus:border-none focus:ring-0"
              type="text"
              placeholder="Fullname"
            />
          </div>
          <div className="flex items-center border border-solid border-gray-300 rounded mt-4">
            <MdEmail className="ml-3 text-themecolor" />
            <input
              className="text-sm w-full px-4 py-2 focus:outline-none focus:border-none focus:ring-0"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border border-solid border-gray-300 rounded mt-4">
            <FaLock className="ml-3 text-themecolor" />
            <input
              className="text-sm w-full px-4 py-2 focus:outline-none focus:border-none focus:ring-0"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center border border-solid border-gray-300 rounded mt-4">
            <FaLock className="ml-3 text-themecolor" />
            <input
              className="text-sm w-full px-4 py-2 focus:outline-none focus:border-none focus:ring-0"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mt-4 flex justify-between font-semibold text-sm">
          <a className="text-black hover:underline hover:underline-offset-4" href="#">
            
          </a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-themecolor hover:border-white px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <a className="text-themecolor hover:underline hover:underline-offset-4" onClick={(navigateRegister)}>Login here.</a>
        </div>
      </div>
    </section>
  </div>;
};

export default Registration;