import BentoBox from '../components/BentoBox'
import profile from "../images/profile.jpg"
import { FaCircle, FaRegCircle } from "react-icons/fa";

/**
 * Home Page
 */
export default function Home() {
    return (
        <>
            <div className='fixed w-full h-24 flex-center
                bg-[#242424] border-b border-gray-700'>
                <p>Voravich Silapachairueng</p>
            </div>
            <div className='fixed top-0 left-0 w-36 pl-8 h-screen flex items-center text-2xl group'>
                <div className='flex group my-auto'>
                    <div className='flex flex-col gap-2 '>
                        <FaCircle />
                        <FaRegCircle />
                        <FaRegCircle />
                    </div>
                    <div>
                        <p className='opacity-0 group-hover:opacity-100'>Home</p>
                    </div>
                </div>


            </div>
            <div className='flex flex-col xl:flex-row gap-8 h-dvh 
                mx-8 sm:mx-24 md:mx-32 xl:mx-48 2xl-mx:64 pt-32 pb-8'>
                <div className="flex-center flex-col h-1/2 xl:h-full xl:w-2/5 gap-16">
                    <div className='h-64 w-64 xl:h-96 xl:w-96'>
                        <img src={`${profile}`}
                            className="object-scale-down rounded-full" />
                    </div>
                    <p>I'm gei :)</p>
                </div>
                <div className="flex flex-center h-1/2 xl:h-full xl:w-3/5 gap-4">
                    <div className='flex flex-col w-1/2 h-full gap-4'>
                        <div className='h-1/2 md:h-1/3'>
                            <BentoBox />
                        </div>
                        <div className='h-1/2 md:h-2/3'>
                            <BentoBox />
                        </div>
                    </div>
                    <div className='flex flex-col w-1/2 h-full gap-4'>
                        <div className='h-1/2 md:h-2/3'>
                            <BentoBox />
                        </div>
                        <div className='h-1/2 md:h-1/3'>
                            <BentoBox />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}