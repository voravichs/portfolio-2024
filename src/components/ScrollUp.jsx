import { motion } from "framer-motion";
import {  FaAngleDoubleUp } from "react-icons/fa";
export default function ScrollDown({current, setCurrent}) {
   return (
      <motion.div 
         className="absolute top-0 right-0 lg:w-full h-1/3 flex justify-center items-start pr-8 lg:pr-0 pt-8 z-10"
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}
         transition={{ delay: 0.5}}
      >
         <motion.div
               animate={{ y: [10, 0, 10]}}
               transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
               }}
               className="flex-center flex-col cursor-pointer opacity-30"
               onTap={() => setCurrent(current - 1)}
         >
            <FaAngleDoubleUp className="text-3xl lg:text-5xl"/> 
            <p className="font-vt text-lg lg:text-2xl">scroll</p>  
         </motion.div>
      </motion.div> 
   )
}