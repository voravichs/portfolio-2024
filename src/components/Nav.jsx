import head from "../assets/images/mahfacestatichappy.png"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { FaGithub, FaLinkedin, FaHome} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import { GiStaryu } from "react-icons/gi";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Nav({activePage}) {
   const [active, setActive] = useState(false)
   const [animateFinish, setAnimateFinish] = useState(false)

   const stagger = {
      hidden: {
         opacity: 0,
         x: -15
      },
      shown: {
         opacity: 1,
         x: 0
      }
   }

   return (
      <>
         <div 
            className='absolute h-24 top-0 left-0 px-4 sm:px-8 py-4 font-noto-sans cursor-pointer z-40'
            onClick={() => setActive(!active)}
         >
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4">
                  <motion.img src={head} className="w-12 min-w-12" whileHover={{scale: 1.1, rotate: [0, 360]}}/>
                  <div className={`flex-shrink-0 w-1 h-12 ${active ? "bg-gray-100 w-1" : "bg-purple-500"}`}></div>
                  <div className={`transition-all font-bona-nova ${active ? "text-white text-4xl font-bold" : "text-2xl"} `}>Menu</div>   
               </div>
               
               {(animateFinish && active) && (
                  <motion.div 
                     className="flex justify-start gap-4 text-white ml-4"
                     initial="hidden"
                     animate="shown"
                     transition={{
                        delayChildren: 0.25,
                        staggerChildren: 0.1,
                     }}
                  >
                     <motion.a href='https://github.com/voravichs' key={"github"} variants={stagger}>
                        <FaGithub className='text-4xl hover:text-purple-900'/>
                     </motion.a>
                     <motion.a href='https://www.linkedin.com/in/voravich-silapachairueng/' key={"linkedin"} variants={stagger}>
                        <FaLinkedin className='text-4xl hover:text-purple-900'/>
                     </motion.a>
                     <motion.a href='https://twitter.com/bainrowz' key={"twitter"} variants={stagger}>
                        <BsTwitterX className='text-4xl hover:text-purple-900'/>
                     </motion.a>
                  </motion.div>
               )}
            </div>
         </div>
         <AnimatePresence>
            {active && (
               <>
                  <motion.div 
                     className="absolute top-0 left-0 bg-purple-400 h-full w-full md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 lg:drop-shadow-sexy z-30"
                     initial={{ scale: 0, originX: 0.2, originY: 0.05 }}
                     animate={{ scale: 1, originX: 0.2, originY: 0.05, transition: { duration: 0.5, ease: "easeOut" }}}
                     exit={{ scale: 0, originX: 0.2, originY: 0.05, transition: { duration: 0.25, ease: "easeIn" }}}
                     transition={{
                        duration: 0.25,
                        ease: "linear",
                     }}
                     onAnimationComplete={() => setAnimateFinish(true)}
                  >
                     {(animateFinish && active) && (
                        <motion.div 
                           className="w-full h-full flex flex-col gap-6 text-4xl text-white pt-40 px-8 sm:px-16" 
                           initial="hidden"
                           animate="shown"
                           transition={{
                              delayChildren: 0.25,
                              staggerChildren: 0.1,
                           }}
                        >
                           <motion.div 
                              key={"home"} 
                              variants={stagger} 
                              className={`flex items-center w-full gap-4  ${activePage == "home" ? "text-purple-900" : "hover:text-purple-900 group"}`}
                              whileTap={{ x: 8}}
                           >
                              <FaHome className="text-5xl transition-transform group-hover:translate-x-4"/>
                              <div className={`transition-transform group-hover:translate-x-2`}>
                                 {activePage == "home" ?
                                 <>
                                    <p className="font-bona-nova font-bold cursor-default">
                                       Home
                                    </p>
                                    <p className="text-base cursor-default">Return to the homepage</p>   
                                 </>
                                 : 
                                 <>
                                    <Link to={"/"}>
                                       <p className="font-bona-nova font-bold">Home</p>
                                       <p className="text-base cursor-pointer">Return to the homepage</p>   
                                    </Link>
                                    
                                 </>}
                              </div>
                           </motion.div>
                           <motion.div key={"about"} variants={stagger} className={`flex items-center w-full gap-4  ${activePage == "about" ? "text-purple-900" : "hover:text-purple-900 group"}`}>
                              <PiPersonArmsSpreadFill className="text-5xl transition-transform group-hover:translate-x-4"/>
                              <div className="transition-transform group-hover:translate-x-2">
                                 {activePage == "about" ?
                                 <>
                                    <p className="font-bona-nova font-bold cursor-default">
                                       About
                                    </p>
                                    <p className="text-base cursor-default">Who Am I?</p>   
                                 </>
                                 : 
                                 <>
                                    <Link to={"/about"}>
                                       <p className="font-bona-nova font-bold">About</p>
                                       <p className="text-base cursor-pointer">Who Am I?</p>    
                                    </Link>
                                 </>}
                              </div>
                           </motion.div>
                           <motion.div key={"works"} variants={stagger} className={`flex items-center w-full gap-4  ${activePage == "works" ? "text-purple-900" : "hover:text-purple-900 group"}`}>
                              <MdWorkHistory className="text-5xl transition-transform group-hover:translate-x-4"/>
                              <div className="transition-transform group-hover:translate-x-2">
                                 {activePage == "works" ?
                                 <>
                                    <p className="font-bona-nova font-bold cursor-default">
                                       Works
                                    </p>
                                    <p className="text-base cursor-default">Notable recent projects</p>   
                                 </>
                                 : 
                                 <>
                                    <Link to={"/works"}>
                                       <p className="font-bona-nova font-bold">Works</p>
                                       <p className="text-base cursor-pointer">Notable recent projects</p>     
                                    </Link>
                                 </>}
                              </div>
                           </motion.div>
                           <motion.div key={"values"} variants={stagger} className={`flex items-center w-full gap-4  ${activePage == "values" ? "text-purple-900" : "hover:text-purple-900 group"}`}>
                              <GiStaryu className="text-5xl transition-transform group-hover:translate-x-4"/>
                              <div className="transition-transform group-hover:translate-x-2">
                                 {activePage == "values" ?
                                 <>
                                    <p className="font-bona-nova font-bold cursor-default">
                                       My Values
                                    </p>
                                    <p className="text-base cursor-default">My goals as a programmer</p>   
                                 </>
                                 : 
                                 <>
                                    <Link to={"/values"}>
                                       <p className="font-bona-nova font-bold">My Values</p>
                                       <p className="text-base cursor-pointer">My goals as a programmer</p>     
                                    </Link>
                                 </>}
                              </div>
                           </motion.div>
                           <motion.div key={"hireme"} variants={stagger} className={`flex items-center w-full gap-4  ${activePage == "hireme" ? "text-purple-900" : "hover:text-purple-900 group"}`}>
                              <BsEnvelopePaperFill className="text-5xl transition-transform group-hover:translate-x-4"/>
                              <div className="transition-transform group-hover:translate-x-2">
                                 {activePage == "hireme" ?
                                 <>
                                    <p className="font-bona-nova font-bold cursor-default">
                                       Hire Me
                                    </p>
                                    <p className="text-base cursor-default">Skills, resume, and contact info</p>   
                                 </>
                                 : 
                                 <>
                                    <Link to={"/hireme"}>
                                       <p className="font-bona-nova font-bold">Hire Me</p>
                                       <p className="text-base cursor-pointer">Skills, resume, and contact info</p>   
                                    </Link>
                                 </>}
                              </div>
                           </motion.div>
                        </motion.div>
                     )}
                  </motion.div>
                  <motion.div 
                     className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
                     onClick={() => setActive(false)}   
                     initial={{ opacity:0 }}
                     animate={{ opacity:1}}
                     exit={{ opacity:0}} 
                  >
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </>
      
   )
}