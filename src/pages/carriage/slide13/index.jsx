/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const index = () => {
  const router = useRouter();
  const [show, setShow] = useState("");
  const [go, setGo] = useState("");
  const handleChange = (e) => {
    setShow(e.target.value);
    };

  return (
    <>
      <main className="wrapper">
        <div className="absolute top-4 left-0 w-full">
          <img src="/Logo.png" className="mx-auto" alt="" />
        </div>
        <motion.div
          variants={animationConfiguration}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className=" card relative  contain  flex-col justify-center items-center">
          <div className="w-full relative">
            <img src="/cong.png" className="mx-auto" alt="" />

            {/* popup images */}
            <motion.div
              variants={animationConfiguration}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.6 }}>
              <img
                className="top-[1rem] left-[25%] md:left-[28%] lg:left-[33%] absolute"
                src="/l-star-1.png"
                alt=""
              />
              <img
                className="top-[4rem] left-5 md:left-[25%] lg:left-[30%] absolute"
                src="/l-star-2.png"
                alt=""
              />
              <img
                className="top-[7rem] left-[22%] md:left-[32%] lg:left-[37%] absolute"
                src="/l-star-3.png"
                alt=""
              />
              <img
                className="top-[9rem] left-[8%] md:left-[16%] lg:left-[30%] absolute"
                src="/l-star-4.png"
                alt=""
              />
              <img
                className="top-[3rem] left-[20%] md:left-[34%] lg:left-[39%] absolute"
                src="/l-star-6.png"
                alt=""
              />
            </motion.div>
            <motion.div
              variants={animationConfiguration}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.6 }}>
              <img
                className="top-[1rem] right-[25%] md:right-[28%] lg:right-[33%] absolute"
                src="/r-star-1.png"
                alt=""
              />
              <img
                className="top-[4rem] right-5 md:right-[25%] lg:right-[30%] absolute"
                src="/r-star-2.png"
                alt=""
              />
              <img
                className="top-[7rem] right-[22%] md:right-[32%] lg:right-[37%] absolute"
                src="/r-star-3.png"
                alt=""
              />
              <img
                className="top-[9rem] right-[8%] md:right-[16%] lg:right-[30%] absolute"
                src="/r-star-4.png"
                alt=""
              />
              <img
                className="top-[3rem] right-[20%] md:right-[34%] lg:right-[39%] absolute"
                src="/r-star-5.png"
                alt=""
              />
            </motion.div>
          </div>
          <div className="w-full md:w-[70%] xl:w-[60%]">
            <h1 className=" text-darkBrown text-[26px] font-black sm:text-[33px] md:text-[35px] lg:text-[38px] 2xl:text-[42px] 4xl:text-[47px] text-center">
              CONGRATULATIONS!
            </h1>
          </div>
          <div className="w-[80%] md:w-[40%] xl:w-[36%]">
            <h1 className=" text-darkBrown text-[18px] font-semibold sm:text-[20px] md:text-[22px]  text-center">
              Your Cargo price for full protections against all risks is
            </h1>
          </div>
          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] overflow-hidden md:w-[40%] lg:w-[42%] 2xl:w-[38%] rounded-[40px] border-[#FAAB43] border-[2px]  text-darkBrown flex bg-white  ">
              <input
                type="text"
                value={show}
                onChange={handleChange}
                className="rounded-[40px] w-full placeholder:text-darkBrown p px-4 text-[16px] text-darkBrown text-center md:text-[18px]  py-5 border-none outline-none  h-full  "
                placeholder="XX,XX EUR "
              />
              <div className="w-[40%] bg-[#FAAB43] cursor-pointer h-full flex justify-center items-center">
                Check out
              </div>
            </div>
          </div>
          <div>
            <img
              src="/left-cloud.png"
              className="absolute top-6 -left-11 md:h-auto md:w-auto h-[2rem]  md:top-[8rem] md:-left-[6rem]  z-[-1]"
              alt=""
              srcset=""
            />
            <img
              src="/right-cloud.png"
              className="absolute top-6 md:-top-1 md:h-auto md:w-auto h-[2rem] -right-8 z-[-1] md:-right-[10rem]"
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
