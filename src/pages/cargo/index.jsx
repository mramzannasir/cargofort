/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const index = () => {
  const router = useRouter();
  return (
    <>
      <main className="wrapper">
        <motion.div
          variants={animationConfiguration}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          onClick={() => router.replace("/cargo/slide2")}
          className=" card cursor-pointer contain relative flex-col justify-center items-center">
          <h1 className=" text-darkBrown heading text-center">Cargo</h1>
          <p className="text-darkBrown title">Question Flow</p>
          <div>
            <img
              src="/left-cloud.png"
              className="absolute top-6 -left-11 md:top-[8rem] md:-left-[7rem] lg:-left-[9rem] z-[-1]"
              alt=""
              srcset=""
            />
            <img
              src="/right-cloud.png"
              className="absolute top-6 md:top-4 -right-8 z-[-1] md:-right-[10rem]"
              alt=""
              srcset=""
            />
          </div>
        </motion.div>
      </main>
    </>
  );
};
export default index;
