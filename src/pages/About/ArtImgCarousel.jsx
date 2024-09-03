import { motion } from "framer-motion";
import { useState } from "react"
import TalkingHeadStatic from "../../components/TalkingHeadStatic";
import rphero from "../../assets/images/profilehero.png"
import rpart from "../../assets/images/art.jpg"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
export default function ArtImgCarousel() {
   const [caroselPos, setCaroselPos] = useState(1);
   const [imgLarge, setImgLarge] = useState(false);
   const motionText = "Pixel art is fun!"

   return (
      <>
         {/* Carosel */}
         {caroselPos == 1 ? (
            <div className="relative w-1/2 md:w-1/3 lg:w-2/3 flex-center">
               <TalkingHeadStatic textInput={motionText}/>   
               <div 
                  className="absolute top-0 -left-12 lg:-left-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(3)}
               >
                  <FaChevronCircleLeft className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 ${imgLarge ? "hidden" : ""}`}/>   
               </div>
               <div
                  className="absolute top-0 -right-12 lg:-right-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(caroselPos + 1)}
               >
                  <FaChevronCircleRight className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 rounded-full ${imgLarge ? "hidden" : ""}`}/>   
               </div>
            </div>
         ) : (caroselPos == 2) ? (
            <div className="relative w-1/2 md:w-1/3 lg:w-1/2 flex-center">
               <motion.img 
                  key={2} 
                  src={rphero} 
                  className={`rounded-md drop-shadow-sexy transition-all cursor-pointer ${imgLarge ? "scale-150 md:scale-125 lg:scale-150 translate-y-32 lg:translate-y-0" : ""}`}
                  onClick={() => setImgLarge(!imgLarge)}
               />
               <div 
                  className="absolute top-0 -left-12 lg:-left-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(caroselPos - 1)}
               >
                  <FaChevronCircleLeft className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 ${imgLarge ? "hidden" : ""}`}/>   
               </div>
               <div 
                  className="absolute top-0 -right-12 lg:-right-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(caroselPos + 1)}
               >
                  <FaChevronCircleRight className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 ${imgLarge ? "hidden" : ""}`}/>    
               </div>
            </div>
         ) : (caroselPos == 3) ? (
            <div className="relative w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/2">
               <motion.img 
                  key={3} 
                  src={rpart} 
                  className={`rounded-md drop-shadow-sexy transition-all cursor-pointer ${imgLarge ? "scale-[2.5] sm:scale-[1.75] lg:scale-125 translate-y-32 lg:translate-y-0" : ""}`}
                  onClick={() => setImgLarge(!imgLarge)}
               />
               <div 
                  className="absolute top-0 -left-12 lg:-left-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(caroselPos - 1)}
               >
                  <FaChevronCircleLeft className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 ${imgLarge ? "hidden" : ""}`}/>    
               </div>
               <div 
                  className="absolute top-0 -right-12 lg:-right-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(1)}
               >
                  <FaChevronCircleRight className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 ${imgLarge ? "hidden" : ""}`}/>    
               </div>
            </div>
         ) : <></>}
      </>
   )
}
