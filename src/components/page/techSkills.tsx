import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faAws,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faMobile,
  faPalette,
  faDesktop,
  faPaintBrush,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Badge } from '../ui/badge';
interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    icon: <FontAwesomeIcon icon={faReact} size="3x" />,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />,
  },

  {
    id: 'docker',
    name: 'Docker',
    icon: <FontAwesomeIcon icon={faDocker} size="3x" />,
  },
];

export default function TechSkills() {
  return (
    <>
      <header className="mb-6 h-1/2 text-center">
        <h2 className="h2-responsive mb-4">Skills & Tools</h2>
        <p className="mb-12 text-white/60">
          For those who know what they're looking for...
        </p>
      </header>
      <ul className="flex flex-wrap items-center justify-center">
        {skills.map((skill) => (
          <li className="m-2 flex flex-col items-center justify-center rounded-lg p-4">
            <div className="">{skill.icon}</div>
            <Badge
              variant="secondary"
              className="border-0 bg-transparent text-sm font-medium text-white transition-colors duration-300 group-hover:text-blue-300"
            >
              {skill.name}
            </Badge>
          </li>
        ))}
      </ul>
    </>
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-16">
    //   <div className="mx-auto max-w-6xl">
    //     {/* Header */}
    //     <div className="mb-16 text-center">
    //       <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
    //         Skills & Tools
    //       </h1>
    //       <p className="mb-12 text-xl text-gray-400">
    //         For those who know what they're looking for..
    //       </p>

    //       {/* Category Toggle */}
    //       <div className="inline-flex rounded-full border border-gray-700/50 bg-gray-800/50 p-1 backdrop-blur-sm">
    //         <Button
    //           variant="ghost"
    //           onClick={() => setActiveCategory('tech')}
    //           className={`rounded-full px-8 py-3 font-medium transition-all duration-300 hover:bg-transparent ${
    //             activeCategory === 'tech'
    //               ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
    //               : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
    //           }`}
    //         >
    //           Tech
    //         </Button>
    //         <Button
    //           variant="ghost"
    //           onClick={() => setActiveCategory('design')}
    //           className={`rounded-full px-8 py-3 font-medium transition-all duration-300 hover:bg-transparent ${
    //             activeCategory === 'design'
    //               ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500'
    //               : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
    //           }`}
    //         >
    //           Design
    //         </Button>
    //       </div>
    //     </div>

    //     {/* Skills Grid */}
    //     <motion.div
    //       className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    //       initial="hidden"
    //       animate="visible"
    //       variants={{
    //         hidden: { opacity: 0 },
    //         visible: {
    //           opacity: 1,
    //           transition: {
    //             staggerChildren: 0.1,
    //           },
    //         },
    //       }}
    //     >
    //       {filteredSkills.map((skill, index) => (
    //         <motion.div
    //           key={skill.id}
    //           variants={{
    //             hidden: { opacity: 0, y: 30 },
    //             visible: { opacity: 1, y: 0 },
    //           }}
    //           whileHover={{
    //             scale: 1.05,
    //             transition: { duration: 0.2 },
    //           }}
    //           whileTap={{ scale: 0.95 }}
    //         >
    //           <Card className="group relative cursor-pointer border-gray-700/50 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10">
    //             <CardContent className="relative flex h-full flex-col items-center justify-center p-6">
    //               {/* Gradient Background */}
    //               <motion.div
    //                 className={`absolute inset-0 bg-gradient-to-br ${skill.} rounded-lg`}
    //                 initial={{ opacity: 0 }}
    //                 whileHover={{ opacity: 0.1 }}
    //                 transition={{ duration: 0.3 }}
    //               />

    //               {/* Icon Container */}
    //               <motion.div
    //                 className={`relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${skill.} text-white shadow-lg`}
    //                 whileHover={{ rotate: 5 }}
    //                 transition={{ duration: 0.2 }}
    //               >
    //                 {skill.icon}
    //               </motion.div>

    //               {/* Skill Name */}
    //               <Badge
    //                 variant="secondary"
    //                 className="border-0 bg-transparent text-sm font-medium text-white transition-colors duration-300 group-hover:text-blue-300"
    //               >
    //                 {skill.name}
    //               </Badge>

    //               {/* Hover Effect Overlay */}
    //               <motion.div
    //                 className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5"
    //                 initial={{ opacity: 0 }}
    //                 whileHover={{ opacity: 1 }}
    //                 transition={{ duration: 0.3 }}
    //               />
    //             </CardContent>
    //           </Card>
    //         </motion.div>
    //       ))}
    //     </motion.div>

    //     {/* Bottom Stats */}
    //     <motion.div
    //       className="mt-20 grid grid-cols-1 gap-8 text-center md:grid-cols-3"
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.8, duration: 0.6 }}
    //     >
    //       <motion.div
    //         whileHover={{ scale: 1.05 }}
    //         transition={{ duration: 0.2 }}
    //       >
    //         <Card className="border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
    //           <CardContent className="p-6">
    //             <motion.div
    //               className="mb-2 text-3xl font-bold text-blue-400"
    //               initial={{ scale: 0 }}
    //               animate={{ scale: 1 }}
    //               transition={{ delay: 1, duration: 0.5, type: 'spring' }}
    //             >
    //               5+
    //             </motion.div>
    //             <div className="text-gray-400">Years Experience</div>
    //           </CardContent>
    //         </Card>
    //       </motion.div>
    //       <motion.div
    //         whileHover={{ scale: 1.05 }}
    //         transition={{ duration: 0.2 }}
    //       >
    //         <Card className="border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
    //           <CardContent className="p-6">
    //             <motion.div
    //               className="mb-2 text-3xl font-bold text-green-400"
    //               initial={{ scale: 0 }}
    //               animate={{ scale: 1 }}
    //               transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
    //             >
    //               50+
    //             </motion.div>
    //             <div className="text-gray-400">Projects Completed</div>
    //           </CardContent>
    //         </Card>
    //       </motion.div>
    //       <motion.div
    //         whileHover={{ scale: 1.05 }}
    //         transition={{ duration: 0.2 }}
    //       >
    //         <Card className="border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
    //           <CardContent className="p-6">
    //             <motion.div
    //               className="mb-2 text-3xl font-bold text-purple-400"
    //               initial={{ scale: 0 }}
    //               animate={{ scale: 1 }}
    //               transition={{ delay: 1.4, duration: 0.5, type: 'spring' }}
    //             >
    //               15+
    //             </motion.div>
    //             <div className="text-gray-400">Technologies Mastered</div>
    //           </CardContent>
    //         </Card>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </div>
  );
}
