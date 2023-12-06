import React from "react";
import spaceXdata from "../assets/spaceXdata.png"
const Portfolio=()=>{
    return(
        <div name="portfolio" className=" bg-gradient-to-b from-black to bg-gray-600 w-full text-white md:h-screen">
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className=" pb-8 font-bold inline">
                    <p className=" text-4xl">Portfolio</p>
                    <p>Here check my react works</p>
                </div>
                <div className=" grid sm: grid-cols-2 md:grid-cols-3 gap-8 px-12">
                    <div className=" shadow-md shadow-red-900 rounded-lg">
                    <div className="">
                        <img src={spaceXdata} alt="spc data" className=" rounded-md duration-200 hover:scale-105"/>
                    </div>
                    <div className=" flex items-center justify-center">
                    <button className=" w-1/2 px-6 m-4 duration-200 hover:scale-105">demo</button>
                    <button className=" w-1/2 px-6 m-4 duration-200 hover:scale-105">code</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;