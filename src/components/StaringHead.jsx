import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import mahfacehappy from "../assets/images/mahfacestatichappy.png"
import tl from "../assets/images/mahstaticfacetl.png"
import tr from "../assets/images/mahstaticfacetr.png"
import bl from "../assets/images/mahstaticfacebl.png"
import br from "../assets/images/mahstaticfacebr.png"

export default function StaringHead() {
   const [faceShown, setFaceShown] = useState(false)
   const [eyePos, setEyePos] = useState();

   useEffect(() => {
      const update = (e) => {
         if (e.x < window.innerWidth/2 && e.y < window.innerHeight/2) {
            setEyePos("TL")
         } else if (e.x >= window.innerWidth/2 && e.y < window.innerHeight/2) {
            setEyePos("TR")
         } else if (e.x < window.innerWidth/2 && e.y >= window.innerHeight/2) {
            setEyePos("BL")
         } else if (e.x >= window.innerWidth/2 && e.y >= window.innerHeight/2) {
            setEyePos("BR")
         }
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
         window.removeEventListener('mousemove', update)
         window.removeEventListener('touchmove', update)
      }
   },[])

   return (
   <>
      {/* Face and Text popup */}
      <motion.div className="h-full w-full flex flex-center py-8" layout>
         {/* Face */}
         <motion.div className="w-full flex-center" layout>
            <motion.div className="w-1/2 flex-center relative" layout>
               <motion.img
                  initial={{ opacity: 0, scale: 0, rotate: 180}}
                  animate={{ opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", bounce: 0.25, duration: 1.5, delay: 0.5}}}
                  onAnimationComplete={() => setFaceShown(true)}
                  src={`${mahfacehappy}`} 
                  layout
               />
               {faceShown && 
                  <>
                     {eyePos == "TL" ? (
                        <motion.img src={`${tl}`} className="absolute bottom-0" layout/> 
                     ) : (eyePos == "TR") ? (
                        <motion.img src={`${tr}`} className="absolute bottom-0" layout/> 
                     ) : (eyePos == "BL") ? (
                        <motion.img src={`${bl}`} className="absolute bottom-0" layout/> 
                     ) : (eyePos == "BR") ? (
                        <motion.img src={`${br}`} className="absolute bottom-0" layout/> 
                     ) : <motion.img src={`${mahfacehappy}`} className="absolute bottom-0" layout/> }
                  </>
               }
               
            </motion.div>
         </motion.div>
         {/* Textbox */}
         
      </motion.div>
   </>
   )
}