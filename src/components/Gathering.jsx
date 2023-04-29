import React from "react";
import { BsFillBookFill } from "react-icons/bs";
import Footer from "./Footer";
import Navbar from "./Navbar";

const GatherData = [
  {
    img: "https://images.pexels.com/photos/3700250/pexels-photo-3700250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "10.30 Gathering",
    desc: "We're located within a business complex across from Albertsons and Kaiser Permanente in Salmon Creek. 14313 NE 20th Ave A-104, Vancouver, WA, 98686",
  },
  {
    img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sunday Gathering",
    desc: "We gather every Sunday at 10:30am at the Church of the Highlands in Birmingham, AL. We have a time of worship, teaching, and prayer. ",
  },
  {
    img: "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Parking",
    desc: "We have plenty of parking available in the parking lot and on the street. We also have a parking attendant to help you find a spot.",
  },
];

function Gathering() {
  return (
    <div>
      <Navbar />
      <Banner img="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <GatherSection GatherData={GatherData} />
      <Values />
      <Specs />
      <Footer />
    </div>
  );
}

export default Gathering;

function GatherSection({ GatherData }) {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center items-center ">
      {GatherData.map((item) => {
        return (
          <div className="md:w-1/3 hover:scale-105 duration-200 mt-16 my-4 shadow-sm hover:shadow h-90 m-auto p-4 bg-gray-100 mx-2">
            <img
              src={item.img}
              className="w-full  h-64 object-cover overflow-hidden"
            />
            <p className="text-xl font-bold py-2">{item.title}</p>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function Values() {
  return (
    <div class="bg-[#00a9e0] m-4 pt-16 duration-200 ease-in-out transition-colors shadow-lg hover:bg-[#00a9e6]">
      <p class="text-3xl font-bold text-center text-white">Values</p>

      <div class=" text-center mt-16 p-2  w-3/4 m-auto m-2">
        <div class="w-3/4 m-auto my-4 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-white group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>

        <div class="w-3/4 m-auto my-4 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-white group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>

        <div class="w-3/4 m-auto my-2 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-white group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>

        <div class="w-3/4 m-auto my-2 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-white group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>
      </div>
    </div>
  );
}

function Banner({ img }) {
  return (
    <div className=" w-full p-1 ">
      <div className="relative   ">
        <img
          src={img || banner}
          className="mt-12 rounded-xl brightness-[0.5] object-cover w-11/12 h-9/12 m-auto overflow-hidden"
          style={{ height: 600 }}
        />
        <div className="text-3xl  md:text-7xl absolute top-1/4 md:top-1/2 text-white font-bold left-8 md:left-32">
          <p className="px-4">Gatherings</p>{" "}
          <p className="text-xl py-4 px-4">
            We have multiple ways, locations, and times to gather.
          </p>
          <div className="flex flex-wrap justify-start items-center ">
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Our Vision
            </p>
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Our Vision
            </p>
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
            Our Vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Specs() {
  return (
    <div className="flex flex-col md:flex-row mt-16 p-2 ">
      <div className="bg-gray-200 p-6 flex flex-col justify-center items-center m-2 shadow-xl shadow-gray-300 hover:shadow-sm duration-100">
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

      <div className="bg-gray-200 p-6 flex flex-col justify-center items-center m-2 shadow-xl shadow-gray-300 hover:shadow-sm duration-100">
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

      <div className="bg-gray-200 p-6 flex flex-col justify-center items-center m-2 shadow-xl shadow-gray-300 hover:shadow-sm duration-100">
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
