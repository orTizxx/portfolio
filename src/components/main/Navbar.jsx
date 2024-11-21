import NavbarContent from "../sub/NavbarContent";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Navbar = ({ style }) => {
  return (
    <motion.div className="w-full h-14 z-10 fixed sm:top-0 bottom-0  shadow-[#2A0E61]/50 px-0  sm:px-20  flex  justify-between items-center text-white">
      <NavbarContent style={style} />
    </motion.div>
  );
};

export default Navbar;
