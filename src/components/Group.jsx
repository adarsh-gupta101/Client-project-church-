import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Departmentdata = [
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1999128/medium_image-1676482069386.jpg",
    title: "Men's Fellowship",
    desc: "He is an artist here to c",
  },
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1705919/medium_image-1646943626722.jpg",
    title: "Ladies Ruwadzano",
    desc: "He is an artist here to c",
  },
  {
    img: "https://images.pexels.com/photos/8815250/pexels-photo-8815250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Youth",
  },
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1755821/medium_image-1653326451878.jpg",
    title: "Sunday School",
  },
  {
    img: "https://images.pexels.com/photos/7569418/pexels-photo-7569418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Barnabas (Boys) Fellowship",
  },
  {
    img: "https://images.pexels.com/photos/8717608/pexels-photo-8717608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sisters Union",
  },
];

const ministryData = [
  {
    img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Praise and Worship",
    desc: "He is an artist here to c",
  },
  {
    img: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Ushering",
    desc: "lorem ipsum loipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
  {
    img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1523281/medium_image-1675725201125.jpg",
    title: "Hospitality",
  },
  {
    img: "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Compassion",
  },
  {
    img: "https://images.pexels.com/photos/218480/pexels-photo-218480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Maintenance",
  },
  {
    img: "https://images.pexels.com/photos/16102713/pexels-photo-16102713.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Intercession",
  },
  {
    img: "https://images.pexels.com/photos/272337/pexels-photo-272337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Bible Study",
  },
  {
    img: "https://images.pexels.com/photos/1690364/pexels-photo-1690364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Couples",
  },
  {
    img: "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tech Team",
  },
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
      <p className="text-center text-3xl ">Departments</p>
      <p className="text-center ">
        We have several departments that are designed to help you connect with
        others and grow in your faith.{" "}
      </p>
      <div className="flex mt-16 flex-wrap md:flex-row flex-col justify-center">
        {Departmentdata.map((item) => (
          <div className="bg-gray-50 hover:scale-105 duration-200 rounded-lg shadow-sm hover:shadow md:w-1/4 my-4 m-4 mt p-3 shadow-gray-400">
            <img src={item.img} className="" />
            <p className="text-left p-4 text-2xl font-bold">{item.title}</p>
            <p className="text-left p-4 text-xl ">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-3xl mt-16">Ministry Teams</p>
      <div className="text-center ">
        Ministry Teams are designed to develop community around serving through
        our passions and gifting.
        <div className="flex mt-16 flex-wrap md:flex-row flex-col justify-center">
          {ministryData.map((item) => (
            <div className="bg-gray-50 hover:scale-105 duration-200 m-4 shadow-sm rounded-lg hover:shadow md:w-1/4  my-4 mt p-3 shadow-gray-400">
              <img src={item.img} className="h-72 object-cover" />
              <p className="text-left p-4 text-2xl font-bold">{item.title}</p>
              <p className="text-left p-4 text-xl ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-3xl mt-16">Midweek Gatherings</p>
      <div className="text-center ">
        Gather with others during the week to deepen the community.
        <div className="flex mt-16 flex-wrap md:flex-row flex-col justify-center">
          {[
            {
              title: "Men's Meet-Ups",
              img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1916965/medium_image-1669386942262.jpg",
              desc: "2nd & 4th thursday @6.30PM",
            },
            {
              title: "Women's Meet-Ups (China Chamadzimai)",
              img: "https://groups-production.s3.amazonaws.com/uploads/group/header_image/1620767/medium_279909486_1551527478576949_6757142302480186320_n.jpg",
              desc: "Every thursday @10.00AM",
            },
          ].map((item) => (
            <div className="bg-gray-50 m-4 shadow-sm rounded-lg hover:shadow md:w-1/4  my-4 mt p-3 shadow-gray-400 hover:scale-105 duration-200">
              <img src={item.img} className="h-72 object-cover" />
              <p className="text-left p-4 text-2xl font-bold">{item.title}</p>
              <p className="text-left px-4 text-lg font-medium">{item.desc}</p>
            </div>
          ))}
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
        <div className="text-3xl md:text-7xl absolute top-1/4 md:top-1/2 text-white font-bold left-8 md:left-32">
          <p className="m-4">Groups</p>{" "}
          <p className="text-xl py-4 p-1 m-4">
            We have several departments that are designed to help you connect
            with others and grow in your faith.
          </p>
          <div className="flex flex-wrap justify-start items-center ">
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
