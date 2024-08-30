import { FaGithub, FaLink } from "react-icons/fa";
import paim from "../../assets/images/works/paim.png"

import { motion } from "framer-motion";

export default function GenshinTTV() {

    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full px-8 py-4 rounded-xl flex items-center gap-4">
            <div className="w-1/3 h-full flex-center">
                <img src={paim} className="max-h-full p-2 rounded border shadow-crispy"/>
            </div>
            
            <div className="w-2/3 h-full flex-center flex-col gap-2">
                <p className="font-bold text-center text-sm">Genshin Build Viewer</p>
                <p className="text-center text-xs xl:text-sm">Twitch extension with enka.gg integration</p>
                <div className="flex-center gap-4 w-full text-4xl lg:text-3xl text-purple-500">
                    <motion.a 
                        href="https://dashboard.twitch.tv/extensions/83yhi2ze70uoffr9bfbsndeev293ro-0.0.1"
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                        className="relative flex-center"
                    >
                        <FaLink className="opacity-70 hover:opacity-100"/>
                        <motion.span
                            variants={tooltip}
                            transition={{ duration: 0.1, ease: "easeIn" }}
                            className="absolute z-20 tooltip-sm-b"
                        >
                            <p className="font-bold">Link (still in beta)</p>
                        </motion.span>
                    </motion.a>
                    <a href="https://github.com/hitol1/genshin-ttv-build-viewer">
                        <FaGithub className="opacity-70 hover:opacity-100"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
