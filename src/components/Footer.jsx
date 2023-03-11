import React from "react";
import { BsFacebook, BsInstagram, BsSpotify, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdEmail, MdPhone, MdWbTwilight, MdWhatsapp } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-black text-white mt-16 p-16 m-3">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <MdEmail className="text-5xl" />
          <p>Email Us</p>
          <p>Church@rmail.com</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <MdPhone className="text-5xl" />
          <p>Email Us</p>
          <p>Church@rmail.com</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <MdWhatsapp className="text-5xl" />
          <p>Email Us</p>
          <p>Church@rmail.com</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <MdWbTwilight className="text-5xl" />
          <p>Email Us</p>
          <p>info@zengezabapist.org.com</p>
        </div>
      </div>
      

      <div className="flex justify-evenly md:w-1/4 m-auto mt-24">
        <BsFacebook/>
        <BsInstagram/>
        <BsTwitter></BsTwitter>
        <BsYoutube/>

        <BsSpotify/>

      </div>

      <div className="flex w-3/4 m-auto justify-evenly mt-16 text-gray-300 flex-wrap">
        <p>Ask 
        Questions
        </p>
        <p>Baptism</p>
        <p>Become Like Jesus</p>
        <p>Get Prayer</p>
        <p>Share a need</p>
      </div>
      <p className="text-center mt-16">© 2023 Zenegeza baptist church </p>
      <p className="text-center mt-16">TrendOnline</p>

    </div>
  );
}

export default Footer;
