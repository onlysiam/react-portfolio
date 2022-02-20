import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 546 854"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{
          pathLength: 0,
          pathOffset: 0,
        }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 3 }}
        d="M544 3C329 138 -30.5 407 251.5 403C533.5 399 203 700.333 2.5 851.5"
        stroke="#60C4C4"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`;
export default Wave;
