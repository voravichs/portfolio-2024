import { motion } from "framer-motion"
import mahfacehappy from "../assets/images/mahfacestatichappy.png"
import mahfacegif from "../assets/gifs/mahface.gif"
import textboxgif from "../assets/gifs/textboxshorttrans.gif"

import MotionType from "./MotionType"

export default function TalkingHead({textInput}) {

    return (
        <>
            {/* Face and Text popup */}
            <div className="h-full w-full">
               {/* Face */}
               <div className="flex-center">
                  <div className="w-1/2 flex-center relative">
                     <motion.img src={`${mahfacehappy}`}/>
                     <img src={`${mahfacegif}`} className="absolute bottom-0" /> 
                  </div>
               </div>
               {/* Textbox */}
               <div className="relative w-full flex-center pt-8 lg:pt-12"> 
                  {/* Box */}
                  <img src={`${textboxgif}`} className="absolute w-full max-w-[450px] "/> 
                  {/* Text */}
                  <motion.div className="absolute font-pixel w-full px-4 sm:px-8 pt-8 md:pt-12 flex-center max-w-[400px] text-sm md:text-base lg:text-lg xl:text-xl text-purple-900">
                     <MotionType textInput={textInput} speed={0.1}/>
                  </motion.div>
               </div>
            </div>
        </>
    )
}