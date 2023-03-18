import React from "react";
import Navbar from "./Navbar";
import banner from "../assets/banner.jpg";
import Iamnew from "../assets/New.jpg";
import outReach from "../assets/outreach.jpg";
import bible from "../assets/bible.jpeg";
import { BsFillBookFill } from "react-icons/bs";
import { GiBookAura, GiCircleForest, GiWorld } from "react-icons/gi";
import Footer from "./Footer";

function HomeScreen() {
  const [open, setopen] = React.useState(false);

  return (
    <div className="h-full">
      <Navbar />

      <Banner />
      <Specs />
      <Plug
        title="I am new"
        button_name="START HERE"
        img="https://images.pexels.com/photos/2330141/pexels-photo-2330141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Plug
        title="Everyday Mission"
        button_name="SERVE"
        img={
          "https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <Plug
        title="Activity Groups"
        button_name="DISCOVER"
        img="https://images.pexels.com/photos/226345/pexels-photo-226345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Plug title="Bible Study" button_name="START HERE" />
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
          className="mt-12 rounded-xl brightness-[0.5] object-cover w-11/12 h-9/12 m-auto overflow-hidden object-left md:object-center"
          style={{ height: 600 }}
        />
        <div className="text-3xl md:text-7xl absolute top-1/2 text-white font-bold left-8 md:left-32">
          <p>Because of Jesus</p>
          <div className="flex md:flex-row flex-col">
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              WATCH ONLINE{" "}
            </p>
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              GET CONNECTED{" "}
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
      <div className="bg-gray-100 p-8 flex flex-col justify-center items-center m-2 shadow-xl  shadow-gray-200  rounded-lg hover:shadow-sm duration-100">
        <GiBookAura className="text-5xl " />
        <h3 className="font-bold text-xl p-2 mt-4">Watch Latest Teaching</h3>
        <p className="text-center">
          Join us on our journey to live our faith every day. Browse prior
          Sunday Teachings & other series.
        </p>
        <p className="border border-gray-600 p-2 rounded-xl mt-8 hover:bg-black hover:text-white duration-150 ease-linear">
          WATCH NOW{" "}
        </p>
      </div>

      <div className="bg-gray-100 p-8 mt-4 flex flex-col justify-center items-center m-2 shadow-xl  shadow-gray-200 rounded-lg hover:shadow-sm duration-100">
        <GiWorld className="text-5xl " />

        <h3 className="font-bold text-xl p-2 mt-4 text-center">
          What To Expect At Gatherings
        </h3>
        <p className="text-center">
          Large and small group gatherings throughout the week in Vancouver, WA.
        </p>
        <p className="border border-gray-600 p-2 rounded-xl mt-8 hover:bg-black hover:text-white duration-150 ease-linear">
          DIRECTIONS DETAILS{" "}
        </p>
      </div>

      <div className="bg-gray-100 p-8 flex mt-4 flex-col justify-center items-center m-2 shadow-xl  shadow-gray-200  rounded-lg hover:shadow-sm duration-100">
        <GiCircleForest className="text-5xl " />

        <h3 className="font-bold text-xl p-2 mt-4">Why Jesus?</h3>
        <p className="text-center">
          Resources about faith, what we believe, and how we help people find
          spiritual direction.
        </p>
        <p className="border border-gray-600 p-2 rounded-xl mt-8 hover:bg-black hover:text-white duration-150 ease-linear">
          DISCOVER{" "}
        </p>
      </div>
    </div>
  );
}

function Plug({ img, title, button_name }) {
  return (
    <div className="flex flex-col justify-center items-center mt-16 rounded-lg mx-2 md:mx-16">
      <div className="w-full relative">
        <img
          src={img || Iamnew}
          className="h-72 rounded-xl w-full object-cover object-center brightness-75	"
        />
        <div className="flex flex-col absolute top-1/2 px-6">
          <p className="text-2xl md:text-5xl font-bold text-white">
            {title || "I'm New"}
          </p>
          <p className=" cursor-pointer mt-5 text-xl border-gray-100 p-2 px-6 w-fit rounded-xl  text-white bg-[#00a9e0] hover:bg-black hover:text-white duration-150 ease-linear">
            {button_name || " Start here"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Events() {
  const eventData = [
    {
      imageSrc: bible,
      title: "Bible Exploits",
      date: "Every Wednesday",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7440146/pexels-photo-7440146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Good Friday Service",
      date: "April 7, 2023",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7038548/pexels-photo-7038548.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Easter 2023",
      date: "April 14-15, 2023",
    },
  ];
  return (
    <div className="">
      <h1 className="text-4xl font-extrabold mt-20 text-center ">
        Upcoming Events
      </h1>
      <div className="flex md:flex-row flex-col mt-16">
        {eventData.map((event) => (
          <EventCard
            key={event.title}
            imageSrc={event.imageSrc}
            title={event.title}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
}

function EventCard({ imageSrc, title, date }) {
  return (
    <div className="bg-gray-100 md:w-1/3 rounded-lg shadow-sm m-4 mt p-3 hover:shadow-2xl shadow-gray-400">
      <img src={imageSrc} className="" />
      <p className="text-xl text-left p-4 font-bold">{title}</p>
      <p className="text text-left px-4 font-bold">{date}</p>
    </div>
  );
}
