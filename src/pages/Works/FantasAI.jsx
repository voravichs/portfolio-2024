import { FaGithub, FaYoutube  } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react"
import fantasai1 from "../../assets/images/works/fantasai1.png"
import fantasai2 from "../../assets/images/works/fantasai2.png"
import fantasai3 from "../../assets/images/works/fantasai3.png"
import fantasai4 from "../../assets/images/works/fantasai4.png"

export default function FantasAI() {
   const [enlarged, setEnlarged] = useState(false);
   const [img1Large, setImg1Large] = useState(false);
   const [img2Large, setImg2Large] = useState(false);
   const [img3Large, setImg3Large] = useState(false);
   const [img4Large, setImg4Large] = useState(false);
   const tooltip = {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
   }

   const container = {
      hidden: { opacity: 1 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
         },
      },
   }

   const titleLetter = {
      hidden: { },
      show: { y: [0, -10, 10,  0]},
   }

   const aiLetter = {
      hidden: { },
      show: { scale: [1, 1.3, 1], transition: {duration: 0.5} },
   }
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full p-8 rounded-xl">
         <div className="h-full flex flex-col justify-center gap-2 relative">
            <div className="flex-center flex-col gap-2 relative">
               {/* Title */}
               <p className="text-yellow-400/90 font-bold antialiased  p-4 rounded-md border shadow-crispy">
                  <motion.div 
                     variants={container}
                     initial="hidden"
                     animate="hidden"
                     whileHover="show"
                     className="text-5xl sm:text-6xl xl:text-7xl text-yellow-300 font-bold antialiased flex-center cursor-default"
                  >
                     <motion.span variants={titleLetter} className="font-title">F</motion.span>
                     <motion.span variants={titleLetter} className="font-title">a</motion.span>
                     <motion.span variants={titleLetter} className="font-title">n</motion.span>
                     <motion.span variants={titleLetter} className="font-title">t</motion.span>
                     <motion.span variants={titleLetter} className="font-title">a</motion.span>
                     <motion.span variants={titleLetter} className="font-title">s</motion.span> 
                     <motion.span variants={aiLetter} className="font-mono text-title tracking-tighter">
                        AI
                     </motion.span>
                  </motion.div>
               </p>
               <p className="text-base lg:text-sm xl:text-base text-center">An OpenAI-powered virtual pet game</p>
               {/* Links */}
               <div className="flex text-6xl text-purple-500 gap-4">
                  <motion.a 
                     href="https://www.youtube.com/watch?v=z1EdyJDIrNc"
                     initial="initial"
                     animate="initial"
                     whileHover="animate"
                     className="relative flex-center"
                  >
                  <FaYoutube className="opacity-70 hover:opacity-100"/>
                  <motion.span
                     variants={tooltip}
                     transition={{ duration: 0.1, ease: "easeIn" }}
                     className="absolute z-20 tooltip-sm-b"
                  >
                     <p className="font-bold">Video Presentation/Demo</p>
                  </motion.span>
                  </motion.a>
                  <a href="https://github.com/voravichs/fantasAI">
                     <FaGithub className="opacity-70 hover:opacity-100"/>
                  </a>
               </div>
            </div>
            {/* Left Pics */}
            <div className="absolute top-0 lg:left-0 flex items-center justify-around lg:flex-col gap-2 h-1/3 lg:h-full w-full lg:w-1/3">
               <motion.img 
                  src={fantasai1} 
                  className={`w-3/5 sm:w-1/4 md:w-1/5 lg:w-1/2 max-w-[110px] self-start rounded-md drop-shadow-sexy transition-all cursor-pointer ${img1Large ? "scale-[2.5] translate-y-32 lg:translate-y-0 z-30" : ""}`}
                  onClick={() => {
                     if (!enlarged) {
                        setImg1Large(!img1Large)
                        setEnlarged(!enlarged);   
                     } else if (enlarged && img1Large) {
                        setImg1Large(!img1Large)
                        setEnlarged(!enlarged);  
                     }
                  }}
               />
               <motion.img 
                  src={fantasai2} 
                  className={`w-3/5 sm:w-1/4 md:w-1/5 lg:w-1/2 max-w-[110px]  self-start rounded-md drop-shadow-sexy transition-all cursor-pointer ${img2Large ? "scale-[2.5] translate-y-32 lg:translate-y-0 z-30" : ""}`}
                  onClick={() => {
                     if (!enlarged) {
                        setImg2Large(!img2Large)
                        setEnlarged(!enlarged);   
                     } else if (enlarged && img2Large) {
                        setImg2Large(!img2Large)
                        setEnlarged(!enlarged);  
                     }
                  }}
               />
            </div>
            {/* Right Pics */}
            <div className="absolute bottom-0 lg:right-0 flex items-center justify-around lg:flex-col gap-2 h-1/3 lg:h-full w-full lg:w-1/3">
               <motion.img 
                  src={fantasai3} 
                  className={`w-3/5 sm:w-1/4 md:w-1/5 lg:w-1/2 max-w-[110px] self-end rounded-md drop-shadow-sexy transition-all cursor-pointer ${img3Large ? "scale-[2.5] -translate-y-32 lg:translate-y-0 z-30" : ""}`}
                  onClick={() => {
                     if (!enlarged) {
                        setImg3Large(!img3Large)
                        setEnlarged(!enlarged);   
                     } else if (enlarged && img3Large) {
                        setImg3Large(!img3Large)
                        setEnlarged(!enlarged);  
                     }
                  }}
               />
               <motion.img 
                  src={fantasai4} 
                  className={`w-3/5 sm:w-1/4 md:w-1/5 lg:w-1/2 max-w-[110px] self-end rounded-md drop-shadow-sexy transition-all cursor-pointer ${img4Large ? "scale-[2.5] -translate-y-32 lg:translate-y-0 z-30" : ""}`}
                  onClick={() => {
                     if (!enlarged) {
                        setImg4Large(!img4Large)
                        setEnlarged(!enlarged);   
                     } else if (enlarged && img4Large) {
                        setImg4Large(!img4Large)
                        setEnlarged(!enlarged);  
                     }
                  }}
               />
            </div>
         </div>
      </div>
    </>
  )
}
