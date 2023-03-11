import Hamburger from "hamburger-react";
import React from "react";

function Navbar() {
  const [open, setopen] = React.useState(true);

//   set open to true only if window size is less than 768px

    // React.useEffect(() => { 
    //     if (window.innerWidth < 768) {
    //         setopen(true);
    //     }
    // }, []);


  return (
    <div className="">
      <div className="flex justify-between items-center">
        <img
          className="w-64"
          src="https://res.cloudinary.com/thechurchcoproduction/image/fetch/f_auto/https://thechurchco-production.s3.amazonaws.com/uploads/sites/1974/2020/03/Asset-52.png"
        />
<div             className="bhm flex md:hidden"
>

          <Hamburger
            toggle={() => {
              setopen(!open);
            }}
            toggled={open}
            color="#a79b9b"
            className="bhm flex md:hidden z-50"
          />
</div>
          <div className=" justify-evenly w-2/4 hidden md:flex">
            <a>ABOUT</a>
            <a>EVENTS</a>
            <a>GATHER</a>
            <a>GATHER</a>
            <a>GATHER</a>
          </div>

          {open && <div className="bg-white transition-all ease-in-out duration-100 flex md:hidden flex-col w-3/4 justify-around py-24 h-full top-0 z-40 absolute left-0 font-bold">
            <a>ABOUT</a>
            <a>EVENTS</a>
            <a>GATHER</a>
            <a>GATHER</a>
            <a>GATHER</a>
          </div>}
        
      </div>
    </div>
  );
}

export default Navbar;
