/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { BsChevronUp } from "react-icons/bs";

import { BsChevronDown } from "react-icons/bs";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const index = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
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
          className=" card  contain relative flex-col justify-center items-center">
          <div className="w-full md:w-[70%] xl:w-[80%]">
            <h1 className=" text-darkBrown sub-title text-center">
              You&apos;ve almost arrived at destination Best Price, just tell us
              how much is your cargo worth:
            </h1>
          </div>
          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] md:w-[60%] lg:w-[85%]  flex-col gap-3 flex lg:flex-row  ">
              <input
                type="text"
                className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-4 bg-white border-none outline-none  h-full w-full "
                placeholder="Insert Cargo value as per commercial invoice..."
              />
              <div className="w-full lg:w-[45%]">
                <div className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-4 bg-white border-none outline-none  h-full w-full flex justify-between items-center relative">
                  <div className="sub text-darkBrown">Choose Currency</div>
                  <div
                    onClick={() => setShow(!show)}
                    className="cursor-pointer">
                    {show ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {show && (
                    <div className="absolute w-[90%] top-8 mx-auto pt-4 left-4 rounded-b-xl overflow-hidden ">
                      <motion.div
                        variants={animationConfiguration}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex w-full justify-center mx-auto  bg-[#ffffffab] items-center flex-col">
                        <div className="w-full bg-lightBrow text-darkBrown text-center cursor-pointer">
                          EUR
                        </div>
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer my-1">
                          USD
                        </div>{" "}
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer">
                          GBP
                        </div>
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer">
                          BGN
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:justify-between justify-center gap-3  md:mt-0  items-center w-[98%]  sm:w-[90%] xl:mt-5">
            <button
              onClick={() => router.push("slide8")}
              className={`flex gap-1 h-[3rem] w-[7rem] text-[#B67E4A] text-[16px] 
                 font-semibold justify-center items-center bg-backBrown  rounded-[40px]`}>
              <div className="">
                <MdNavigateBefore size={30} />
              </div>
              <div>Back</div>
            </button>
            <button
              onClick={() => router.push("slide10")}
              className={`flex gap-1 h-[3rem] w-[7rem] text-white text-[16px] ${
                show ? "enabled" : ""
              }  font-semibold justify-center items-center bg-nextBrown rounded-[40px]`}>
              <div>Next</div>
              <div className="">
                <MdOutlineNavigateNext size={30} />
              </div>
            </button>
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
