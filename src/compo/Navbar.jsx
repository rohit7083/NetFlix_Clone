import React from "react";

function Navbar() {
  return (
    <>
      <div className="main flex justify-between md:justify-around items-center lg:justify-around p-5  px-5
      lg:mb-20 md:mb-20 mb-10">
        <div className="left">
          <div className="netflixLogo">
            <img
              className="lg:w-44 md:w-44 w-28"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div className="main flex items-center">
            <div
              className="selector bg-slate-950 text-white mx-4 px-5  py-1
          rounted-md border-[1.5px] border-gray-500
          hover:ring-2 lg:px-5 md:5 hover:ring-gray-200 opacity-80"
            >
              <select name="" id="" className="bg-black outline-none">
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
              </select>
            </div>
            <button type="button" className="bg-red-800 text-white px-5 py-1.5
            rounded-lg font-semibold hover:bg-red-400">Login  </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
