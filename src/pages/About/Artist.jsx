import { motion } from "framer-motion";
import slimeparade from "../../assets/images/slimeparade.png"
import ArtImgCarousel from "./ArtImgCarousel";

export default function Artist() {
    return (
      <>
         <div className="h-full w-full lg:w-1/2 flex-center flex-col gap-0 lg:gap-2 pt-48 lg:pt-0 px-8 lg:pr-12">
            {/* Hello Text */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light">Hello, I am a</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">Hobbyist Artist</h1>
            {/* Divider Bar */}
            <motion.div 
               className="w-64 h-1 bg-black my-4"
               initial={{ x: -1000, opacity:0 }}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 0.1, type: "spring", bounce:0.25}}
            ></motion.div>
            {/* Body */}
            <div className="text-sm md:text-base xl:text-lg font-light w-full text-center">
                  I love dabbling into different art forms, whether they be <span className="font-bold">2D or 3D art</span>! My interest in 3D art originated from me having to learn <span className="font-bold"> Blender </span>for my undergraduate research (to 3D print molds for mechanical lab components). This spiraled into me learning to model characters for TTRPG miniatures.
            </div>
            <div className="text-sm md:text-base xl:text-lg font-light w-full text-center pt-2">
                  I have always been enamored by the aesthetic of <span className="font-bold">old pixel JRPGs</span> like Final Fantasy and Dragon Quest. Recently, I have been learning to make pixel sprites within <span className="font-bold"> Aseprite</span>. It has been an enlightening experience, trying to progress from very small 16x16 pixel sprites to larger portraits. 
            </div>
            {/* MOBILE Panel */}
            <div className="absolute top-0 w-full h-1/3 flex-center pt-24 lg:hidden">
               <ArtImgCarousel/>
            </div>
            {/* DESKTOP Panel */}
            <div className="absolute top-0 left-0 w-1/2 h-full lg:flex-center hidden">
               <ArtImgCarousel/>
            </div>
         </div>
         
         <div className="absolute bottom-0 left-0 w-full lg:w-1/2 flex-center">
            <img src={slimeparade} className="w-2/3 md:w-1/2 lg:w-2/3"/>
         </div>
      </>
      
    )
}
