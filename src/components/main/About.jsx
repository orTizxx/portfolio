import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const About = ({ style }) => {
  return (
    <div className="flex flex-col items-center md:px-14 lg:px-24 xl:px-28 px-9 mb-10">
      <motion.div
        className="rounded-full w-48 text-white text-center text-lg "
        style={style}
      >
        About
      </motion.div>

      <div className="md:text-white text-black text-center font-merriweather text-sm lg:text-base xl:text-xl font-light lg:font-normal md:tracking-tighter -tracking-widest md:p-16 p-2 md:bg-transparent bg-white/60 mt-1 rounded-md md:backdrop-blur-none backdrop-blur-lg mb-6">
        <motion.p>
          I am a passionate B.Tech student in Computer Science and Engineering,
          currently honing my skills in full-stack development. I specialize in
          designing and building functional and efficient web applications.
        </motion.p>
        <br />
        <motion.p>
          Throughout my journey, I have completed impactful internships as a
          Full-Stack Developer Intern at Devtown and as an iOS Application
          Designer Intern at M/s Ritch Media & Co. My technical expertise is
          complemented by a track record of many successful projects,
        </motion.p>
        <br />
        <motion.p>
          I thrive in leveraging my problem-solving skills and technical
          knowledge to bring innovative ideas to life, consistently focusing on
          delivering seamless user experiences. Let&apos;s connect to explore
          new opportunities and bring creative solutions to complex challenges!
        </motion.p>
        <br />
      </div>
    </div>
  );
};

export default About;
