import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSpotify,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import {
  MdCardGiftcard,
  MdEmail,
  MdLocationCity,
  MdPhone,
  MdWbTwilight,
  MdWhatsapp,
} from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-white mt-16 p-8 m-2 md:mx-12 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center p-2 items-center m-3">
          <MdEmail className="text-5xl" />
          <p className="mt-2">Email Us!</p>
          <p className="mt-2 text-gray-400">info@zengezabaptistchurch.org</p>
        </div>

        <div className="flex flex-col justify-center p-2 items-center m-3">
          <MdPhone className="text-5xl" />
          <p className="mt-2">Call Us!</p>
          <p className="mt-2 text-gray-400">0774130908 </p>
        </div>

        <div className="flex flex-col justify-center p-2 items-center m-3">
          <VscLocation className="text-5xl" />
          <p className="mt-2">Find Us!</p>
          <p className="mt-2 text-gray-400 text-center">
            Number 19 Mafukachuma Road , Zengeza 2{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center p-2 items-center m-3">
          <MdCardGiftcard className="text-5xl" />
          <p className="mt-2">Give Here!</p>
          <p className="mt-2 text-gray-400">Give Order</p>
        </div>
      </div>

      <div className="flex justify-evenly md:w-1/4 m-auto mt-24 text-xl">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter></BsTwitter>
        <BsYoutube />

        <BsSpotify />
      </div>

      <div className="flex w-3/4 m-auto justify-evenly mt-16 text-gray-300 flex-wrap">
        <p>Ask Questions</p>
        <p>Baptism</p>
        <p>Become Like Jesus</p>
        <p>Get Prayer</p>
        <p>Share a need</p>
      </div>
      <p className="text-center mt-16">© Zengeza Baptist Church 2023</p>
      <Link to="https://trendonline.co.zw/">
        <p className="text-center mt-16 text-gray-400">
          Designed by TrendOnline Digital
        </p>
      </Link>
    </div>
  );
}

export default Footer;
