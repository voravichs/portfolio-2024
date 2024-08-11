import { useState } from "react"
import { motion } from "framer-motion"
import mahfacehappy from "../assets/images/mahfacestatichappy.png"
import mahfacegif from "../assets/gifs/mahface.gif"
import textboxgif from "../assets/gifs/textbox.gif"

import MotionType from "./MotionType"

const intro = "Hello, my name is Voravich Silapachairueng! I am a Web Developer and UI/UX Engineer! Check out my portfolio!"

export default function TalkingHead() {
    const [faceShown, setFaceShown] = useState(false)

    return (
        <>
            {/* Face and Text popup */}
            <div className="h-full w-full grid grid-rows-4">
                <div></div>
                {/* Face */}
                <div className="flex-center">
                    <div className="w-64 flex-center relative">
                        <motion.img
                            initial={{ opacity: 0, scale: 0, rotate: 180}}
                            animate={{ opacity: 1, scale: 1, rotate: 0}}
                            transition={{ type: "spring", bounce: 0.25, duration: 1.5 }}
                            onAnimationComplete={() => setFaceShown(true)}
                            src={`${mahfacehappy}`} 
                            className=""/>
                        {faceShown && 
                            <img src={`${mahfacegif}`} className="absolute bottom-0" /> 
                        }
                    </div>
                    
                    
                    {/* <motion.div 
                        className="absolute bottom-0 inset-x-2 w-3/4 h-3/4 rounded-lg border-4 "
                        
                    /> */}
                </div>
                {/* Textbox */}
                {faceShown &&
                    <div className="relative w-full flex-center pt-20"> 
                        {/* Box */}
                        <img src={`${textboxgif}`} className="absolute w-full max-w-[450px] "/> 
                        {/* Text */}
                        <motion.div className="absolute font-pixel w-full px-8 pt-6  flex-center max-w-[400px] text-lg sm:text-xl">
                            <MotionType text={intro} speed={0.2}/>
                        </motion.div>
                    </div>
                }
            </div>
        </>
    )
}