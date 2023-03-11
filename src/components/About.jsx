import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <Banner img="https://images.pexels.com/photos/2597878/pexels-photo-2597878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Vision></Vision>
      <Values></Values>
      <Story/>
      <Footer/>
    </div>
  );
}

export default About;

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
          <p>ABOUT US </p>{" "}
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
            <p className="bg-blue-600 m-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold text-xl">
              Our Vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div className="mt-16">
      <div className="">
        <p className="font-bold text-3xl text-center">Our Vision</p>

        <p className="text-xl p-4 my-4 text-left w-1/2 m-auto">
          We are a community of everyday people who are committed to expanding
          God’s family together because of Jesus for generations to come.
        </p>
        <p className="text-xl p-4 my-4 text-left w-1/2 m-auto">
          As a church in Vancouver, Washington we desire to work for the good of
          all who live, work, and play in this great city. We can't, we won't,
          and we don't want to do this alone.
        </p>

        <p className="text-xl p-4 my-4 text-left w-1/2 m-auto">
          We want to do this with you. No matter where you've been or what
          you've done, we want you to know that you haven't been forgotten by
          God. In fact, your story matters!
        </p>
      </div>
    </div>
  );
}

function Values() {
  return (
    <div class="bg-blue-400 m-4 pt-16 duration-200 ease-in-out transition-colors shadow-lg hover:bg-blue-500">
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


function Story(){
    return(
        <div className="mt-16">
        <p className="text-center font-bold text-3xl">Our Story</p>

        <p className="w-3/4 text-left m-auto p-4 mt-6 font-bold text-xl">
          Generations Church began with the call of Kyle & Ruth Davies to church
          planting in 2015. At that time they weren’t sure where in the country
          God was leading them. Uprooting their life and ministry, they went on
          a journey of exploration that led them to the Pacific Northwest at the
          invitation of George Johnson and the CEA. Ruth remembers that first
          plane ride to the Portland Airport saying, “It feels as if we are
          going to meet family.”
        </p>
        <p className="w-3/4 text-left m-auto p-4 mt-6 font-bold text-xl">
          After living in Vancouver for a time, Kyle and Ruth began inviting
          families and friends to join the journey of starting a new church.
          Psalm 22 was a formative Scripture that led to the naming of the
          church. The initial scope and shape of Generations Church began to
          form in January 2019.
        </p>

        <p className="w-3/4 text-left m-auto p-4 mt-6 font-bold text-xl">
          Together this initial group of people agreed to embody a common
          vision—being a community of people who engaged others with the news
          that God had not forgotten them. Starting from scratch the church
          began to gain momentum by adding value to the community through
          events, social engagement, and express their everyday faith in Jesus.
          In October 2019, we began weekly Sunday Gatherings at the Salmon Creek
          American Legion. After a year and a half as a mobile church, God
          blessed us with a 24/7 Ministry Center in Salmon Creek.
        </p>
        <p className="w-3/4 text-left m-auto p-4 mt-6 font-bold text-xl">
          Today, we have a driving conviction to display that God’s family is
          full of everyday people because of Jesus. We dream about future
          generations knowing Jesus and experiencing a positive impact that
          transcends multiple generations.
        </p>

        <p className="w-3/4 text-left m-auto p-4 mt-6 font-bold text-xl">
          We hope to learn where God's story, our story, and your story
          intersects.
        </p>
      </div>
    )
}