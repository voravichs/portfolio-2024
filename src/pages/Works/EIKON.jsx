import { useState } from "react";
import { motion } from "framer-motion";

import AbilityModal from "./AbilityModal";

import Icon from '@mdi/react';
import { mdiDiceD20 } from '@mdi/js';
import { FaGithub, FaLink, FaExpandArrowsAlt  } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import eikon from "../../assets/images/works/eikonlogowhite.png"
import colossus from "../../assets/data/colossus";

export default function EIKON() {
   const [diceResult, setDiceResult] = useState();
   const [diceShow, setDiceShow] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const tooltip = {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
   }

   const diceHover = {
      initial: { scale: 1 },
      animate: { x: [null, 3, -3, 0], y: [null, 3, -3, 0], transition: { duration: 0.25 } },
      tap: { rotate: 1440, transition: { duration: 0.5 } },
   }

   function rollDice(size) {
      setDiceResult(Math.floor(Math.random() * size) + 1);
      setDiceShow(true)
   }

   return (
      <>
         <div className="absolute top-0 left-0 w-full h-full p-4 lg:p-8 rounded-xl flex flex-col lg:flex-row items-center gap-4">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-2">
               <div className="lg:hidden flex-center gap-4 w-full text-4xl md:text-5xl text-purple-500">
                  <motion.a 
                     href="https://ei-kon.vercel.app/"
                     initial="initial"
                     animate="initial"
                     whileHover="animate"
                     className="relative flex-center"
                  >
                     <FaLink className="opacity-70 hover:opacity-100"/>
                     <motion.span
                        variants={tooltip}
                        transition={{ duration: 0.1, ease: "easeIn" }}
                        className="absolute z-20 tooltip-xsm-b"
                     >
                        <p className="font-bold">Deployed Link</p>
                     </motion.span>
                  </motion.a>
                  <motion.a 
                     href="https://ei-kon.vercel.app/about/reflection"
                     initial="initial"
                     animate="initial"
                     whileHover="animate"
                     className="relative flex-center"
                  >
                     <GiMirrorMirror className="opacity-70 hover:opacity-100"/>
                     <motion.span
                        variants={tooltip}
                        transition={{ duration: 0.1, ease: "easeIn" }}
                        className="absolute z-20 tooltip-xsm-b"
                     >
                        <p className="font-bold">Project Reflection</p>
                     </motion.span>
                  </motion.a>
                  <a href="https://github.com/voravichs/ei-kon">
                     <FaGithub className="opacity-70 hover:opacity-100"/>
                  </a>
               </div>
               <div className="w-full flex-center p-2">
                  <img src={eikon} className="w-2/3 max-w-[250px] md:max-w-[375px] p-2 rounded border shadow-crispy bg-purple-500"/>
               </div>
               <div className="flex-center flex-col gap-2 h-1/4 text-sm sm:text-base">
                  <p className="text-center">A character sheet builder for the ICON TTRPG</p>
               </div>
               <div className="hidden lg:flex-center gap-4 w-full text-4xl md:text-5xl text-purple-500">
                  <motion.a 
                     href="https://ei-kon.vercel.app/"
                     initial="initial"
                     animate="initial"
                     whileHover="animate"
                     className="relative flex-center"
                  >
                     <FaLink className="opacity-70 hover:opacity-100"/>
                     <motion.span
                        variants={tooltip}
                        transition={{ duration: 0.1, ease: "easeIn" }}
                        className="absolute z-20 tooltip-xsm-b"
                     >
                        <p className="font-bold">Deployed Link</p>
                     </motion.span>
                  </motion.a>
                  <motion.a 
                     href="https://ei-kon.vercel.app/about/reflection"
                     initial="initial"
                     animate="initial"
                     whileHover="animate"
                     className="relative flex-center"
                  >
                     <GiMirrorMirror className="opacity-70 hover:opacity-100"/>
                     <motion.span
                        variants={tooltip}
                        transition={{ duration: 0.1, ease: "easeIn" }}
                        className="absolute z-20 tooltip-xsm-b"
                     >
                        <p className="font-bold">Project Reflection</p>
                     </motion.span>
                  </motion.a>
                  <a href="https://github.com/voravichs/ei-kon">
                     <FaGithub className="opacity-70 hover:opacity-100"/>
                  </a>
               </div>
            </div>
               
            <div className="w-full lg:w-1/2 h-full flex-center flex-col gap-2">
               <div className="flex gap-2 h-1/2">
                  {/* Dice */}
                  <div className="flex-center flex-col text-sm md:text-base">
                        <p>Dice Rolling</p>
                        <div className="text-primary bg-white justify-self-center font-bold flex-center flex-col p-2 ">
                           <div>
                              <div className="flex-center cursor-pointer relative text-purple-400">
                                    <motion.div 
                                       initial="initial"
                                       animate="initial"
                                       whileHover="animate"
                                       whileTap="tap"
                                       onClick={() => rollDice(20)}
                                       variants={diceHover}
                                    >
                                       <Icon path={mdiDiceD20} size={4} />
                                    </motion.div>
                                    {diceShow &&
                                       <motion.span
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: [1,1,0], y: [null, 0, 10], transition: {duration: 1.5, times: [0, 0.9, 1]}}}
                                          transition={{ duration: 0.1, ease: "easeIn" }}
                                          className="absolute z-10 tooltip-sm-dice"
                                          onAnimationComplete={() => setDiceShow(false)}
                                       >
                                          <p className="font-bold text-center flex-center gap-1"> You rolled: {diceResult}</p>
                                       </motion.span>
                                    }
                                    
                              </div>
                           </div>
                        </div>
                  </div>

                  {/* Tooltips */}
                  <div className="md:flex-center flex-col hidden">
                        <p>Custom Tooltips</p>
                        <div className="text-primary bg-white justify-self-center font-bold flex-center flex-col p-2">
                           <motion.div
                              initial="initial"
                              animate="initial"
                              whileHover="animate"
                              className="bg-purple-400 hover:bg-purple-600 text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                           >
                              <p className="font-bold text-xl flex-center gap-2">EI|KON</p>
                              <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                    className="absolute z-20 tooltip-sm-b"
                              >
                                    <p className="font-bold">Custom tooltips made using framer motion!</p>
                              </motion.span>
                           </motion.div>
                        </div>
                  </div>
               </div>
               
               {/* Modals */}
               <div className="flex-center flex-col h-1/2 w-full text-sm md:text-base">
                  <p>Detailed Modals</p>
                  <div className="text-primary bg-white justify-self-center font-bold flex-center flex-col p-2 h-4/5 w-4/5">
                        <div className="border border-b-[12px] h-full border-purple-300 bg-white rounded-lg flex-center flex-col text-primary text-xl text-center relative w-full md:w-1/2 lg:w-full">
                           <p className="text-xl"><span className="font-bold"></span> Dropkick</p>
                           <FaExpandArrowsAlt 
                              onClick={() => {
                                    setShowModal(true)
                              }} 
                              className="absolute bottom-2 right-2 text-xl lg:text-2xl cursor-pointer hover:animate-ping"
                           />
                        </div>
                  </div>
               </div>
            </div>
         </div>
         <AbilityModal
            ability={colossus.abilities}
            showModal={showModal}
            setShowModal={setShowModal}
         />  
      </>
   )
}
