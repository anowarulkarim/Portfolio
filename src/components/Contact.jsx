import React from "react";
const Contact=()=>{
    return(
        <div name="contact" className="bg-gradient-to-b from-black to bg-gray-600 w-full text-white md:h-screen pb-8">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 font-bold inline">
                    <p className="text-4xl font-bold border-b-4  border-gray-500 p-2 inline">Contact form</p>
                    <p className="py-6">Fill up the form to contact</p>
                </div>
                <div className=" flex justify-center items-center">
                    <form action="">
                        <input type="text" name="name" placeholder="Enter your Name" className=" p-2  bg-transparent border-2 rounded-md text-white focus: outline-none"/>
                        <br></br>
                        <input type="text" name="email" placeholder="Enter your email" className=" p-2 my-4 bg-transparent border-2 rounded-md text-white focus: outline-none"/>
                         <br></br>
                        <textarea type="text" rows={10} name="msg" placeholder="Enter the message" className=" p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"/>
                        <button className=" px-6 py-3 text-white bg-gradient-to-b from-cyan-100 to-blue-500 flex items-center rounded-md my-8 justify-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;