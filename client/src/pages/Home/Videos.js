import React from 'react'
import { Link } from "react-router-dom";

function Videos() {
  return (
   <>
      <section className="mt-12 lg:mt-24 relative isolate overflow-hidden  lg:overflow-visible  w-full 2xl:max-w-7xl  m-auto h-full">
        <div className="bg-orange-500 text-white -skew-y-1 bg-gradient-to-r from-yellow-400 to-orange-600 ">
          <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    What You Will Get from this Program
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                    Educational Sessions: Elevate your speaking game with
                    enlightening sessions
                  </p>
                </div>

                <div className="text-lg">
                  <Link to='/service' className="border-b border-white pb-1">
                    Book your Seat
                  </Link>
                </div>
              </div>
              
            </div>
            <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto h-full">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8  lg:max-w-7xl"> 

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto md:p-4 p-0 ">
      {/* First Video */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 sm:row-span-2 ">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full border-0  "
            src="https://www.youtube.com/embed/vOzD9Y3DtEk?si=aXq_vKtNzeNjs2f2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
       
      </div>

      {/* Second Image */}
      <div className="relative">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <img
            className="absolute inset-0 w-full h-full object-cover "
            src="https://i.postimg.cc/xC56QC8y/Copy-of-CCT-Pic-1.jpg"
            alt=""
          />
        </div>
       
      </div>

      {/* Third Image */}
      <div className="relative">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <img
            className="absolute inset-0 w-full h-full object-cover "
            src="https://i.postimg.cc/x84PfGpG/With-Ankur-1.png"
            alt=""
          />
        </div>
       
      </div>
      <div className="relative">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <img
            className="absolute inset-0 w-full h-full object-cover "
            src="https://i.postimg.cc/4dKpLbqc/Whats-App-Image-2023-12-04-at-15-40-29-1.jpg"
            alt=""
          />
        </div>
        
      </div> <div className="relative">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <img
            className="absolute inset-0 w-full h-full object-fit "
            src="https://i.postimg.cc/CMXwpL8V/TM-Divison-Level.jpg"
            alt=""
          />
        </div>
       
      </div> <div className="relative">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <img
            className="absolute inset-0 w-full h-full object-cover "
            src="https://i.postimg.cc/C1r69X8m/Screenshot-2024-05-29-at-3-10-33-AM.png"
            alt=""
          />
        </div>
       
      </div>
    </section>
        </div>


       

        </section>
          </div>
        </div>
      </section>

      

     


   </>
  )
}

export default Videos