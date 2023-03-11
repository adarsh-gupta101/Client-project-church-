import React from "react";
import Navbar from "./Navbar";
import banner from "../assets/banner.jpg";
import Iamnew from "../assets/New.jpg";
import outReach from "../assets/outreach.jpg";
import { BsFillBookFill } from "react-icons/bs";
import Footer from "./Footer";

function HomeScreen() {
  const [open, setopen] = React.useState(false);

  return (
    <div className="h-full">
      <Navbar />
      
      <Banner />
      <Specs />
      <Plug img="https://images.pexels.com/photos/2330141/pexels-photo-2330141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Plug img={"https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
      <Plug img="https://images.pexels.com/photos/226345/pexels-photo-226345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Plug />
      <Events />
      <Footer />
    </div>
  );
}

export default HomeScreen;

function Banner() {
  return (
    <div className=" w-full p-1 ">
      <div className="relative   ">
        <img
          src={banner}
          className="mt-12 rounded-xl brightness-[0.5] object-cover w-11/12 h-9/12 m-auto overflow-hidden"
          style={{height:600}}
        />
        <p className="text-3xl md:text-7xl absolute top-1/2 text-white font-bold left-8 md:left-32">
          Because of Jesus
        </p>
      </div>
    </div>
  );
}

function Specs() {
  return (
    <div className="flex flex-col md:flex-row mt-16 p-2 ">
      <div className="bg-gray-200 p-6 flex flex-col justify-center items-center m-2 shadow-xl shadow-gray-100 rounded-lg hover:shadow-sm duration-100">
        <BsFillBookFill className="text-5xl " />
        <h3 className="font-bold text-xl p-2">Watch Latest Teaching</h3>
        <p>
          Join us on our journey to live our faith every day. Browse prior
          Sunday Teachings & other series.
        </p>
        <p className="border border-gray-600 p-2 rounded-xl mt-8 hover:bg-black hover:text-white duration-150 ease-linear">
          Watch Now
        </p>
      </div>

      <div className="bg-gray-200 p-6 flex flex-col justify-center items-center m-2 shadow-xl  shadow-gray-100 rounded-lg hover:shadow-sm duration-100">
        <BsFillBookFill className="text-5xl " />

        <h3 className="font-bold text-xl p-2">Watch Latest Teaching</h3>
        <p>
          Join us on our journey to live our faith every day. Browse prior
          Sunday Teachings & other series.
        </p>
        <p className="border border-gray-600 p-2 rounded-xl mt-8 hover:bg-black hover:text-white duration-150 ease-linear">
          Watch Now
        </p>
      </div>

      <div className="bg-gray-200 p-6 flex flex-col justify-center items-center m-2 shadow-xl shadow-gray-100 rounded-lg hover:shadow-sm duration-100">
        <BsFillBookFill className="text-5xl " />

        <h3 className="font-bold text-xl p-2">Watch Latest Teaching</h3>
        <p>
          Join us on our journey to live our faith every day. Browse prior
          Sunday Teachings & other series.
        </p>
        <p className="border border-gray-600 p-2 rounded-xl mt-8 hover:bg-black hover:text-white duration-150 ease-linear">
          Watch Now
        </p>
      </div>
    </div>
  );
}

function Plug({img}) {
  return (
    <div className="flex flex-col justify-center items-center mt-16 rounded-lg mx-16">
      <div className="w-full relative">
        <img src={img ||Iamnew} className="h-72 rounded-xl w-full object-cover" />
        <div className="flex flex-col absolute top-1/2 px-6">
          <p className="text-6xl font-bold text-white">I'm New</p>
          <p className=" mt-3 border-gray-100 p-2 px-6 w-fit rounded-xl  text-white bg-blue-700 hover:bg-black hover:text-white duration-150 ease-linear">
            start here
          </p>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mt-16 text-center ">Upcoming Events</h1>
      <div className="flex md:flex-row flex-col mt-16">
        <div className="bg-gray-100 rounded-lg shadow-sm m-4 mt p-3 hover:shadow-2xl shadow-gray-400">
          <img src="https://res.cloudinary.com/thechurchcoproduction/image/fetch/f_auto/https://registrations-production.s3.amazonaws.com/uploads/event/logo/1575824/medium_image-1672931147591.jpeg" />
          <p className="text-xl text-left p-4 font-bold">
            Women's Spring Retreat
          </p>
          <p className="text text-left px-4 font-bold"> April 14-15 2023</p>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-sm m-4 p-3 hover:shadow-2xl shadow-gray-400">
          <img src="https://res.cloudinary.com/thechurchcoproduction/image/fetch/f_auto/https://registrations-production.s3.amazonaws.com/uploads/event/logo/1666491/medium_image-1677800374034.jpg" />
          <p className="text-xl text-left p-4 font-bold">
            Women's Spring Retreat
          </p>
          <p className="text text-left px-4 font-bold"> April 14-15 2023</p>
        </div>{" "}
        <div className="bg-gray-100 rounded-lg shadow-sm m-4 p-3 hover:shadow-2xl shadow-gray-400">
          <img src="https://registrations-production.s3.amazonaws.com/uploads/event/logo/1565920/medium_image-1672938905846.jpg" />
          <p className="text-xl text-left p-4 font-bold">
            Women's Spring Retreat
          </p>
          <p className="text text-left px-4 font-bold"> April 14-15 2023</p>
        </div>
      </div>
    </div>
  );
}
