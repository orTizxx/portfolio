import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const HeroContent = ({ style }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4  md:p-8 xl:px-28 md:px-10 lg:px-24">
      <motion.div className="w-full md:w-7/12 flex flex-col justify-center gap-4">
        <motion.span className="flex items-center gap-2">
          <motion.img
            src="../../../public/assets/wave.png"
            initial={{ rotate: 0 }}
            animate={{ rotate: 60 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.7,
            }}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <h1 className="text-white font-poppins text-base font-bold tracking-tight md:text-2xl lg:text-4xl lg:tracking-tighter">
            I&apos;m Mohd Nasir Shah
          </h1>
        </motion.span>

        <motion.span
          style={style}
          className="flex items-center justify-between w-56 md:w-2/3 xl:w-1/2 bg-white/10 border-gray-600 border-[1px] rounded-3xl px-2 py-2 md:py-2"
        >
          <img
            src="../../../public/assets/location.png"
            alt="Location"
            className="w-5 h-5 md:w-7 md:h-7"
          />
          <p className="text-white font-roboto text-sm md:text-sm lg:text-xl font-medium">
            Manipur, India
          </p>
          <img
            src="../../../public/assets/india.png"
            alt="India"
            className="w-5 h-5 md:w-7 md:h-7"
          />
        </motion.span>

        <motion.span>
          <p className="text-white font-merriweather text-sm lg:text-base xl:text-xl font-light lg:font-normal tracking-tighter">
            I build clean, functional, and visually appealing websites.
            Let&apos;s work together to bring your ideas to life.
          </p>
        </motion.span>
      </motion.div>

      <motion.div
        className="w-full md:w-5/12 min-w-68 flex justify-center mt-8 md:mt-0"
        initial={{ x: "50vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
        }}
      >
        <img
          className="w-full max-w-xs md:min-w-full min-h-96 object-contain"
          src="../../../public/assets/mainIconsdark.svg"
          alt="Tech Stack"
        />
      </motion.div>
    </div>
  );
};

export default HeroContent;
