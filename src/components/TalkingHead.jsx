import { useState } from "react"
import { motion } from "framer-motion"
import mahfacehappy from "../assets/images/mahfacestatichappy.png"
import mahfacegif from "../assets/gifs/mahface.gif"
import textboxgif from "../assets/gifs/textbox.gif"

import MotionType from "./MotionType"

export default function TalkingHead({textInput}) {
    const [faceShown, setFaceShown] = useState(false)

    return (
      <>
         {/* Face and Text popup */}
         <div className="h-full w-full flex-center flex-col">
               {/* Face */}
               <div className="w-full flex-center">
                  <div className="w-2/5 flex-center relative">
                     <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 180}}
                        animate={{ opacity: 1, scale: 1, rotate: 0}}
                        transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.5}}
                        onAnimationComplete={() => setFaceShown(true)}
                        src={`${mahfacehappy}`} 
                     />
                     {faceShown && 
                        <img src={`${mahfacegif}`} className="absolute bottom-0" /> 
                     }
                  </div>
               </div>
               {/* Textbox */}
               {faceShown &&
                  <div className="w-full h-48 flex-center sm:pt-8 "> 
                     {/* Box */}
                     <img src={`${textboxgif}`} className="w-full max-w-[400px] "/> 
                     {/* Text */}
                     <motion.div className="absolute font-pixel w-full px-12 pt-6 flex-center max-w-[400px] text-sm sm:text-base md:text-lg xl:text-xl">
                           <MotionType textInput={textInput} speed={0.2}/>
                     </motion.div>
                  </div>
               }
         </div>
      </>
    )
}