import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpg"
import pixelprofile from "../../assets/images/mahfacestaticsuperhappy.png"
export default function Hello() {
   return (
      <div className="h-full pt-32 px-8">
         <div className="flex-center flex-col gap-0 lg:gap-2 h-full">
            {/* Hello Text */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light">Hello, my name is</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:w-1/2 2xl:w-full">Voravich Silapachairueng</h1>
            {/* Divider Bar */}
            <motion.div 
                  className="w-64 h-1 bg-black my-4"
                  initial={{ x: 1000, opacity:0 }}
                  animate={{ x: 0, opacity: 1}}
                  transition={{ delay: 0.25, type: "spring", bounce:0.25}}
            ></motion.div>
            {/* Body */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-light w-2/3 text-center">I am a designer, web developer, and UI/UX engineer. </div>
         </div>

         {/* MOBILE Left Panel */}
         <div className="absolute top-0 left-0 w-2/5 sm:w-1/3 md:w-1/4 h-1/2 lg:hidden flex-center pl-8"> 
            <img src={profile} className="w-full"/>
         </div>
         {/* MOBILE Right Panel */}
         <div className="absolute top-0 right-0 w-2/5 sm:w-1/3 md:w-1/4 h-1/2 lg:hidden flex-center pr-8">
            <motion.img 
               src={pixelprofile} className="w-full"
               animate={{ rotate: [-3, 3, -3]}}
               transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.75, 1],
                  repeat: Infinity,
               }}
            />
         </div>

         {/* DESKTOP Left Panel */}
         <div className="absolute top-0 left-0 w-1/4 h-full hidden lg:flex-center"> 
            <img src={profile} className="w-2/3"/>
         </div>
         {/* DESKTOP Right Panel */}
         <div className="absolute top-0 right-0 w-1/4 h-full hidden lg:flex-center">
            <motion.img 
               src={pixelprofile} className="w-1/2"
               animate={{ rotate: [-3, 3, -3]}}
               transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.75, 1],
                  repeat: Infinity,
               }}
            />
         </div>
      </div>
   )
}
