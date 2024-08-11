import { useState } from "react";
// import { Landing, Works, Contact } from "./"
import TalkingHead from "../components/TalkingHead"
import GitHubLogo from "../assets/images/GitHub-Mark.png"
import LinkedInLogo from "../assets/images/LI-In-Bug.png"
import TwitterLogo from "../assets/images/logo-black.png"

import { Link } from "react-router-dom";
/**
 * Home Page
 */
export default function Home() {
    return (
        <div className="text-black p-8 h-dvh">
            <div className="bg-[#f4effa] h-full relative">
                <div className='w-full h-24 flex items-center justify-between px-8'>
                    <div>menu</div>
                    <div>contact me</div>
                </div>
                <div className='py-8 h-full flex-center'>
                    <TalkingHead/>
                </div>
                {/* Right Panel */}
                <div className="absolute top-0 left-0 w-1/3 h-full flex flex-col items-start justify-center gap-4 pl-12">
                    <Link to={"/about"}>
                        About
                    </Link>
                    <Link to={"/works"}>
                        Works
                    </Link>
                    <Link to={"/contact"}>
                        Contact
                    </Link>
                </div>
                {/* Left Panel */}
                <div className="absolute top-0 right-0 w-1/3 h-full flex flex-col items-end justify-center gap-4 pr-12">
                    <a href='https://github.com/voravichs'>
                        <img className='w-16 h-16 contrast-50 hover:contrast-100' src={GitHubLogo} alt="github logo" />
                    </a>
                    <a href='https://www.linkedin.com/in/voravich-silapachairueng/'>
                        <img className='w-20 h-16 grayscale hover:grayscale-0' src={LinkedInLogo} alt="linkedin logo" />
                    </a>
                    <a href='https://twitter.com/bainrowz'>
                        <img className='w-16 h-16 grayscale hover:grayscale-0' src={TwitterLogo} alt="linkedin logo" />
                    </a>
                </div>
            </div>
            
        </div>
    )
}