import React from "react";

function Enjoy() {
  return (
    <>
     <div className="main flex-wrap flex justify-evenly 
     items-center py-5 px-5 lg:py-20 md:py-20">
      <div className="left mb-10 lg:mb-0 md:mb-0 sm:mb-0">
          <h2 className="text-white lg:text-5xl md:text-5xl font-bold text-center text-3xl
          lg:text-start md:text-start sm:text-start ">Enjoy On your TV</h2>
          <p className="text-white lg:text-2xl md:text-2xl py-5 text-lg text-center
           lg:text-start md:text-start sm:text-start">  
            Watch on smart TVs, PlayStation, Xbox, 
            <br className="hidden lg:block md:block sm:block"/>
            Chromecast, Apple TV, Blu-ray
            players and more
          </p>
        </div>

        <div className="right">
        <iframe
          className="lg:w-[35em] lg:h-[15em] md:w-[35em] md:h-[15em]  w-full"
          src="https://www.youtube.com/embed/YvW4zhPDk60"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>

        </div> 

        
    </>
  );
}

export default Enjoy;
