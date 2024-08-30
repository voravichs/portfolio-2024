import { motion } from "framer-motion";
export default function Gamer() {
   return (
      <div className="h-full w-full flex-center flex-col gap-2 pl-12 z-0">
         {/* Hello Text */}
         <h1 className="text-4xl font-light">Hello, I am an </h1>
         <h1 className="text-5xl text-center">Enjoyer of Storytelling</h1>
         {/* Divider Bar */}
         <motion.div 
               className="w-64 h-1 bg-black my-4"
               initial={{ x: 1000, opacity:0 }}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 0.1, type: "spring", bounce:0.25}}
         ></motion.div>
         {/* Body */}
         <div className="text-lg font-light w-1/2 text-center">
            I love indulging in a good story, whether it be reading one, watching one, or telling one. Some of my favorite video games either have grand and profound stories, like <span className="font-bold">Final Fantasy 14</span> and <span className="font-bold">Nier Automata</span>. Even bereft of explicit narrative hooks, I love "story generator" games like <span className="font-bold">Stellaris</span> and <span className="font-bold">Rimworld</span> where stories are created organically through semi-randomized interations. Among my favorite animated shows are <span className="font-bold">Made in Abyss</span> and <span className="font-bold">Sangatsu no Lion</span>, stories of people who must come to terms with horror and loss unimaginable. I genuinely love the thought and care that goes into stories, whether it be the historical inspirations that go into creating a lore for a world, to minute details like why character may dress a certain way due to color theory or personality.
         </div>
         <div className="text-lg font-light w-1/2 text-center">
            Discovering <span className="font-bold">tabletop role-playing games</span> like Dungeons and Dragons has been a boon for my love of storytelling. Occationally, I will get to indulge in various tabletop role-playing games with a group of old friends. While this group sticks to the tried-and-true Dungeons and Dragons, we seldom try other systems as well, such as Shadowdark, Fabula Ultima, and Lancer, to name a few. 
         </div>
         <div className="my-4 flex gap-2 z-30">
            <a href="https://ei-kon.vercel.app/" className="text-xl text-purple-400 hover:text-purple-600">
               Check out the character builder I developed for the TTRPG ICON!
            </a>
         </div>
      </div>
   )
}
