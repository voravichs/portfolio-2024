import { FaGithub, FaLink } from "react-icons/fa";
import uflogo from "../../assets/images/works/uflogo.png"
import { motion } from "framer-motion";

export default function UnderFood() {
   const tooltip = {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
   }

   return (
      <>
         <div className="absolute top-0 left-0 w-full h-full p-8 rounded-xl">
            <div className="h-full flex justify-center gap-2 relative">
               {/* Title */}
               <div className="w-full md:w-full flex-center flex-col gap-2 p-2">
                  <img src={uflogo} className="p-2 rounded border shadow-crispy w-full max-w-[400px]"/>
                  <p className="text-center text-sm">Full-stack restaurant searching application</p>
                  <div className="flex-center gap-4 w-full text-5xl text-purple-500">
                     <motion.a 
                        href="https://underground-foodies.onrender.com"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        className="relative flex-center"
                     >
                        <FaLink className="opacity-70 hover:opacity-100"/>
                        <motion.span
                           variants={tooltip}
                           transition={{ duration: 0.1, ease: "easeIn" }}
                           className="absolute z-20 tooltip-sm-b"
                        >
                           <p className="font-bold">Link (Broken Currently)</p>
                        </motion.span>
                     </motion.a>
                     <a href="https://github.com/voravichs/underground-foodies">
                        <FaGithub className="opacity-70 hover:opacity-100"/>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
    )
}