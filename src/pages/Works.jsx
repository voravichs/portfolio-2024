import { motion, useIsPresent, AnimatePresence } from "framer-motion";
import { useState } from "react"
import Nav from "../components/Nav"
import BentoBox from "../components/BentoBox";

import EIKON from "./Works/EIKON";
import GenshinTTV from "./Works/GenshinTTV";
import PixelBattle from "./Works/Pixel";
import FantasAI from "./Works/FantasAI";
import ManifestCompany from "./Works/ManifestCompany";
import UnderFood from "./Works/UnderFood";
import ScrollDown from "./About/ScrollDown"
import ScrollUp from "./About/ScrollUp"

/**
 * Works Page for Home
 */
export default function Works() {
   const [cover, setCover] = useState(false)
   const [current, setCurrent] = useState(1);
   const [touchStart, setTouchStart] = useState(null)
   const [touchEnd, setTouchEnd] = useState(null)

   // the required distance between touchStart and touchEnd to be detected as a swipe
   const minSwipeDistance = 50 

   const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientY)
   }

   const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)

   const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isUpSwipe = distance > minSwipeDistance
      const isDownSwipe = distance < -minSwipeDistance
      // if (isUpSwipe || isDownSwipe) console.log('swipe', isUpSwipe ? 'up' : 'down')
      if (isUpSwipe && current != 4) {
         setCurrent(current + 1)
      } else if (isDownSwipe && current != 0) {
         setCurrent(current - 1)
      }
   }

   function handleWheel(e) {
      if (e.deltaY < 0 && current != 0) {
         setCurrent(current - 1)
      } else if (e.deltaY > 0 && current != 4) {
         setCurrent(current + 1)
      }
   }

   const isPresent = useIsPresent();
   return (
      <motion.div className="text-black p-8 h-dvh">
         <div className="bg-purple-200 h-full relative">
            {/* Content */}
            <motion.div
               className="h-full relative font-noto-sans"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: {duration: 1, delay: 0.5 }}}
               exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.25 }}}
            >
               <motion.div className="h-full">
                  <div className="h-full flex flex-col items-center gap-6 px-8 py-4 pt-24">
                     {/* Hello Text */}
                     <h1 className="text-5xl font-bona-nova font-bold text-purple-900">Projects</h1>
                     {/* MOBILE Panel Carousel */}
                     <div className="w-full h-full lg:hidden flex flex-col pb-12"> 
                        {/* Pages of About */}
                        <AnimatePresence mode="wait" initial={true}>
                           {current == 1 ? (
                              <motion.div
                                 key={1}
                                 onWheel={e => handleWheel(e)}
                                 onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                                 className="h-full"
                                 initial={{ opacity: 0.25 }} 
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.25, type: "spring" }}
                              >
                                 <div className="w-full h-full relative">
                                    <BentoBox/>
                                    <EIKON/>
                                 </div>
                                 <ScrollDown/>
                              </motion.div>
                           ) : (current == 2) ? (
                              <motion.div
                                 key={2}
                                 onWheel={e => handleWheel(e)}
                                 onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                                 className="h-full"
                                 initial={{ opacity: 0.25 }} 
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.25, type: "spring" }}
                              >
                                 <div className="w-full h-full relative">
                                    <BentoBox/>
                                    <FantasAI/>
                                 </div>
                                 <ScrollDown/>
                                 <ScrollUp/>
                              </motion.div>
                           ) : (current == 3) ? (
                              <motion.div
                                 key={3}
                                 onWheel={e => handleWheel(e)}
                                 onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                                 className="h-full flex-center flex-col gap-4"
                                 initial={{ opacity: 0.25 }} 
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.25, type: "spring" }}
                              >
                                 <div className="w-full md:w-1/2 h-1/2 relative">
                                    <BentoBox/>
                                    <ManifestCompany/>
                                 </div>
                                 <div className="w-full md:w-1/2 h-1/2 relative">
                                    <BentoBox/>
                                    <UnderFood/>
                                 </div>
                                 <ScrollDown/>
                                 <ScrollUp/>
                              </motion.div>
                           ) : (current == 4) ? (
                              <motion.div
                                 key={4}
                                 onWheel={e => handleWheel(e)}
                                 onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                                 className="h-full flex-center flex-col gap-4"
                                 initial={{ opacity: 0.25 }} 
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.25, type: "spring" }}
                              >
                                 <div className="w-full md:w-1/2 h-1/2 relative">
                                    <BentoBox/>
                                    <GenshinTTV/>
                                 </div>
                                 <div className="w-full md:w-1/2 h-1/2 relative">
                                    <BentoBox/>
                                    <PixelBattle/>
                                 </div>
                                 <ScrollUp/>
                              </motion.div>
                           ) : <></>}   
                        </AnimatePresence>
                        {/* Progress */}
                        <div className="absolute top-0 right-0 h-full w-2 md:w-4 grid grid-rows-4">
                           <div className={`${current == 1 ? "bg-purple-400" : ""}`}></div>
                           <div className={`${current == 2 ? "bg-purple-400" : ""}`}></div>
                           <div className={`${current == 3 ? "bg-purple-400" : ""}`}></div>
                           <div className={`${current == 4 ? "bg-purple-400" : ""}`}></div>
                        </div>
                     </div>
                     {/* DESKTOP Bento */}
                     <div className="w-full h-full hidden lg:flex flex-col gap-6 px-4 pb-4"> 
                           {/* Row 1 */}
                           <div className="h-1/2 w-full flex gap-6">
                              <div className="w-2/3 relative">
                                 <BentoBox/>
                                 <EIKON/>
                              </div>
                              <div className="w-1/3">
                                 <div className="flex flex-col gap-4 h-full">
                                       <div className="h-1/2 relative">
                                          <BentoBox/>
                                          <GenshinTTV/>
                                       </div>
                                       <div className="h-1/2 relative">
                                          <BentoBox/>
                                          <PixelBattle/>
                                       </div>
                                 </div>
                              </div>
                           </div>
                           {/* Row 2 */}
                           <div className="h-1/2 w-full flex gap-4">
                              <div className="w-1/2 relative">
                                 <BentoBox/> 
                                 <FantasAI/>
                              </div>
                              <div className="w-1/4 relative">
                                 <BentoBox/>
                                 <ManifestCompany/>
                              </div>
                              <div className="w-1/4 relative">
                                 <BentoBox/>
                                 <UnderFood/>
                              </div>
                           </div>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
            
            {/* Nav */}
            <Nav activePage={"works"}/>
               
            {/* BG */}
            {cover
            ?
               <motion.div
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0, transition: { duration: 0.75, ease: "circOut" } }}
                  exit={{ scaleX: 1, transition: { duration: 0.75, ease: "circIn" } }}
                  style={{ originX: isPresent ? 1 : 0 }}
                  className="absolute top-0 left-0 bg-purple-300 z-50 w-full h-full"
               />
            :
               <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1, transition: { duration: 0.75, ease: "circOut" } }}
                  exit={{ scaleX: 0, transition: { duration: 0.75, ease: "circIn" } }}
                  onAnimationComplete={() => setCover(true)}
                  style={{ originX: isPresent ? 0 : 1 }}
                  className="absolute top-0 left-0 bg-purple-300 z-50 w-full h-full"
               />
            }
         </div>
      </motion.div>
   )
}