import Hamburger from "hamburger-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Navbar() {
  const [open, setopen] = React.useState(false);

  //   set open to true only if window size is less than 768px

  // React.useEffect(() => {
  //     if (window.innerWidth < 768) {
  //         setopen(true);
  //     }
  // }, []);

  return (
    <div className="p-4 z-10 bg-white sticky top-0">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center font-bold text-xl">
          <img
            className="w-24 h-24 object-cover"
            src={logo}
          />
          <p>Zengeza Baptist Church </p>
        </Link>
        <div className="bhm flex md:hidden">
          <Hamburger
            toggle={() => {
              setopen(!open);
            }}
            toggled={open}
            color="#a79b9b"
            className="bhm flex md:hidden z-50"
          />
        </div>
        <div className=" justify-evenly items-center w-2/4 hidden md:flex font-extrabold">
       
       <Link to="/about">ABOUT</Link> 
       <Link to="/events">EVENTS</Link>
        <Link to="/gather">GATHER</Link>
        <Link to="/group">GROUP</Link>
        <Link to="/new">NEW</Link>
            

        
          <Modal />
        </div>

        {open && (
          <div className="bg-[#00a9e0] text-white transition-all ease-in-out duration-100 flex md:hidden flex-col w-3/4 justify-around items-center py-24 h-screen top-0 z-40 absolute left-0 font-bold">
             <Link to="/about">ABOUT</Link> 
       <Link to="/events">EVENTS</Link>
        <Link to="/gather">GATHER</Link>
        <Link to="/group">GROUP</Link>
        <Link to="/new">NEW</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <p
        onClick={() => setIsOpen(!isOpen)}
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className=" text-white font-bold bg-[#00a9e0] cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg py-2 px-4 text-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        GIVE
      </p>

      {isOpen && (
        <div
          class="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <img
                      src="https://avatars.planningcenteronline.com/uploads/organization/242801-1511899659/avatar.2.png"
                      className="w-24 m-auto"
                    />

                    <h3
                      class="text-lg leading-6 font-bold text-gray-900"
                      id="modal-title"
                    >
                      GIVE{" "}
                    </h3>
                    {/* an input tag */}
                    <input
                      type="text"
                      placeholder="Amount"
                      className="w-full border-2 border-gray-200 p-2 rounded-lg mt-4"
                    />

                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        General Fund: Donations to Generations Church to be used
                        where its needed most. Mail Checks to: Generations
                        Church 14313 NE 20th Ave, A104, Vancouver, WA 98686
                      </p>
                    </div>

                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Frequency{" "}
                    </h3>
                    {/* input with sselect tag */}
                    <select className="w-full border-2 border-gray-200 p-2 rounded-lg mt-4">
                      <option>One Time</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Pay now
                </button>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
