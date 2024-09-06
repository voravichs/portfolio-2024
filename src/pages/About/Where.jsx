import { motion } from "framer-motion";
import ThaiImgCarousel from "./ThaiImgCarousel";
export default function Where() {

   return (
      <div className="h-full w-full lg:w-1/2 pt-48 lg:pt-0 px-8 lg:pr-12">
         <div className="flex-center flex-col gap-0 lg:gap-2 h-full">
            {/* Hello Text */}
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-light">Hello, I am a </h1>
            <h1 className="text-2xl md:text-5xl lg:text-6xl text-center lg:w-1/2 2xl:w-full">Thai Immigrant</h1>
            {/* Divider Bar */}
            <motion.div 
               className="w-64 h-1 bg-black my-4"
               initial={{ x: -1000, opacity:0 }}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 0.1, type: "spring", bounce:0.25}}
            ></motion.div>
            {/* Body */}
            <div className="text-base md:text-xl font-light w-full text-center">
               Born in <span className="font-bold">Thailand,</span> but having lived most of my life in the <span className="font-bold"> United States,</span> I am likely indistinguishable from any Asian American was raised in America from birth. I take the weight of this identity seriously: as a first generation immigrant from my family, I strove to reach great heights. 
            </div>
            <div className="text-base md:text-xl font-light w-full text-center">
               To my extended family in Thailand, I hope I am making you proud!
            </div>
         </div>
         
         {/* MOBILE Top Panel */}
         <div className="absolute top-0 left-0 w-full h-1/3 lg:hidden flex-center pt-24"> 
            {/* Carosel */}
            <ThaiImgCarousel/>
         </div>
         {/* DESKTOP Left Panel */}
         <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:flex-center"> 
            {/* Carosel */}
            <ThaiImgCarousel/>
         </div>
      </div>
   )
}
