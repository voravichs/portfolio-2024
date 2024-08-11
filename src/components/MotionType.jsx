import { motion } from "framer-motion"

export default function Motion({text, speed}) {

    const charAnimation = {
        hidden: {
            opacity: 0,
            y: 20
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
            {text.split(" ").map((word, idx) => (
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