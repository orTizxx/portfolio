import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const NavbarContent = ({ style }) => {
  return (
    <>
      <div className="hidden sm:inline  sm:font-caveat sm:font-black  sm:-tracking-wider sm:text-3xl">
        Ortizxx
      </div>
      <motion.div
        className="flex justify-between sm:w-[60vh] w-full  font-mono text-lg tracking-tighter border-none   rounded-full  px-2 py-1 "
        style={style}
      >
        <a href="#aboutMe" className="cursor-pointer">
          About
        </a>
        <a href="#skills" className="cursor-pointer">
          Skills
        </a>
        <a href="#projects" className="cursor-pointer">
          Projects
        </a>
        <a
          href="mailto:nasiruddinns08@gmail.com"
          className="inline sm:hidden h-7 w-7"
        >
          <img src="../../../public/assets/gmail.png" alt="" />
        </a>
      </motion.div>
      <div className="hidden  gap-2 items-center   sm:flex ">
        <a
          href="https://github.com/orTizxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="  h-13 w-13 "
            src="../../../public/assets/github.png"
            alt=""
          />
        </a>
        <a href="mailto:nasiruddinns08@gmail.com">
          <img
            className="  h-12 w-13 "
            src="../../../public/assets/gmail.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default NavbarContent;
