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
      <Story />
      <Team />
      <Footer />
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
          className="mt-12  rounded-xl brightness-[0.5] object-cover w-11/12 h-9/12 m-auto overflow-hidden"
          style={{ height: 600 }}
        />
        <div className="text-3xl md:text-7xl absolute top-1/2 text-white font-bold left-6 md:left-32">
          <p>ABOUT US </p>{" "}
          <div className="flex flex-wrap">
            <p className="bg-[#00a9e0] my-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold m-4 text-xl">
              Our Vision
            </p>
            <p className="bg-[#00a9e0] my-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold m-4 text-xl">
              Our Values
            </p>
            <p className="bg-[#00a9e0] my-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold m-4 text-xl">
              Our Story
            </p>
            <p className="bg-[#00a9e0] my-4 w-fit p-2 px-4 rounded mt-4 text-white font-bold m-4 text-xl">
              Our Team
            </p>{" "}
            
          </div>
        </div>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div className="mt-16">
      <div className="w-4/5 md:w-1/2 m-auto">
        <p className="font-bold text-3xl text-center">Our Vision</p>

        <p className="text-xl p-4 my-4 text-left  m-auto">
          We are a community of everyday people who are committed to expanding
          God’s family together because of Jesus for generations to come.
        </p>
        <p className="text-xl p-4 my-4 text-left m-auto">
          As a church in Zengeza, Zimbambwe we desire to work for the good of
          all who live, work, and play in this great Country. We can't, we
          won't, and we don't want to do this alone.
        </p>

        <p className="text-xl p-4 my-4 text-left  m-auto">
          We want to do this with you. No matter where you've been or what
          you've done, we want you to know that you haven't been forgotten by
          God. In fact, your story matters!
        </p>
      </div>
    </div>
  );
}

function Values() {
  const values = [
    {
      title: "Get Over Get",
      description:
        "Looking to make a difference in the lives of others and our community through generous living rather than always wanting to receive more.",
    },
    {
      title: "Progress Over Perfection",
      description:
        "We are a community of everyday people who are committed to expanding God’s family together because of Jesus for generations to come.",
    },
    {
      title: "Send Over Stay",
      description:
        "Embodying the gospel by living a life of generosity and service to others.",
    },
    {
      title: "Sprint Over Stagnate",
      description:
        "We put God’s purposes and priorities ahead of our own as we daily depend on Him while we live, work, and play.     ",
    },
    {
      title: "Story Over Status",
      description:
        "Cultivating lasting relationships that discover how Jesus shapes our identity, our past, and our future rather than being defined by others or ourselves.",
    },
  ];

  return (
    <div class="bg-[#00a9e0] m-4 pb-16 pt-16 duration-200 ease-in-out transition-colors shadow-lg ">
      <p class="text-3xl font-bold text-center text-white">Values</p>

      <div class=" text-center mt-16 p-2  w-3/4 m-auto cursor-pointer">
        {values.map((value) => (
          <div
            key={value.title}
            class="w-3/4 m-auto my-4 py-4 group font-bold  transition-all duration-300 ease-in-out"
          >
            <h3 className="font-bold bg-white p-4 rounded shadow-xl hover:scale-105 transition ease-in-out duration-150">
              {value.title}
            </h3>
            <p class="mt-1 text-center text-white group-hover:p-4 opacity-0 h-0 group-hover:h-fit transition-opacity duration-100   group-hover:flex group-hover:opacity-100">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <div className="mt-16">
      <p className="text-center font-bold text-3xl">Our Story</p>

      <p className="w-3/4 text-left m-auto p-4 mt-6 font-normal text-xl">
        Zengeza Baptist Church was planted by Australian Missionaries Mr & Mrs
        Bell with the help of the late Mr Kachipwa 1978. At that time they
        weren’t sure where in the Zengeza God was leading them to. Uprooting
        their life and ministry, they went on a journey of exploration that led
        them around the town from the present day Zengeza 4 area to the
        Chikwanha area and eventually after a year and a half as a mobile
        church, God blessed the church with a stand at Mafukanyuma road and the
        church building was officially opened in 1981 and Zengeza Baptsit Church
        became a full member of Baptist Union In Zimbabwe which is a member of
        the Baptist World Alliance which is a global network of 51 million
        Baptists in 128 countries and territories unified by a mission to impact
        the world for Christ.
      </p>
      <p className="w-3/4 text-left m-auto p-4 mt-6 font-normal text-xl">
        The first substantive Pastor of the Church was Reverend P Mapisa from
        1981 to 1992, He was succeded by Pastor Alfaneti for short period and
        then Reverend Mawire to over in 1993 until 2005. In 2007 Pastor Chandiwa
        joined the church as the Head Pastor until 2017 when he moved on another
        god"s calling. In 2021 Pastor W Chunga who is the current Senior Pastor
        assumed assumed god’s duties at the church in leading the congregation
        forward.
      </p>

      <p className="w-3/4 text-left m-auto p-4 mt-6 font-normal text-xl">
        Together this initial group of people agreed to embody a common
        vision—being a community of people who engaged others with the news that
        God had not forgotten them. Starting from scratch the church began to
        gain momentum by adding value to the community through events, social
        engagement, and express their everyday faith in Jesus. In 1981, the
        church began weekly Sunday Gatherings at the then new premises along
        Mafukachuma Road. .
      </p>
      <p className="w-3/4 text-left m-auto p-4 mt-6 font-normal text-xl">
        Today, we have a driving conviction to display that God’s family is full
        of everyday people because of Jesus. We dream about future generations
        knowing Jesus and experiencing a positive impact that transcends
        multiple generations.
      </p>

      <p className="w-3/4 text-left m-auto p-4 mt-6 font-normal text-xl">
        We hope to learn where God's story, our story, and your story
        intersects.
      </p>
    </div>
  );
}

function Team() {
  const data = [
    {
      name: "Mr C zengeza",
      position: "Men Fellowship",
      image:
        "https://thechurchco-production.s3.amazonaws.com/uploads/sites/1974/2020/08/1.png",
    },
    {
      name: "Mrs C zengeza",
      position: "Ladies Ministry",
      image:
        "https://thechurchco-production.s3.amazonaws.com/uploads/sites/1974/2020/08/3.png",
    },
    {
      name: "Brother C Zengeza",
      position: "Youth group",
      image:
        "https://thechurchco-production.s3.amazonaws.com/uploads/sites/1974/2020/08/3.png",
    },
    {
      name: "Brother C Zengeza",
      position: "Youth group",
      image:
        "https://thechurchco-production.s3.amazonaws.com/uploads/sites/1974/2020/08/3.png",
    },
    {},
  ];
  return (
    <div className="bg-[#00a9e0] m-4 mt-16 pb-16 pt-16 rounded duration-200 ease-in-out transition-colors shadow-lg ">
      <p className="text-3xl font-bold text-center text-white">
        Ministry Leaders
      </p>

      <div className="flex lg:flex-row flex-col justify-between items-center mt-16">
        {data.map((item) => (
          <div className="flex flex-col items-center justify-center mt-4">
            <img src={item.image} className="w-3/4 h-2/4 rounded shadow-lg" />
            <p className="text-white font-bold text-xl mt-10">{item.name}</p>
            <p className="text-white font-normal text-xl mt-4">
              {item.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
