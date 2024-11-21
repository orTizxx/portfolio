import { motion } from "framer-motion";
import { Projects } from "../sub/ProjectContent";
// eslint-disable-next-line react/prop-types
const Project = ({ style }) => {
  return (
    <motion.div
      id="projects"
      className="p-4  sm:p-8 md:p-12 lg:p-8 xl:p-20 flex flex-col items-center mb-16 sm:mb-24 lg:mb-32 mx-4 sm:mx-8 md:mx-12 lg:mx-16 "
    >
      <motion.div
        className="rounded-full w-32 sm:w-40 md:w-48 text-sm sm:text-lg lg:text-xl xl:text-2xl text-white text-center mb-8 sm:mb-12 lg:mb-16"
        style={style}
      >
        Projects
      </motion.div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4 sm:p-6  gap-4 sm:gap-6 lg:gap-8 ">
        {Projects.map((project, index) => {
          return (
            <motion.div
              className="bg-slate-400 m-2 h-64 overflow-clip text-justify rounded-lg "
              key={index}
              whileHover={{
                scale: 1.1,
                translateY: -10,
                height: "450px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {project.title ? (
                <motion.div className="flex p-3 sm:p-5 text-center h-2/5  justify-center items-center font-merriweather font-extrabold text-sm sm:text-base lg:text-lg">
                  {project.title}
                </motion.div>
              ) : null}
              {project.description ? (
                <motion.div
                  className="text-white tracking-tighter h-3/5 text-center p-3 sm:p-5 text-sm sm:text-lg lg:text-xl w-full overflow-clip"
                  style={style}
                >
                  {project.description}
                </motion.div>
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Project;
