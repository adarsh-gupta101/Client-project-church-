import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Events() {
  return (
    <div>
        <Navbar/>
        <Banner img="https://images.pexels.com/photos/417827/pexels-photo-417827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h1 className="text-3xl font-bold mt-16 text-center ">Upcoming Events</h1>

        <EventsSection/>
        <EventsSection/>

        <Footer/>
      
    </div>
  )
}

export default Events


function EventsSection() {
    return (
      <div className="">
        <div className="flex md:flex-row flex-col mt-16">
          <div className="bg-gray-100 rounded shadow-sm m-4 mt p-3 hover:shadow-2xl shadow-gray-400">
            <img src="https://res.cloudinary.com/thechurchcoproduction/image/fetch/f_auto/https://registrations-production.s3.amazonaws.com/uploads/event/logo/1575824/medium_image-1672931147591.jpeg" />
            <p className="text-xl text-left p-4 font-bold">
              Women's Spring Retreat
            </p>
            <p className="text text-left px-4 font-bold"> April 14-15 2023</p>
          </div>
          <div className="bg-gray-100 rounded shadow-sm m-4 p-3 hover:shadow-2xl shadow-gray-400">
            <img src="https://res.cloudinary.com/thechurchcoproduction/image/fetch/f_auto/https://registrations-production.s3.amazonaws.com/uploads/event/logo/1666491/medium_image-1677800374034.jpg" />
            <p className="text-xl text-left p-4 font-bold">
              Women's Spring Retreat
            </p>
            <p className="text text-left px-4 font-bold"> April 14-15 2023</p>
          </div>{" "}
          <div className="bg-gray-100 rounded shadow-sm m-4 p-3 hover:shadow-2xl shadow-gray-400">
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
            <p>EVENTS
</p>{" "}
            <div className="flex  flex-wrap">
              <p className="bg-blue-600 my-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Serve - Community Fun - Connection
              </p>
            
            </div>
          </div>
        </div>
      </div>
    );
  }