import { TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled, TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbHexagonLetterM  } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { motion } from "framer-motion"

/**
 * Modal
 */
export default function AbilityModal({ability, showModal, setShowModal}) {
    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return(
        <>
            {/* Modal */}
            {showModal ? (
                <>
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 outline-none focus:outline-none cursor-default">
                        <div className="relative w-4/5 xl:w-3/5 z-50 mt-32 lg:mt-0 mx-auto font-noto-sans text-center text-sm 2xl:text-base">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="p-4 lg:px-12 border-b border-solid rounded-t text-black">
                                    <div className="grid grid-cols-4 items-center"> 
                                        {/* Actions */}
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="relative flex-center"
                                        >
                                            {ability.actions == 1
                                                ? <TbHexagon1Filled className="text-5xl text-purple-400"/>
                                            : ability.actions == 2
                                                ? <TbHexagon2Filled className="text-5xl text-purple-400"/>
                                            :
                                                <TbHexagonFilled className="text-5xl text-purple-400"/>
                                            }
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeIn" }}
                                                className="absolute z-10 tooltip-xsm-b">
                                                
                                                {ability.actions == 1
                                                    ? <p>Requires 1 action</p>
                                                : ability.actions == 2
                                                    ? <p>Requires 2 actions</p>
                                                :
                                                    <p>Free Action/Interrupt</p>
                                                }
                                                
                                            </motion.span>
                                        </motion.div>
                                        {/* Name */}
                                        <h3 className="text-3xl text-center col-span-2 text-primary font-bold"> {ability.name} </h3>
                                        {/* Close button */}
                                        <button
                                            className="text-red-500 text-4xl justify-self-end"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                    <div className="flex-center gap-1 py-2 italic px-0 lg:px-36">
                                        {ability.desc}
                                    </div>
                                    <div className="flex-center gap-1">
                                        {ability.type.map(type => {
                                            return (
                                                <div key={type + ability} className="text-base bg-purple-400 text-white uppercase rounded-full p-1 w-1/2">
                                                    {type}
                                                </div>
                                            )
                                        })}    
                                    </div>
                                </div>
                                {/* body */}
                                <div className="p-4 px-12 flex flex-col text-black border-b border-solid">
                                    {/* Area */}
                                    {ability.area &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Area: </span>
                                            {ability.area}
                                        </div>
                                    }

                                    {/* Count */}
                                    {ability.count &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary italic">Interrupt {ability.count}</span>
                                        </div>
                                    }

                                    {/* Trigger */}
                                    {ability.trigger &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Trigger: </span>
                                            {ability.trigger}
                                        </div>
                                    }

                                    {/* Effects */}
                                    {ability.effects &&
                                        <div className="mb-2 flex flex-col gap-4">
                                            {ability.effects.map((effect, index)=> {
                                                return (
                                                    <div key={ability.name + effect.type + index} className="flex flex-col">
                                                        <div className="leading-relaxed text-start">
                                                            <span className="text-primary font-bold">{effect.type}: </span>
                                                            {effect.desc}
                                                            {effect.details &&
                                                                <div className="ml-6">
                                                                    {effect.details.map((detail, index) => {
                                                                        return (
                                                                            <p key={ability.name + detail + index}>
                                                                                {(detail)}
                                                                            </p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }

                                    {/* Objects */}
                                    {ability.object_info &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <div className="text-lg bg-primary text-white font-bold">{ability.object_info.name}</div>
                                            <p className="text-primary italic">Height {ability.object_info.height}</p>
                                            {(ability.object_info.desc)}
                                        </div>
                                    }

                                    {/* Add Interrupt */}
                                    {ability.interrupt &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <span className="bg-primary text-white font-bold text-lg">{ability.interrupt.name}</span>
                                            <p className="text-primary italic">Interrupt {ability.interrupt.count}</p>
                                            <p><span className="text-primary font-bold">Trigger:</span> {ability.interrupt.trigger}</p>
                                            {ability.interrupt.effects.map((effect, index) => {
                                                return (
                                                    <div key={effect + index}>
                                                        <div className="leading-relaxed text-start text-sm">
                                                            <span className="text-primary font-bold">{effect.type}: </span>
                                                            {(effect.desc)}
                                                            {effect.details &&
                                                                <div className="ml-6">
                                                                    {effect.details.map((detail, index) => {
                                                                        return (
                                                                            <p key={ability.name + detail + index}>
                                                                                {(detail)}
                                                                            </p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }
                                    
                                </div>
                                {/* talents */}
                                <div className="p-4 flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">talents</p>
                                    <div className="mb-4 text-black flex-center">
                                        <TbSquareRoundedNumber1Filled className="text-4xl text-purple-400 w-1/6 text-end"/>
                                        <p className="w-5/6 text-start">{ability.talent1}</p>
                                    </div>
                                    <div className="mb-2 text-black flex">
                                        <TbSquareRoundedNumber2Filled className="text-4xl text-purple-400 w-1/6 justify-self-end"/>
                                        <p className="w-5/6 text-start">{ability.talent2}</p>
                                    </div>
                                </div>
                                {/* mastery */}
                                <div className="p-4 hidden lg:flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">Mastery: {ability.mastery.name}</p>
                                    <div className="mb-2 text-black flex">
                                        <TbHexagonLetterM className="text-4xl text-primary w-1/6 justify-self-end text-purple-400"/>
                                        <div className="flex flex-col w-full gap-2">
                                            <p className="w-5/6 text-start">{(ability.mastery.desc)}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* tags*/}
                                <div className="p-4 px-8 hidden lg:flex-center flex-col text-white">
                                    <p className="font-bold uppercase text-primary mb-2">Tags:</p>
                                    <div className="flex-center flex-wrap gap-1 w-full">
                                        {ability.tags.map((item, index) => {
                                            return (
                                                <motion.div 
                                                    initial="initial"
                                                    animate="initial"
                                                    whileHover="animate"
                                                    key={item.name + index}
                                                    className="rounded-xl text-sm 2xl:text-lg bg-purple-400 px-4 py-2 drop-shadow w-1/5 cursor-pointer flex-center"
                                                >
                                                    <p>{item.name}</p>
                                                    <motion.span
                                                        variants={tooltip}
                                                        transition={{ duration: 0.1, ease: "easeIn" }}
                                                        className="absolute z-10 tooltip-3xl-t"
                                                    >
                                                        <p className="font-bold">{item.name}</p>
                                                        <p>{item.desc}</p>
                                                    </motion.span>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                </>
            ) : null}
        </>
    )
}