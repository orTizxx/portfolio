import { Cloud, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
// eslint-disable-next-line react/prop-types
export function Background({ children }) {
  const colors1 = ["#020617", "#1e2742", "#2a3a4e", "#1e2a39"];
  const colors2 = ["#1E67CE", "#1E67C6", "#CE84CE", "#DD335C"];

  const color1 = useMotionValue(colors1[0]);
  const color2 = useMotionValue(colors2[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,${color1} 50%,${color2} ) `;
  // const border = useMotionTemplate`1px solid ${color2} `;
  const boxShadow = useMotionTemplate`0px 0.5px 5px  ${color2}`;
  useEffect(() => {
    const color1Animation = animate(color1, colors1, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    });

    const color2Animation = animate(color2, colors2, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    });

    return () => {
      color1Animation.stop();
      color2Animation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors1, colors2]);
  return (
    <motion.div
      className="h-screen w-screen relative z-0 overflow-y-auto"
      style={{ backgroundImage }}
    >
      <div className="w-screen absolute z-2 h-screen">
        {/* <div className="bg-black h-screen w-screen">hi</div> */}

        <Canvas>
          <Stars
            radius={300}
            depth={10}
            count={2000}
            factor={10}
            saturation={1}
            fade
            speed={3}
          />
          <Cloud
            opacity={1}
            speed={0.4}
            width={150}
            depth={1.5}
            segments={15}
          />
        </Canvas>
      </div>

      <Navbar style={{ boxShadow, backgroundImage }} />
      <div className="bg-black/50 w-screen   absolute h-screen   z-3 overflow-x-clip overflow-y-auto">
        <div className="bg-none w-screen absolute h-full  z-100 ">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { style: { backgroundImage } })
          )}
        </div>
      </div>
    </motion.div>
  );
}
