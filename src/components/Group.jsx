import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const GroupData = [
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1999128/medium_image-1676482069386.jpg",
    title: "Crafting",
  },
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1705919/medium_image-1646943626722.jpg",
    title: "Hiking",
  },
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1755821/medium_image-1653326451878.jpg",
    title: "Volleyball",
  },
];

const ministryData = [
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1523262/medium_carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    title: "Counting teamZ",
  },
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1523207/medium_GSC_4-2.png",
    title: "Events + Outreach",
  },
  {
    img:"https://groups-production.s3.amazonaws.com/uploads/group/header_image/1523281/medium_image-1675725201125.jpg",
    title: "Greeting team",
  }
];
function Group() {
  return (
    <div>
      <Navbar />
      <Banner img="https://images.pexels.com/photos/2161681/pexels-photo-2161681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Activity />
      <Footer />
    </div>
  );
}

export default Group;

function Activity() {
  return (
    <div className="mt-16">
      <p className="text-center text-3xl ">Activity Groups</p>
      <p className="text-center ">
        Activity groups are a great way to connect with others around
        Generations Church with no strings attached.
      </p>
      <div className="flex mt-16 flex-wrap">
        {GroupData.map((item) => (
          <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow w-1/4 m-auto my-4 mt p-3 shadow-gray-400">
            <img src={item.img} className="" />
            <p className="text-left p-4 text-2xl font-bold">{item.title}</p>
          </div>
        ))}
      </div>


      <p className="text-center text-3xl mt-16">Ministry Teams</p>
      <p className="text-center ">
      Ministry Teams are designed to develop community around serving through our passions and gifting.

      <div className="flex mt-16 flex-wrap">
        {ministryData.map((item) => (
          <div className="bg-gray-100 shadow-sm rounded-lg hover:shadow w-1/4 m-auto my-4 mt p-3 shadow-gray-400">
            <img src={item.img} className="" />
            <p className="text-left p-4 text-2xl font-bold">{item.title}</p>
          </div>
        ))}
      </div>

      </p>
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
        <div className="text-3xl md:text-7xl absolute top-1/2 text-white font-bold left-8 md:left-32">
          <p>Gatherings</p>{" "}
          <p className="text-xl py-4">
            We have multiple ways, locations, and times to gather.
          </p>
          <div className="flex  flex-wrap">
            <p className="bg-blue-600 my-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Our Vision
            </p>
            <p className="bg-blue-600 m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Our Vision
            </p>
            <p className="bg-blue-600 m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Our Vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
