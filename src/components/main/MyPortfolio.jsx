import HeroContent from "../sub/HeroContent";
import About from "./About";
import { Background } from "./Background";
import { Footer } from "./Footer";
import Project from "./Project";
import Skill from "./Skill";
// import { motion } from "framer-motion";

export const MyPortfolio = () => {
  return (
    <Background>
      <HeroContent />
      <About />
      <Skill />
      <Project />
      <Footer />
    </Background>
  );
};
