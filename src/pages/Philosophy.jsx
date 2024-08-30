import { motion, useIsPresent } from "framer-motion";
import { useState } from "react"
import Nav from "../components/Nav"

export default function Philosophy() {
   const [cover, setCover] = useState(false)

   const isPresent = useIsPresent();
   return (
      <motion.div className="text-black p-8 h-dvh">
         <div className="bg-purple-200 h-full relative">
            {/* Nav */}
            <Nav activePage={"values"}/>
                  
            {/* BG */}
            {cover
            ?
               <motion.div
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0, transition: { duration: 0.75, ease: "circOut" } }}
                  exit={{ scaleY: 1, transition: { duration: 0.75, ease: "circIn" } }}
                  style={{ originY: isPresent ? 0 : 1 }}
                  className="absolute top-0 left-0 bg-purple-300 z-50 w-full h-full"
               />
            :
               <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1, transition: { duration: 0.75, ease: "circOut" } }}
                  exit={{ scaleY: 0, transition: { duration: 0.75, ease: "circIn" } }}
                  onAnimationComplete={() => setCover(true)}
                  style={{ originY: isPresent ? 1 : 0 }}
                  className="absolute top-0 left-0 bg-purple-300 z-50 w-full h-full"
               />
            }
         </div>
      </motion.div>
   )
}
