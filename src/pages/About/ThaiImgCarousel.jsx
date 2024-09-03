import { motion } from "framer-motion";
import { useState } from "react"
import thai1 from "../../assets/images/thai1.jpg"
import thai2 from "../../assets/images/thai2.jpg"
import thai3 from "../../assets/images/thai3.jpg"
import thai4 from "../../assets/images/thai4.jpg"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
export default function ThaiImgCarousel() {
   const [caroselPos, setCaroselPos] = useState(1);
   const [imgLarge, setImgLarge] = useState(false);

   return (
      <>
         {/* Carosel */}
         {caroselPos == 1 ? (
            <div className="relative w-1/3 md:w-1/4 lg:w-1/2 flex-center">
               <motion.img 
                  key={1} 
                  src={thai1} 
                  className={`rounded-md drop-shadow-sexy transition-all cursor-pointer ${imgLarge ? "scale-[2] md:scale-150 xl:scale-125 translate-y-32 lg:translate-y-0" : ""}`}
                  onClick={() => setImgLarge(!imgLarge)}
               />
               <div 
                  className="absolute top-0 -left-12 lg:-left-16 h-full flex-center cursor-pointer z-20"
                  onClick={() => setCaroselPos(4)}
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
            <div className="relative w-2/3 md:w-1/2 lg:w-2/3 flex-center">
               <motion.img 
                  key={2} 
                  src={thai2} 
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
                  src={thai3} 
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
                  onClick={() => setCaroselPos(caroselPos + 1)}
               >
                  <FaChevronCircleRight className={`text-4xl lg:text-5xl text-purple-900 hover:text-purple-500 ${imgLarge ? "hidden" : ""}`}/>     
               </div>
            </div>
         ) : (caroselPos == 4) ? (
            <div className="relative w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/2">
               <motion.img 
                  key={4} 
                  src={thai4} 
                  className={`rounded-md drop-shadow-sexy transition-all cursor-pointer ${imgLarge ? "scale-[2] sm:scale-[1.75] lg:scale-125 translate-y-32 lg:translate-y-0" : ""}`}
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
