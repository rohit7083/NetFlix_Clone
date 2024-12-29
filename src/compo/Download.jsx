import React from "react";

function Download() {
  return (
    <>
     <div className="main flex-wrap flex justify-evenly 
     items-center py-5 px-5 lg:py-20 md:py-20">
   <div className="right order-last lg:order-first  md:order-first">
   <img
    className="lg:w-[30em] lg:h-[15em] md:w-[35em] md:h-[15em] w-full"
    src="https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/c144749aa0df745e43367744af149f66/Android_Collage_1920x1080__UCAN_En.jpg"
    alt="Android Collage"
  />
        </div>


      <div className="left mb-10 lg:mb-0 md:mb-0 sm:mb-0">
          <h2 className="text-white lg:text-5xl md:text-5xl font-bold text-center text-3xl
          lg:text-start md:text-start sm:text-start ">Download your shows <br className='' /> to watch offline</h2>
          <p className="text-white lg:text-2xl md:text-2xl py-5 text-lg text-center
           lg:text-start md:text-start sm:text-start">  
            Save your favourites easily and always have <br /> something to watch.
          </p>
        </div>

     

        </div> 

        
    </>
  );
}

export default Download;
