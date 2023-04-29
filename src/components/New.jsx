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

function New() {
  return (
    <div>
      <Navbar />
      <Banner img="https://images.pexels.com/photos/4920855/pexels-photo-4920855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <NewSection />
      <Activity/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default New;

function Aboutus(){
    return(
        <div className="mt-16">
                        <p className="text-center text-3xl ">About Us</p>
                        <div class=" text-center mt-16 p-2  w-3/4 m-auto m-2">
        <div class="w-3/4 m-auto my-4 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-blue-500 text-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-black group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>

        <div class="w-3/4 m-auto my-4 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-blue-500 text-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-black group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>

        <div class="w-3/4 m-auto my-2 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-blue-500 text-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-black group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>

        <div class="w-3/4 m-auto my-2 py-4 group font-bold  transition-all duration-300 ease-in-out">
          <h3 className="font-bold bg-blue-500 text-white p-4 rounded shadow-xl">
            Get Over Get
          </h3>
          <p class="mt-1 text-center text-black group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
            Looking to make a difference in the lives of others and our
            community through generous living rather than always wanting to
            receive more.
          </p>
        </div>
      </div>


        </div>
    )
}

      function Activity() {
        return (
          <div className="mt-16">
            <p className="text-center text-3xl ">Activity Groups</p>
            <p className="text-center p-4">
              Activity groups are a great way to connect with others around
              Generations Church with no strings attached.
            </p>
            <div className="flex mt-16 flex-wrap flex-col md:flex-row">
              {GroupData.map((item) => (
                <div className="bg-gray-100 rounded-lg shadow-sm md:w-1/4 m-auto my-4 mt p-3 hover:shadow shadow-gray-400">
                  <img src={item.img} className="" />
                  <p className="text-left p-4 text-2xl font-bold">{item.title}</p>
                </div>
              ))}
            </div>
      
      
            <p className="text-center text-3xl mt-16">Ministry Teams</p>
            <p className="text-center ">
            Ministry Teams are designed to develop community around serving through our passions and gifting.
      
            <div className="flex md:flex-row flex-col mt-16 flex-wrap">
              {ministryData.map((item) => (
                <div className="bg-gray-100 rounded-lg shadow-sm md:w-1/4 m-auto my-4 mt p-3 hover:shadow shadow-gray-400">
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
        <div className="text-3xl md:text-7xl absolute top-1/4 md:top-1/2 text-white font-bold left-8 md:left-32">
          <p>NEW(ISH) TO GENERATIONS CHURCH?</p>{" "}
          <p className="text-xl py-4">
            You're in the right place! (scroll down)
          </p>
          <div className="flex  flex-wrap justify-start items-center">
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Gather{" "}
            </p>
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Grow{" "}
            </p>
            <p className="bg-[#00a9e0] m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Go{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewSection() {
  return (
    <div className="mt-16">
      <div className="">
        <p className="font-bold text-3xl text-center">
          We can't wait to meet you!
        </p>

        <p className="text-xl p-4 my-4 md:text-center md:w-1/2 m-auto">
          We are a start up church in Vancouver, WA. We are everyday people who
          are committed to expanding God’s family because of Jesus for
          generations to come. We would love to connect with you! We understand
          that visiting a new place can be intimidating, so we put together this
          list to help get you the information you need.
        </p>
      </div>
    </div>
  );
}
