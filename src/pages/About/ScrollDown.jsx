import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
export default function ScrollDown() {
    return (
        <motion.div 
            className="absolute bottom-0 right-0 lg:w-full h-1/3 flex justify-center items-end pr-8 lg:pr-0 pb-8 z-10"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5}}
        >
            
            <motion.div
               animate={{ y: [0, 10, 0]}}
               transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
               }}
               className="flex-center flex-col"
            >
               <p className="font-vt opacity-30 text-lg lg:text-2xl cursor-default">scroll</p>
               <FaAngleDoubleDown className="text-3xl lg:text-5xl opacity-30 cursor-default"/>    
            </motion.div>
        </motion.div> 
    )
}