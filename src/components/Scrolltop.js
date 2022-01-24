import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Scrolltop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};
export default Scrolltop;
