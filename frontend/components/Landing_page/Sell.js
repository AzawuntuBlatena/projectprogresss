import React from 'react'
import Link from 'next/link'

const Sell = () => {
  return (
    <div id="buy"
    className="container flex flex-row justify-end w-full -mt-10 mx-auto bg-orange-300 rounded-xl "
  >
    

  {/* //   <div className="md:w-1/2 mt-10 mr-20 ">
  //     <img src="/assets/logo/plb.jpg" alt=""  className='rounded-xl hover:scale-105 ease-in duration-300'/>
  //   </div> */}
 
   
   <div className=" flex-col  w-full justify-evenly  space-y-2  border-green-500  rounded-xl hover:scale-105 ease-in duration-300 ">
    
   <a
       href="#"
       className=" p-2 ml-50 text-white  bg-slate-400 hover:bg-purple-600 rounded-full focus:outline-none "
       >buy a shre and be a shreholder</a
     >
       {/* <h1
         className="max-w-md text-5xl font-bold pb-6 text-center md:text-5xl "
       >
       Paperless boards
       </h1> */}
       {/* <p  className="  text-center text-red-700 " >
       It’s 2022, time to stop printing and scanning.
       </p>
       <p className=" pt-1  text-center text-red-950 ">
       
Manage every aspect of your board meetings in our secure cloud platform. Store all your documents, prepare and share your agendas, compile board packs and digitise your minutes, plus much more..
       </p> */}
      
              
       </div>
       <div className="ml-20 bg-sky-500 hover:bg-sky-600 rounded-2xl w-20 h-10 -mt-3 py-2 text-center">
       <Link href='newBuyer' legacyBehavior>
                <a className='  '>
                Buy now
                </a>
                </Link>
           </div>
     </div>
  
  )
}

export default Sell