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
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputValue2, setInputValue2] = useState("");
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
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
          className=" card  contain  flex-col justify-center items-center">
          <div className="w-full md:w-[70%] xl:w-[80%]">
            <h1 className=" text-darkBrown sub-title text-center">
              Which email shall we use for that offer?
            </h1>
          </div>
          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] md:w-[60%] lg:w-[45%] flex-col flex ">
              <input
                value={inputValue}
                onChange={handleInputChange}
                type="email"
                className="rounded-[40px] placeholder:text-darkBrown placeholder:opacity-50 px-4 text-[16px] md:text-[18px] text-darkBrown border-darkBrown border-[1.5px]  bg-white outline-none py-3 w-full"
                placeholder="E-mail"
              />
            </div>
            <div className="w-[95%] md:w-[60%] lg:w-[45%] flex-col flex mt-4 md:mt-6 relative ">
              <div className="w-full flex justify-between items-center bg-white px-4 rounded-[40px] py-3 ">
                <input
                  value={inputValue2}
                  onChange={handleInputChange2}
                  className="sub text-darkBrown placeholder:text-darkBrown placeholder:opacity-50 outline-none border-none w-full"
                  placeholder="Name of Company"></input>
                <div>
                  <img src="/info.png" alt="" />
                </div>
              </div>
              <p className="sub  text-darkBrown px-4 xl:hidden">
                Enter the name of your company if you wish to earn bonuses,
                rewards and special prices
              </p>
              <p className="sub w-[280px] hidden xl:block absolute text-darkBrown px-4 -top-[1rem] -right-[17rem]">
                Enter the name of your company if you wish to earn bonuses,
                rewards and special prices
              </p>
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
              disabled={inputValue <= 0 || inputValue2 <= 0}
              onClick={() => router.push("Slide11")}
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
