import { motion, useIsPresent } from "framer-motion";
import { useState } from "react"
import Nav from "../components/Nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import miniface from "../assets/images/mahfacemini.png"

/**
 * Contact Page for Home
 */
export default function Philosophy() {
   const [cover, setCover] = useState(false);
   const [option, setOption] = useState(0);
   const [workCarousel, setWorkCarousel] = useState(1);

   const isPresent = useIsPresent();
   return (
      <motion.div className="text-black p-8 h-dvh">
         <div className="bg-purple-200 h-full relative">
            {/* Content */}
            <motion.div
               className="h-full relative font-noto-sans"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: {duration: 1, delay: 0.5 }}}
               exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.25 }}}
            >
               <div className="h-full flex flex-col items-center gap-8 lg:gap-16 px-4 py-4 pt-24">
                  {/* Contact and Resume Text */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around gap-4">
                     <div className="flex flex-col gap-2">
                        {/* Contact Text */}
                        <h1 className="text-3xl font-bona-nova font-bold text-purple-900">Contact Me</h1>
                        <motion.div 
                           className="w-64 h-1 bg-purple-900"
                           initial={{ x: 1000, opacity:0 }}
                           animate={{ x: 0, opacity: 1}}
                           transition={{ delay: 1, type: "spring", bounce:0.25}}
                        ></motion.div>
                        <div className="flex gap-2 text-5xl">
                           <a href="mailto:vsilapac@gmail.com" className="text-purple-900 focus:text-purple-500">
                              <MdEmail className=' hover:text-purple-500'/>
                           </a>
                           <a href='https://github.com/voravichs' className="text-purple-900 focus:text-purple-500">
                              <FaGithub className=' hover:text-purple-500'/>
                           </a>
                           <a href='https://www.linkedin.com/in/voravich-silapachairueng/' className="text-purple-900 focus:text-purple-500">
                              <FaLinkedin className='hover:text-purple-500'/>
                           </a>
                           <a href='https://twitter.com/voravich_s' className="text-purple-900 focus:text-purple-500">
                              <BsTwitterX className='hover:text-purple-500'/>
                           </a>
                        </div>
                     </div>
                     
                     {/* Resume Text */}
                     <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bona-nova font-bold text-purple-900">Resume</h1>
                        <motion.div 
                           className="w-64 h-1 bg-purple-900"
                           initial={{ x: -1000, opacity:0 }}
                           animate={{ x: 0, opacity: 1}}
                           transition={{ delay: 1.5, type: "spring", bounce:0.25}}
                        ></motion.div>
                        <p className="text-xl">Download my <a href={"https://drive.google.com/file/d/1JeojoH69CMHPaNNQyNrC3QFBDmRm_3kw/view?usp=sharing"}className="text-purple-600 hover:text-purple-400 focus:text-purple-400 cursor-pointer">resume!</a></p>   
                     </div>
                     
                  </div>
                  
                  {/* ResumeBot */}
                  <div className="h-full w-full sm:w-2/3 md:w-1/2 lg:w-2/5 2xl:w-1/4 flex flex-col gap-4 bg-purple-500 border-4 border-double border-slate-300 rounded-lg pt-4 px-4 sm:px-8 lg:px-12 text-white font-pixel">
                     <div className="h-1/4 flex gap-4 items-center text-sm">
                        <img src={miniface} className="h-4/5"/>
                        {!option ?
                           <p>Hi, I'm resume_bot! What would you like to know about [Voravich Silapachairueng]?</p>
                        : (option == 1) ?
                           <p>Here are [Voravich Silapachairueng]'s known programming languages:</p>
                        : (option == 2) ?
                           <p>Here are [Voravich Silapachairueng]'s known technical applications:</p>
                        : (option == 3) ?
                           <p>Here is [Voravich Silapachairueng]'s general skills:</p>
                        : (option == 4) ?
                           <p>Here is [Voravich Silapachairueng]'s work history:</p>
                        : (option == 5) ?
                           <p>Here is [Voravich Silapachairueng]'s education history:</p>
                        : <></>}
                     </div>
                     {!option ?
                        <div className="h-1/2 flex flex-col gap-2 text-base">
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:translate-x-2 "
                              onClick={() => setOption(1)}
                           >
                              <p className="text-xl">&gt;</p>Programming Languages
                           </div>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:translate-x-2 "
                              onClick={() => setOption(2)}
                           >
                              <p className="text-xl">&gt;</p>Technical Applications
                           </div>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:translate-x-2"
                              onClick={() => setOption(3)}
                           >
                              <p className="text-xl">&gt;</p> General Skills
                           </div>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:translate-x-2"
                              onClick={() => setOption(4)}
                           >
                              <p className="text-xl">&gt;</p> Work History
                           </div>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:translate-x-2"
                              onClick={() => setOption(5)}
                           >
                              <p>&gt;</p> Education History
                           </div>
                        </div>
                     : (option == 1) ?
                        <div className="h-1/2 flex flex-col text-sm sm:text-base md:text-lg">
                           <div> Programming Languages </div>
                           <ul className="pl-4">
                              <li>- Java</li>
                              <li>- HTML/CSS/Javascript</li>
                              <li>- C/C++</li>
                              <li>- MATLAB</li>
                              <li>- MySQL</li>
                              <li>- Rust</li>
                           </ul>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:-translate-x-2 text-xl mt-2"
                              onClick={() => setOption(0)}
                           >
                              <p className="text-2xl">&lt;-</p> Return
                           </div>
                        </div>
                     : (option == 2) ?
                        <div className="h-1/2 flex flex-col text-sm sm:text-base md:text-lg">
                           <div> Technical Applications </div>
                           <ul className="pl-4">
                              <li>- Github/Source Control</li>
                              <li>- Heroku/Vercel Deployment</li>
                              <li>- Blender</li>
                              <li>- Figma</li>
                              <li>- OpenAI API</li>
                              <li>- Local LLM use (KoboldAI, Stable Diffusion Web UI)</li>
                           </ul>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:-translate-x-2 text-xl mt-2"
                              onClick={() => setOption(0)}
                           >
                              <p>&lt;-</p> Return
                           </div>
                        </div>
                     : (option == 3) ?
                        <div className="h-1/2 flex flex-col text-sm sm:text-base md:text-lg">
                           <ul className="pl-2">
                              <li>- Algorithm Analysis</li>
                              <li>- Computer Vision</li>
                              <li>- Research Methods</li>
                              <li>- Customer Service</li>
                              <li>- Human Subjects Research</li>
                              <li>- UI/UX Usability Research</li>
                              <li>- UI Prototyping</li>
                              <li>- Teaching/Tutoring</li>
                           </ul>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:-translate-x-2 text-xl mt-2"
                              onClick={() => setOption(0)}
                           >
                              <p>&lt;-</p> Return
                           </div>
                        </div>
                     : (option == 4) ?
                        <div className="h-1/2 flex flex-col text-sm sm:text-base md:text-lg">
                           {(workCarousel == 1) ?
                              <>
                                 <div> Teaching Assistant for MCIT  </div>
                                 <div> 09/2023 – Current </div>
                                 <ul className="pl-2">
                                    <li>- TA for CIT 5910 in Fall 2023 and CIT 5940 in Spring 2024</li>
                                    <li>- HTA for CIT 5910 in Fall 2024</li>
                                 </ul>
                                 <div className="w-full flex-center gap-4">
                                    <p className="w-1/2 flex-center text-2xl hover:text-yellow-200 cursor-pointer hover:translate-x-1" onClick={() => setWorkCarousel(2)}>
                                       -&gt;
                                    </p>
                                 </div>
                              </>
                           : (workCarousel == 2) ?
                              <>
                                 <div> Research Assistant  </div>
                                 <div> 09/2019 – 04/2021 </div>
                                 <ul className="pl-2">
                                    <li>- Undergraduate research assistant at Brown University's 3D Information for Perception and Action Lab</li>
                                 </ul>
                                 <div className="w-full flex-center gap-4">
                                    <p className="w-1/2 flex-center text-2xl hover:text-yellow-200 cursor-pointer hover:translate-x-1" onClick={() => setWorkCarousel(1)}>
                                       &lt;-
                                    </p>
                                 </div>
                              </>
                           :<></>}
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:-translate-x-2 text-xl mt-2"
                              onClick={() => setOption(0)}
                           >
                              <p>&lt;-</p> Return
                           </div>
                        </div>
                     : (option == 5) ?
                        <div className="h-1/2 flex flex-col text-sm sm:text-base md:text-lg">
                           <div>Masters of Computer and Information Technology</div>
                           <div className="pl-6">University of Pennsylvania</div>
                           <div className="pl-6">2022-2024</div>
                           <div className="mt-4">Bachelors of Science in Cognitive Science:</div>
                           <div className="pl-6">Brown University</div>
                           <div className="pl-6">2017-2021</div>
                           <div className="flex items-center gap-1 hover:text-yellow-200 cursor-pointer hover:-translate-x-2 text-xl mt-2"
                              onClick={() => setOption(0)}
                           >
                              <p>&lt;-</p> Return
                           </div>
                        </div>
                     :<></>}
                     
                  </div>
                  
               </div>
            </motion.div>
            {/* Nav */}
            <Nav activePage={"hireme"}/>
                  
            {/* BG */}
            {cover
            ?
               <motion.div
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0, transition: { duration: 0.75, ease: "circOut" } }}
                  exit={{ scaleY: 1, transition: { duration: 0.75, ease: "circIn" } }}
                  style={{ originY: isPresent ? 1 : 0 }}
                  className="absolute top-0 left-0 bg-purple-300 z-50 w-full h-full"
               />
            :
               <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1, transition: { duration: 0.75, ease: "circOut" } }}
                  exit={{ scaleY: 0, transition: { duration: 0.75, ease: "circIn" } }}
                  onAnimationComplete={() => setCover(true)}
                  style={{ originY: isPresent ? 0 : 1 }}
                  className="absolute top-0 left-0 bg-purple-300 z-50 w-full h-full"
               />
            }
         </div>
      </motion.div>
   )
}
