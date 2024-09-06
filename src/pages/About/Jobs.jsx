import { motion } from "framer-motion";
import { useState } from "react"
import thesisposter from "../../assets/thesis/thesis_poster.pdf"
import thesis from "../../assets/thesis/thesis_final.pdf"
import JobImgCarousel from "./JobImgCarousel";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Jobs() {
   const [caroselPos, setCaroselPos] = useState(1);

   return (
      <div className="h-full w-full lg:w-1/2 pt-48 lg:pt-0 px-8 lg:pl-12">
         <div className="flex-center flex-col gap-0 lg:gap-2 h-full">
            {/* Hello Text */}
            <h1 className="text-2xl md:text-5xl font-light">Hello, I am a </h1>
            <h1 className="text-2xl md:text-5xl text-center">Researcher, Designer, and Teacher</h1>
            {/* Divider Bar */}
            <motion.div 
               className="w-64 h-1 bg-black my-4"
               initial={{ x: 1000, opacity:0 }}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 0.1, type: "spring", bounce:0.25}}
            ></motion.div>
            {/* Body */}
            <div className="text-sm md:text-xl lg:text-lg">
               {/* MOBILE Body */}
               <div className="font-light w-full text-center relative lg:hidden">
                  {caroselPos == 1 ? (
                     <>
                        <p className="px-8">I graduated from <span className="font-bold">Brown University</span> in 2017 with a degree in Cognitive Science. At the time, I was performing human subjects research for an honors thesis alongside my advisor in a 3D perception lab on campus. You can check out the presentation and contents of my thesis research below:</p>
                        <div className="my-4 flex-center gap-2">
                           <a href = {thesisposter} target = "_blank" rel="noreferrer"  >
                              <HiOutlinePresentationChartLine className="text-5xl text-purple-400 hover:text-purple-600"/>
                           </a>
                           <a href = {thesis} target = "_blank" rel="noreferrer"  >
                              <IoIosPaper className="text-5xl text-purple-400 hover:text-purple-600"/>
                           </a>
                        </div>
                        <div
                           className="absolute top-0 -right-4 h-full flex-center cursor-pointer z-20 "
                           onClick={() => setCaroselPos(caroselPos + 1)}
                        >
                           <FaChevronCircleRight className="text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 rounded-full"/>
                        </div>
                     </>
                  ) : (caroselPos == 2 ) ? (
                     <>
                        <p className="px-8">I then attended <span className="font-bold">University of Pennsylvania</span> to get a Computer Science degree in their MCIT program. It was this period where I discovered a love of teaching others and focused on honing my craft in website design and UI/UX. </p>
                        <div className="my-4 flex gap-2 z-20 flex-center">
                           <Link to={"/works"} className="text-xl text-purple-500 hover:text-purple-700">
                              Check out some of my projects here!
                           </Link>
                        </div>
                        <div
                           className="absolute top-0 -left-4 h-full flex-center cursor-pointer z-20 "
                           onClick={() => setCaroselPos(caroselPos - 1)}
                        >
                           <FaChevronCircleLeft className="text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 rounded-full"/>
                        </div>
                     </>
                     
                  ) : <></>}
               </div>
               {/* DESKTOP Body */}
               <div className="font-light w-full text-center relative hidden lg:flex flex-col">
                  <p className="px-8">I graduated from <span className="font-bold">Brown University</span> in 2017 with a degree in Cognitive Science. At the time, I was performing human subjects research for an honors thesis alongside my advisor in a 3D perception lab on campus. You can check out the presentation and contents of my thesis research below:</p>
                  <div className="my-4 flex-center gap-2 text-6xl">
                     <a href = {thesisposter} target = "_blank" rel="noreferrer"  >
                        <HiOutlinePresentationChartLine className="text-purple-400 hover:text-purple-600"/>
                     </a>
                     <a href = {thesis} target = "_blank" rel="noreferrer"  >
                        <IoIosPaper className="text-purple-400 hover:text-purple-600"/>
                     </a>
                  </div>
                  <p className="px-8">I then attended <span className="font-bold">University of Pennsylvania</span> to get a Computer Science degree in their MCIT program. It was this period where I discovered a love of teaching others and focused on honing my craft in website design and UI/UX. </p>
                  <div className="my-4 flex gap-2 z-20 flex-center">
                     <Link to={"/works"} className="text-xl text-purple-500 hover:text-purple-700">
                        Check out some of my projects here!
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* MOBILE Carousel */}
         <div className="absolute top-0 left-0 w-full h-1/3 lg:hidden flex-center pt-24"> 
            {/* Carosel */}
            <JobImgCarousel/>
         </div>
         {/* DESKTOP Carousel */}
         <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:flex-center"> 
            {/* Carosel */}
            <JobImgCarousel/>
         </div>
      </div>
   )
}
