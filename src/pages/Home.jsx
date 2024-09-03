import TalkingHead from "../components/TalkingHead"
import Nav from "../components/Nav"
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { GiStaryu } from "react-icons/gi";
/**
 * Home Page
 */
export default function Home() {
   const [cover, setCover] = useState(false)
   const isPresent = useIsPresent();

   const intro = "Hello, my name is Voravich Silapachairueng! I am a Web Developer and UI/UX Engineer! Check out my portfolio!"

   const linksleft = {
      hidden: { x: -1000 },
      show: { x: 0, transition: {duration: 0.5, ease: "circOut"},}
   }

   const linksright = {
      hidden: { x: 1000 },
      show: { x: 0, transition: {duration: 0.5, ease: "circOut"},}
   }

   const smalllinksleft = {
      hidden: { rotateZ: -180, x: 150, y: 150, opacity: 0 },
      show: { rotateZ: 0, x: 0, y: 0, opacity: 1, transition: {duration: 0.75, ease: "circOut"},}
   }

   const smalllinksright = {
      hidden: { rotateZ: 180, x: -150, y: 150, opacity: 0 },
      show: { rotateZ: 0, x: 0, y: 0, opacity: 1, transition: {duration: 0.75, ease: "circOut"},}
   }

   return (
      <>
         {/* Content */}
         <motion.div 
            className="h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 1, delay: 0.5 }}}
            exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.25 }}}
         >  
            {/* MOBILE Site Links */}
            <motion.div className="absolute top-0 w-full h-2/5 pt-24 px-8 grid grid-rows-2 grid-cols-2 grid-flow-col font-bona-nova font-bold text-5xl sm:text-6xl md:text-7xl xl:text-5xl text-purple-900 lg:hidden"
               initial="hidden"
               animate="show"
               transition={{staggerChildren: 0.25, delayChildren: 2}}
            >
               <motion.div style={{ originX: 1, originY: 1}} variants={smalllinksleft} className="self-center justify-self-center hover:text-purple-500 group">
                  <Link to={"/about"} className="w-full flex-center flex-col focus:text-purple-500">
                     <p className="text-base">About</p>
                     <PiPersonArmsSpreadFill className="transition-all group-hover:translate-y-2"/>
                  </Link>  
               </motion.div>
               <motion.div style={{ originX: 1, originY: 1}} variants={smalllinksleft} className="self-end justify-self-start hover:text-purple-500 group">
                  <Link to={"/works"} className="w-full flex-center flex-col focus:text-purple-500">
                     <p className="text-base">Works</p>
                     <MdWorkHistory className="transition-all group-hover:translate-y-2"/>
                  </Link> 
               </motion.div>
               <motion.div style={{ originX: 0, originY: 1}} variants={smalllinksright} className="self-center justify-self-center hover:text-purple-500 group">
                  <Link to={"/values"} className="w-full flex-center flex-col focus:text-purple-500">
                     <p className="text-base">My Values</p>
                     <GiStaryu className="transition-all group-hover:translate-y-2"/>
                  </Link> 
               </motion.div>
               <motion.div style={{ originX: 0, originY: 1}} variants={smalllinksright} className="self-end justify-self-end hover:text-purple-500 group">
                  <Link to={"/hireme"} className="w-full flex-center flex-col focus:text-purple-500">
                     <p className="text-base">Hire Me</p>
                     <BsEnvelopePaperFill className="transition-all group-hover:translate-y-2"/>
                  </Link> 
               </motion.div>
            </motion.div>
            {/* DESKTOP Site Links */}
            {/* Left */}
            <motion.div className="absolute top-0 left-0 w-1/3 h-full flex-col items-start justify-center gap-12 pl-8 xl:pl-16 2xl:pl-32 font-noto-sans text-4xl xl:text-5xl text-purple-900 hidden lg:flex"
               initial="hidden"
               animate="show"
               hover="hover"
               transition={{staggerChildren: 0.5, delayChildren: 2}}
            >
               <motion.div style={{ originX: -1}} variants={linksleft} className="rounded-xl py-4 w-4/5 2xl:w-2/3 flex gap-4 hover:text-purple-500 group">
                  <PiPersonArmsSpreadFill className="transition-all group-hover:translate-x-4"/>
                  <Link to={"/about"} className="w-full flex flex-col transition-all group-hover:translate-x-2">
                     <p className="font-bona-nova font-bold">About</p>
                     <hr className="border-2 border-purple-900 rounded-full w-full group-hover:border-purple-500" />
                  </Link>  
               </motion.div>
               <motion.div style={{ originX: -1}} variants={linksleft} className="rounded-xl py-4 w-4/5 2xl:w-2/3 flex gap-4 hover:text-purple-500 group">
                  <MdWorkHistory className="transition-all group-hover:translate-x-4"/>
                  <Link to={"/works"} className="w-full flex flex-col transition-all group-hover:translate-x-2">
                     <p className="font-bona-nova font-bold">Works</p>
                     <hr className="border-2 border-purple-900 rounded-full w-full group-hover:border-purple-500" />
                  </Link> 
               </motion.div>
               
            </motion.div>
            {/* Right */}
            <motion.div className="absolute top-0 right-0 w-1/3 h-full flex-col items-end justify-center gap-12 pr-8 xl:pr-16 2xl:pr-32 font-noto-sans text-4xl xl:text-5xl text-purple-900 hidden lg:flex"
               initial="hidden"
               animate="show"
               hover="hover"
               transition={{staggerChildren: 0.5, delayChildren: 2}}
            >
               <motion.div style={{ originX: -1}} variants={linksright} className="rounded-xl py-4 w-4/5 2xl:w-2/3 flex gap-4 hover:text-purple-500 group">
                  <Link to={"/values"} className="w-full flex flex-col transition-all group-hover:-translate-x-2">
                     <p className="font-bona-nova font-bold text-end">Values</p>
                     <hr className="border-2 border-purple-900 rounded-full w-full group-hover:border-purple-500" />
                  </Link> 
                  <GiStaryu className="transition-all group-hover:-translate-x-4"/>
               </motion.div>
               <motion.div style={{ originX: -1}} variants={linksright} className="rounded-xl py-4 w-4/5 2xl:w-2/3 flex gap-4 hover:text-purple-500 group">
                  <Link to={"/hireme"} className="w-full flex flex-col transition-all group-hover:-translate-x-2">
                     <p className="font-bona-nova font-bold text-end">Hire Me</p>
                     <hr className="border-2 border-purple-900 rounded-full w-full group-hover:border-purple-500" />
                  </Link> 
                  <BsEnvelopePaperFill className="transition-all group-hover:-translate-x-4"/>
               </motion.div>
               
            </motion.div>

            {/* Talking Head */}
            <div className="h-dvh pt-24 pb-20 px-4 flex-center">
               <TalkingHead textInput={intro}/>
            </div>

            {/* Social Links */}
            <div className="fixed bottom-0 w-full h-16 flex items-center justify-center md:justify-end gap-4 p-2 lg:pr-8 text-5xl">
               <a href='https://github.com/voravichs' className="text-purple-900 focus:text-purple-500">
                  <FaGithub className=' hover:text-purple-500'/>
               </a>
               <a href='https://www.linkedin.com/in/voravich-silapachairueng/' className="text-purple-900 focus:text-purple-500">
                  <FaLinkedin className='hover:text-purple-500'/>
               </a>
               <a href='https://twitter.com/voravich_s' className="text-purple-900 focus:text-purple-500">
                  <BsTwitterX className='hover:text-purple-500'/>
               </a>
            </div>
            
         </motion.div>
         
         {/* Nav */}
         <Nav activePage={"home"}/>

         {/* BG */}
         {cover
         ?
            <motion.div
               initial={{ scaleY: 1 }}
               animate={{ scaleY: 0, transition: { duration: 0.75, ease: "circOut" } }}
               exit={{ scaleY: 1, transition: { duration: 0.75, ease: "circIn" } }}
               style={{ originY: isPresent ? 1 : 0 }}
               className="absolute top-0 left-0 bg-purple-400 z-50 w-full h-full"
            />
         :
            <motion.div
               initial={{ scaleY: 0 }}
               animate={{ scaleY: 1, transition: { duration: 0.75, ease: "circOut" } }}
               exit={{ scaleY: 0, transition: { duration: 0.75, ease: "circIn" } }}
               onAnimationComplete={() => setCover(true)}
               style={{ originY: isPresent ? 0 : 1 }}
               className="absolute top-0 left-0 bg-purple-400 z-50 w-full h-full"
            />
         }
      </>
   )
}