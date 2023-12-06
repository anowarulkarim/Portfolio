import React from "react";
import my from "../assets/my.PNG";
const home=()=>{
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b  justify-center items-center from-black to-gray-400 ">
            <div className=" max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className=" flex-col justify-center items-center">
                    <h1 className=" text-4xl sm:text-4xl font-bold text-white">Hey i am software developer</h1>
                    <p className=" py-5 text-white">I'm adept in web development, crafting digital experiences that captivate audiences. Proficient in 
                        front-end and back-end technologies, I create dynamic, user-friendly websites. Skilled in HTML, CSS, JavaScript, and various frameworks, I design and 
                        implement responsive and engaging web solutions. With a focus on both functionality and aesthetics, I build websites that deliver seamless experiences.</p>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-3px cursor-pointer">portfolio</button>
                </div>
                <div>
                <img src={my} alt="my chobi" className=" rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
            </div>
        </div>
    )

}
export default home;