import { motion, useIsPresent } from "framer-motion";
import { useState } from "react"
import Nav from "../components/Nav"
import StaringHead from "../components/StaringHead";
import { FaRobot, FaLightbulb, FaBookReader, FaChevronLeft  } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa";

export default function Philosophy() {
   const [cover, setCover] = useState(false)
   const [active, setActive] = useState(0)

   const isPresent = useIsPresent();
   return (
      <>
         {/* Content */}
         <motion.div
            className={`h-full flex ${active ? "items-end lg:items-center lg:justify-end" : ""} relative`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 1, delay: 0.5 }}}
            exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.25 }}}
         >
            {/* Staring Head */}
            <motion.div className={`${active ? "w-full lg:w-1/3" : "w-full"}`} layout>
               <StaringHead/>   
            </motion.div>
            

            {/* Bubbles */}
            <div className={`absolute top-0 left-0 w-full text-purple-900 font-bona-nova 
               ${active ? "h-1/2 top-24 lg:w-2/3 lg:top-0 lg:h-full" : "h-full grid grid-cols-2 grid-rows-2 justify-items-center items-center"} `}
            >
               {/* Active 1  */}
               <motion.div 
                  className={`flex-center flex-col
                     ${active == 1 ? "w-full h-full lg:items-start lg:justify-center" 
                     : (!active) ? "w-1/2 h-1/2" : "hidden"}`}
                  layout
               >
                  <motion.div 
                     className={`flex-center flex-col hover:text-purple-500 ${active ? "hover:text-purple-900 cursor-default" : "cursor-pointer"}`}
                     onClick={() => setActive(1)}
                     layout
                  >
                     <motion.div 
                        className="text-6xl lg:text-7xl"
                        layout
                     >
                        <FaUniversalAccess />      
                     </motion.div>
                     <motion.p 
                        className={`text-center font-bold ${active ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" : "text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl"}`}
                        layout
                     >
                        Fun, Active, Accessible UIs
                     </motion.p>
                     {active ?
                        <motion.p className="font-noto-sans text-base sm:text-lg lg:text-xl mt-4 px-8 md:px-16 lg:px-24 xl:px-32" layout>
                           I strive to inject a bit of whimsy and creativity in every project that I do! I study the aesthetics of modern UIs and aim for high interactivity and movement, without sacrificing the accessibility of applications. As a big proponent of customizability in coding, I love crafting up UI solutions with the tools I already have before looking for libraries or new dependencies.
                        </motion.p>
                        : <></>
                     }
                  </motion.div>
               </motion.div>
               {/* Active 2 */}
               <motion.div 
                  className={`flex-center flex-col
                     ${active == 2 ? "w-full h-full lg:items-start lg:justify-center" 
                     : (!active) ? "w-1/2 h-1/2" : "hidden"}`}
                  layout
               >
                  <motion.div 
                     className={`flex-center flex-col hover:text-purple-500 ${active ? "hover:text-purple-900 cursor-default" : "cursor-pointer"}`}
                     onClick={() => setActive(2)}
                     layout
                  >
                     <motion.div 
                        className="text-6xl lg:text-7xl"
                        layout
                     >
                        <FaLightbulb />      
                     </motion.div>
                     <motion.p 
                        className={`text-center font-bold ${active ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" : "text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl"}`}
                        layout
                     >
                        Innovation and Learning
                     </motion.p>
                     {active ?
                        <motion.p className="font-noto-sans text-base sm:text-lg lg:text-xl mt-4 px-8 md:px-16 lg:px-24 xl:px-32" layout>
                           I love the process of education, both as a student and a teacher! Every day, I am honing my skills and learning new techniques, whether they be for UI design, software development, or for pixel art. Before the cruel passage of time, computer scientists and developers need to keep up with the times and adapt to new technologies and trends. 
                        </motion.p>
                        : <></>
                     }
                  </motion.div>
               </motion.div>
               {/* Active 3 */}
               <motion.div 
                  className={`flex-center flex-col
                     ${active == 3 ? "w-full h-full lg:items-start lg:justify-center" 
                     : (!active) ? "w-1/2 h-1/2" : "hidden"}`}
                  layout
               >
                  <motion.div 
                     className={`flex-center flex-col hover:text-purple-500 ${active ? "hover:text-purple-900 cursor-default" : "cursor-pointer"}`}
                     onClick={() => setActive(3)}
                     layout
                  >
                     <motion.div 
                        className="text-6xl lg:text-7xl"
                        layout
                     >
                        <FaBookReader />      
                     </motion.div>
                     <motion.p 
                        className={`text-center font-bold ${active ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" : "text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl"}`}
                        layout
                     >
                        Telling Stories
                     </motion.p>
                     {active ?
                        <motion.p className="font-noto-sans text-base sm:text-lg lg:text-xl mt-4 px-8 md:px-16 lg:px-24 xl:px-32" layout>
                           In many ways, programming to me is like writing a good interactive story. Perhaps due to my penchant for reading and creating stories in both video games and tabletop role-playing games, I like to guide users into interesting experiences throughout my applications.
                        </motion.p>
                        : <></>
                     }
                  </motion.div>
               </motion.div>
               {/* Active 4 */}
               <motion.div 
                  className={`flex-center flex-col
                     ${active == 4 ? "w-full h-full lg:items-start lg:justify-center" 
                     : (!active) ? "w-1/2 h-1/2" : "hidden"}`}
                  layout
               >
                  <motion.div 
                     className={`flex-center flex-col hover:text-purple-500 ${active ? "hover:text-purple-900 cursor-default" : "cursor-pointer"}`}
                     onClick={() => setActive(4)}
                     layout
                  >
                     <motion.div 
                        className="text-6xl lg:text-7xl"
                        layout
                     >
                        <FaRobot />      
                     </motion.div>
                     <motion.p 
                        className={`text-center font-bold ${active ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" : "text-sm sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl"}`}
                        layout
                     >
                        Responsible AI Use
                     </motion.p>
                     {active ?
                        <motion.p className="font-noto-sans text-sm sm:text-base lg:text-xl mt-4 px-8 md:px-16 lg:px-24 xl:px-32" layout>
                           Artificial intelligence and LLMs are rampant in the modern day. In its wake, there are many moral standards that are crossed, and often violated, for the sake of progress. I believe that as programmers, we have the power to define good ethical uses for AI that do not come at the expense of those in creative fields. I use AI sparingly, with an understanding to its faults. I let it guide my work in the background, instead of replacing any critical or creative thought entirely.
                        </motion.p>
                        : <></>
                     }
                  </motion.div>
               </motion.div>
            </div>
            <motion.div 
               className={`absolute top-8 right-8 cursor-pointer text-purple-900 hover:text-purple-500 ${!active ? "hidden" : ""}`}
               layout
            >
               <FaChevronLeft className="text-3xl" onClick={() => setActive(0)}/>
            </motion.div>
         </motion.div>

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
               className="absolute top-0 left-0 bg-purple-400 z-50 w-full h-full"
            />
         :
            <motion.div
               initial={{ scaleY: 0 }}
               animate={{ scaleY: 1, transition: { duration: 0.75, ease: "circOut" } }}
               exit={{ scaleY: 0, transition: { duration: 0.75, ease: "circIn" } }}
               onAnimationComplete={() => setCover(true)}
               style={{ originY: isPresent ? 1 : 0 }}
               className="absolute top-0 left-0 bg-purple-400 z-50 w-full h-full"
            />
         }
      </>
   )
}
