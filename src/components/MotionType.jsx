import { motion } from "framer-motion"

export default function Motion({textInput, speed}) {

    const charAnimation = {
        hidden: {
            opacity: 0,
            y: 5
        },
        shown: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <motion.div 
            className="flex flex-wrap"
        >
            {textInput.split(" ").map((word, idx) => (
                <motion.span 
                    key={idx}
                    initial="hidden"
                    animate="shown"
                    transition={{
                        delayChildren: idx * speed,
                        staggerChildren: 0.02,
                    }}
                    className="mr-1 flex"
                    aria-hidden
                >
                    {word.split("").map((char, idx) => (
                        <motion.span 
                            key={idx}
                            variants={charAnimation}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </motion.div>
        
    )
}