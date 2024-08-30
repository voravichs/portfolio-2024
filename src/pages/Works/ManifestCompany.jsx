import { FaGithub } from "react-icons/fa";

import mclogo from "../../assets/images/works/manifest_company.png"

export default function ManifestCompany() {
   return (
      <>
         <div className="absolute top-0 left-0 w-full h-full p-8 rounded-xl">
            <div className="h-full flex justify-center gap-2 relative">
               {/* Title */}
               <div className="w-full flex-center flex-col gap-2 p-2">
                  <img src={mclogo} className="p-2 rounded border shadow-crispy w-full max-w-[200px] "/>
                  <p className="text-center text-sm">A Java business management game</p>
                  <a href="https://github.com/voravichs/manifest-company">
                     <FaGithub className="opacity-70 hover:opacity-100 text-5xl text-purple-500"/>
                  </a>
               </div>
            </div>
         </div>
      </>
    )
}
