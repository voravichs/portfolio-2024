import { FaCircle, FaRegCircle } from "react-icons/fa";
/**
 * NavDots Componenent
 */
export default function NavDots({ page, setPage }) {
    
    const nav = {
        initial: { x: -5, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 5, opacity: 0 }
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-36 pl-8 h-screen flex items-center text-2xl group'>
                <div className='flex my-auto'>
                    <div className='flex flex-col'>
                        <div className="py-1 flex items-center group/1 gap-2">
                            {page == "home"
                                ? <FaCircle />
                                : <FaRegCircle />
                            }
                            <p className='opacity-0 group-hover/1:opacity-100'>Home</p>
                        </div>
                        <div className="py-1 flex items-center group/2 gap-2">
                            {page == "works"
                                ? <FaCircle />
                                : <FaRegCircle onClick={setPage("works")} />
                            }
                            <p className='opacity-0 group-hover/2:opacity-100'>Works</p>
                        </div>
                        <div className="py-1 flex items-center group/3 gap-2">
                            {page == "contact"
                                ? <FaCircle />
                                : <FaRegCircle />
                            }
                            <p className='opacity-0 group-hover/3:opacity-100'>Contact</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='fixed top-0 left-0 w-36 pl-8 h-screen flex items-center text-2xl group'>
                <div className='flex my-auto'>
                    <div className='flex flex-col text-3xl'>
                        <motion.div className="py-1 flex items-center gap-3"
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                        >
                            {page == "home"
                                ? <FaCircle />
                                : <FaRegCircle onClick={() => { setPage("home") }} />
                            }
                            <motion.p variants={nav}> Home </motion.p>
                        </motion.div>
                        <motion.div className="py-1 flex items-center gap-3"
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                        >
                            {page == "works"
                                ? <FaCircle />
                                : <FaRegCircle onClick={() => { setPage("works") }} />
                            }
                            <motion.p variants={nav}> Works</motion.p>
                        </motion.div>
                        <motion.div className="py-1 flex items-center gap-3"
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                        >
                            {page == "contact"
                                ? <FaCircle />
                                : <FaRegCircle onClick={() => { setPage("contact") }} />
                            }
                            <motion.p variants={nav}>Contact</motion.p>
                        </motion.div>
                    </div>
                </div>
            </div> */}
        </>
    )
}