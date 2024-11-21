import { motion, useAnimate } from "framer-motion";
import { Skills1, Skills2 } from "../sub/SkillContent";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Skill = ({ style }) => {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const hoverRef1 = useRef(null);
  const hoverRef2 = useRef(null);
  useEffect(() => {
    hoverRef1.current = animate1(
      scope1.current,
      { x: [100, -1100] },
      { duration: 7, repeat: Infinity, repeatDelay: 0, repeatType: "mirror" }
    );
    hoverRef2.current = animate2(
      scope2.current,
      { x: 100 },
      { duration: 4, repeat: Infinity, repeatDelay: 0, repeatType: "mirror" }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePause1 = () => hoverRef1.current.pause();
  const handleResume1 = () => hoverRef1.current.play();

  const handlePause2 = () => hoverRef2.current.pause();
  const handleResume2 = () => hoverRef2.current.play();
  return (
    <div className="flex flex-col items-center overflow-hidden mt-14 m-0">
      <motion.div
        className="rounded-full w-48 text-lg text-white text-center mb-16"
        style={style}
      >
        Skills
      </motion.div>

      <div className=" w-6/12 h-96 relative overflow-hidden mt-5">
        <motion.div
          onHoverStart={handlePause1}
          onHoverEnd={handleResume1}
          className="flex gap-8 absolute mb-4  "
          ref={scope1}
          //   initial={{ x: 100 }}
        >
          {[...Skills1, ...Skills1].map((skill, index) => (
            <motion.div
              key={index}
              className="w-20 h-20 p-2 flex flex-col items-center"
            >
              <div>
                <img className="w-16 h-16" src={skill.src} alt={skill.alt} />
              </div>
              <p className="text-white text-base">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          onHoverStart={handlePause2}
          onHoverEnd={handleResume2}
          className="flex gap-8 absolute inset-y-32"
          ref={scope2}
          initial={{ x: -300 }}
        >
          {[...Skills2, ...Skills2].map((skill, index) => (
            <motion.div
              key={index}
              className="w-20 h-20 p-2 flex flex-col items-center"
            >
              <div>
                <img className="w-16 h-16" src={skill.src} alt={skill.alt} />
              </div>
              <p className="text-white text-base">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
