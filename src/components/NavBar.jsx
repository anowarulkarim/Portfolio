import React, { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar=()=>{
    const[nav,setNav]=useState(true);
    const links=[
        {
            id:1,
            link : "home",
        },
        {
            id:2,
            link : "about",
        },
        {
            id:3,
            link : "portfolio",
        },
        {
            id:4,
            link : "experiences",
        },
        {
            id:5,
            link : "contact",
        }
    ]
    return(
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            
            <div>
                <h1 className="text-4xl font-extralight">Anowarul karim</h1>
            </div>
            <ul className="hidden md:flex">
            {links.map(({id,link})=>(
                <li key={id} className="px-4 cursor-pointer text-gray-500 hover:scale-125 duration-200 capitalize">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
            </ul>
            <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaBars size={30}></FaBars>:<FaTimes size={30}></FaTimes>}
            </div>
        </div>
    
    );
   
}
export default NavBar;