import React from "react";
import javas from "../assets/js.png";
import py from "../assets/python.jpeg";
import cpp from "../assets/cpp.png";
import react from "../assets/react.png";

const Experience=()=>{
    const skills=[
        {
            id:1,
            src: javas,
            title: "Javascript"
        },
        {
            id:2,
            src: py,
            title: "Python"
        },
        {
            id:3,
            src: cpp,
            title: "C++"
        },
        {
            id:4,
            src: react,
            title: "React"
        }
    ]
    return(
        <div name="experiences" className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen items-center">
            <div className=" max-w-screen-lg p-4 flex flex-col justify-center items-center w-full h-screen text-white">
                <div>
                    <p className=" text-4xl font-bold border-b-4  border-gray-500 p-2 inline">Experiences</p>
                    <p className=" py-6">This are the technologies I have worked With</p>
                </div>
                
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 px-12 justify-center items-center text-center pt-4">
                    {
                        skills.map(({id, src, title}) => (
                            <div className="shadow-md shadow-red-900 rounded-lg w-auto grid-cols-2 md:grid-cols-4 gap-8 px-12 justify-center items-center text-center pt-4">
                            <div key={id}>
                                <img src={src} alt="javascript" className=" rounded-md duration-200 hover:scale-105 w-50 mx-auto" />
                                <p className=" mt-4 ">{title}</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}
export default Experience ;