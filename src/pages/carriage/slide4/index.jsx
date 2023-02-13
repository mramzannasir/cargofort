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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const nextClick = () => {
    if (show) {
      router.replace('slide5')
    }
    if (show1) {
      router.replace('slide5')
    }
    if (show2) {
      router.replace('slide5')
    }
    if (show3) {
      router.replace('slide5')
    }
  }

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
          <div className="w-full md:w-[70%] xl:w-[60%]">
            <h1 className=" text-darkBrown sub-title text-center">
              Which parts of logistics
              do you cover?
            </h1>
          </div>

          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] md:w-[60%] lg:w-[85%] flex-col gap-3 flex  ">
              <div className="w-full rounded-[40px]  outline-none border-none bg-white py-2 sm:py-3 4xl:py-3  flex items-center gap-3 justify-start px-5">
                <div
                  onClick={() => setShow(!show)}
                  className={`relative bg-lightBrow cursor-pointer hover:bg-selectBrown ${show ? "bg-selectBrown" : ""
                    } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                  <input
                    type="checkbox"
                    className="appearance-none  cursor-pointer    rounded-full"></input>
                  {show && (
                    <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                      <FiCheck size={27} />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-darkBrown des">Carriage</p>
                </div>
              </div>
              <div className="w-full rounded-[40px] outline-none border-none bg-white py-2 sm:py-3 4xl:py-3 flex items-center gap-3 justify-start px-5">
                <div
                  onClick={() => setShow1(!show1)}
                  className={`relative bg-lightBrow cursor-pointer hover:bg-selectBrown ${show1 ? "bg-selectBrown" : ""
                    } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                  <input
                    type="checkbox"
                    className="appearance-none  cursor-pointer    rounded-full"></input>
                  {show1 && (
                    <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                      <FiCheck size={27} />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-darkBrown des">
                  Forwarding
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="flex sm:justify-between justify-center gap-3 mt-2 md:mt-0  items-center w-[98%]  sm:w-[90%] xl:mt-5">
            <button
              onClick={() => router.push("slide2")}
              className={`flex  gap-1 h-[3rem] w-[7rem] text-[#B67E4A] text-[16px] 
                 font-semibold justify-center items-center bg-backBrown  rounded-[40px]`}>
              <div className="">
                <MdNavigateBefore size={30} />
              </div>
              <div>Back</div>
            </button>
            <button
              onClick={nextClick}
              className={`flex  gap-1 h-[3rem] w-[7rem] text-white text-[16px] ${show ? "enabled" : ""
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
          <div
            onClick={() => router.replace("slide5")}
            className="absolute top-[49%] hidden md:block right-2 text-darkBrown cursor-pointer">
            <BsChevronRight size={30} />
          </div>

          <div
            onClick={() => router.replace("slide3")}
            className="absolute top-[49%] hidden md:block left-2 text-darkBrown cursor-pointer">
            <BsChevronLeft size={30} />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default index;
