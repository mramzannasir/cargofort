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
          <div className="w-full md:w-[70%] xl:w-[70%]">
            <h1 className=" text-darkBrown sub-title text-center">
              What Regions do you cover?
            </h1>
          </div>
          <div className="my-[15px] xl:my-[30px] 2xl:my-[45px] w-full flex justify-between items-center flex-col">
            <div className="w-[95%] md:w-[60%] lg:w-[85%] flex-col gap-3 flex lg:flex-row  ">
              <div className="w-full rounded-[40px]  outline-none border-none bg-white py-2 sm:py-3 4xl:py-3  flex items-center gap-3 justify-start px-5">
                <div
                  onClick={() => setShow(1)}
                  className={`relative bg-lightBrow cursor-pointer hover:bg-selectBrown ${show === 1 ? "bg-selectBrown" : ""
                    } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                  <input
                    type="checkbox"
                    className="appearance-none  cursor-pointer rounded-full"></input>
                  {show === 1 && (
                    <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                      <FiCheck size={27} />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-darkBrown des">Rest of World</p>
                </div>
              </div>
              <div className="w-full rounded-[40px]  outline-none border-none bg-white py-2 sm:py-3 4xl:py-3  flex items-center gap-3 justify-start px-5">
                <div
                  onClick={() => setShow(2)}
                  className={`relative bg-lightBrow cursor-pointer hover:bg-selectBrown ${show === 2 ? "bg-selectBrown" : ""
                    } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                  <input
                    type="checkbox"
                    className="appearance-none  cursor-pointer    rounded-full"></input>
                  {show === 2 && (
                    <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                      <FiCheck size={27} />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-darkBrown des">Worldwide</p>
                </div>
              </div>
              <div className="w-full rounded-[40px] outline-none border-none bg-white py-2 sm:py-3 4xl:py-3  flex items-center gap-3 justify-start px-5">
                <div
                  onClick={() => setShow(3)}
                  className={`relative  bg-lightBrow cursor-pointer hover:bg-selectBrown ${show === 3 ? "bg-selectBrown" : ""
                    } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                  <input
                    type="checkbox"
                    className="appearance-none  cursor-pointer    rounded-full"></input>
                  {show === 3 && (
                    <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                      <FiCheck size={27} />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-darkBrown des">Asia</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center flex-col mt-3">
              <div className="w-[95%] md:w-[60%] lg:w-[85%] flex-col items-stretch justify-center gap-3 flex lg:flex-row">
                <div className="w-full rounded-[40px] outline-none border-none bg-white py-2 sm:py-3 4xl:py-3  flex items-center gap-2 justify-start px-5">
                  <div
                    onClick={() => setShow(4)}
                    className={`relative  bg-lightBrow cursor-pointer hover:bg-selectBrown ${show === 4 ? "bg-selectBrown" : ""
                      } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                    <input
                      type="checkbox"
                      className="appearance-none  cursor-pointer    rounded-full"></input>
                    {show === 4 && (
                      <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                        <FiCheck size={27} />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-darkBrown des">European Union
                      (without India)</p>
                  </div>
                </div>
                <div className="w-full flex-col flex relative ">
                  <div className="w-full flex justify-between items-center bg-white px-4 rounded-[40px] py-3 ">
                    <input
                      className="sub text-darkBrown outline-none placeholder:text-darkBrown placeholder:opacity-50 border-none w-full"
                      placeholder=" Input other countries here..."></input>
                    <div>
                      <img src="/info.png" alt="" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm  absolute text-darkBrown px-4 top-[3.2rem]">
                    Enter the name of your company if you wish to earn bonuses,
                    rewards and special prices
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:justify-between justify-center gap-3 mt-[6rem]  md:mt-[4rem]  items-center w-[98%]  sm:w-[90%] ">
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
              className={`flex gap-1 h-[3rem] w-[7rem] text-white text-[16px] ${show ? "enabled" : ""
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
