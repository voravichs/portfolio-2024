import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import {Home, About, Works, Philosophy, HireMe} from '../pages'

function AnimatedRoutes() {
   const location = useLocation();
   return (
      <AnimatePresence>
         <div className="fixed bg-purple-200 w-full h-dvh"></div>
         <div className="text-black lg:p-4 2xl:p-8 relative h-dvh">
            <div className="relative">
               <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/works" element={<Works />} />
                  <Route path="/values" element={<Philosophy />} />
                  <Route path="/hireme" element={<HireMe />} />
               </Routes>
            </div>
         </div>
         
      </AnimatePresence>
      
   )
}

export default AnimatedRoutes