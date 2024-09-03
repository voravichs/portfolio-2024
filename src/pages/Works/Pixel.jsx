import pixelbattle from "../../assets/images/works/pixelbattle.png"
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export default function UnderFood() {

   const tooltip = {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
   }

   return (
      <div className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 py-4 rounded-xl flex items-center gap-4">
         <div className="w-full h-full flex-center flex-col gap-2">
            <div className="w-full h-full flex-center">
                <img src={pixelbattle} className="w-full lg:w-4/5 max-w-[300px] p-2 rounded border shadow-crispy"/>
            </div>
            <p className="text-center text-xs xl:text-sm">Browser-based role-playing game</p>
            <div className="flex-center gap-4 w-full text-4xl lg:text-3xl text-purple-500">
               <motion.a 
                  href=""
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
               <a href="https://github.com/voravichs/pixel-battle">
                  <FaGithub className="opacity-70 hover:opacity-100"/>
               </a>
            </div>
         </div>
      </div>
   )
}