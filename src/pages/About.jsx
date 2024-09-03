import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import Hello from "./About/Hello";
import ScrollDown from "./About/ScrollDown"
import ScrollUp from "./About/ScrollUp"
import Where from "./About/Where"
import Jobs from "./About/Jobs"
import Artist from "./About/Artist"
// import Storyteller from "./About/Storyteller"

/**
 * About Page
 */
export default function About() {
   const [cover, setCover] = useState(false)
   const [current, setCurrent] = useState(0)
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
      if (isUpSwipe && current != 3) {
         setCurrent(current + 1)
      } else if (isDownSwipe && current != 0) {
         setCurrent(current - 1)
      }
   }

   const isPresent = useIsPresent();

   function handleWheel(e) {
      if (e.deltaY < 0 && current != 0) {
         setCurrent(current - 1)
      } else if (e.deltaY > 0 && current != 3) {
         setCurrent(current + 1)
      }
   }

   // Up and Down
   useEffect(() => {
      const handleKeyDown = (e) =>{
         const key = e.key;
         console.log(key)
         if (key == "ArrowUp" && current != 0) {
            setCurrent(current - 1)
         } else if (key == "ArrowDown" && current != 3) {
            setCurrent(current + 1)
         }
      }

      document.addEventListener('keydown', handleKeyDown, true);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      };
   }, [current])

   return (
      <>
         <motion.div
            className="h-full relative font-noto-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 1, delay: 0.5 }}}
            exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.25 }}}
         >
            {/* Pages of About */}
            <AnimatePresence mode="wait" initial={true}>
               {current == 0 ? (
                  <motion.div 
                     key={0}
                     onWheel={e => handleWheel(e)} 
                     onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                     className="h-full"
                     initial={{ opacity: 0.25 }} 
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.25, type: "spring" }}
                  >
                     <Hello /> 
                     <ScrollDown/>
                  </motion.div>
               ) : (current == 1) ? (
                  <motion.div 
                     key={1}
                     onWheel={e => handleWheel(e)} 
                     onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                     className="h-full flex justify-end"
                     initial={{ opacity: 0.25 }} 
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.25, type: "spring" }}
                  >
                     <ScrollUp/>
                     <Where /> 
                     <ScrollDown/>
                  </motion.div>
               ) : (current == 2) ? (
                  <motion.div 
                     key={2}
                     onWheel={e => handleWheel(e)} 
                     onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                     className="h-full flex justify-start"
                     initial={{ opacity: 0.25 }} 
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.25, type: "spring" }}
                  >
                     <ScrollUp/>
                     <Jobs /> 
                     <ScrollDown/>
                  </motion.div>
               ) : (current == 3) ? 
                  <motion.div 
                     key={3}
                     onWheel={e => handleWheel(e)} 
                     onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                     className="h-full flex justify-end"
                     initial={{ opacity: 0.25 }} 
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.25, type: "spring" }}
                  >
                     <ScrollUp/>
                     <Artist /> 
                     {/* <ScrollDown/> */}
                  </motion.div>
               // ) : (current == 4) ?
               //    <motion.div 
               //       key={4}
               //       onWheel={e => handleWheel(e)} 
               //       className="h-full flex justify-start"
               //       initial={{ opacity: 0.25 }} 
               //       animate={{ opacity: 1 }}
               //       exit={{ opacity: 0 }}
               //       transition={{ duration: 0.25, type: "spring" }}
               //    >
               //       <ScrollUp/>
               //       <Storyteller /> 
               //    </motion.div>
               : <div onWheel={e => handleWheel(e)} >{current}</div>}
            </AnimatePresence>
            {/* Progress */}
            <div className="absolute top-0 right-0 h-full w-2 md:w-4 grid grid-rows-4">
               <div className={`${current == 0 ? "bg-purple-500" : ""}`}></div>
               <div className={`${current == 1 ? "bg-purple-500" : ""}`}></div>
               <div className={`${current == 2 ? "bg-purple-500" : ""}`}></div>
               <div className={`${current == 3 ? "bg-purple-500" : ""}`}></div>
               {/* <div className={`${current == 4 ? "bg-purple-400" : ""}`}></div> */}
            </div>
         </motion.div>
         
         {/* Nav */}
         <Nav activePage={"about"}/>
         
         {/* BG */}
         {cover
         ?
            <motion.div
               initial={{ scaleX: 1 }}
               animate={{ scaleX: 0, transition: { duration: 0.75, ease: "circOut" } }}
               exit={{ scaleX: 1, transition: { duration: 0.75, ease: "circIn" } }}
               style={{ originX: isPresent ? 0 : 1 }}
               className="absolute top-0 left-0 bg-purple-400 z-50 w-full h-full"
            />
         :
            <motion.div
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1, transition: { duration: 0.75, ease: "circOut" } }}
               exit={{ scaleX: 0, transition: { duration: 0.75, ease: "circIn" } }}
               onAnimationComplete={() => setCover(true)}
               style={{ originX: isPresent ? 1 : 0 }}
               className="absolute top-0 left-0 bg-purple-400 z-50 w-full h-full"
            />
         }
      </>
    )
}