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
              That&lsquo;s awesome! <br className="hidden md:block" />
              Would you care to tell
              us their types?
            </h1>
          </div>
          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] md:w-[50%] lg:w-[60%]  flex-col gap-3 flex lg:flex-row  ">
              <input
                type="text"
                className="rounded-[40px] text-darkBrown  px-4 placeholder:text-darkBrown placeholder:opacity-50 text-[16px] md:text-[18px] text py-4 bg-white border-none outline-none  h-full w-full lg:w-[30%]"
                placeholder="Number of trucks..."
              />
              <div className="w-full lg:w-[60%]">
                <div className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-4 bg-white border-none outline-none  h-full w-full flex justify-between items-center relative">
                  <div className="sub w-full text-darkBrown text-center">Choose type of trucks</div>
                  <div
                    onClick={() => setShow(!show)}
                    className="cursor-pointer">
                    {show ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {show && (
                    <div className="absolute w-[90%] top-10 mx-auto pt-4 left-4 rounded-b-xl overflow-hidden ">
                      <motion.div
                        variants={animationConfiguration}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex w-full justify-center mx-auto  bg-[#ffffffab] items-center flex-col">
                        <div className="w-full bg-lightBrow text-darkBrown text-center cursor-pointer">
                          Standard
                          trucks with Tarpaulin
                          Trailers
                        </div>
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer my-1">
                          Frigo Trucks
                        </div>{" "}
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer">
                          Solo Trucks
                        </div>
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer">
                          Road Trains
                        </div>
                        <div className="w-full hover:bg-lightBrow text-darkBrown text-center cursor-pointer">
                          Vans up to 3.5 tons
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
              onClick={() => router.push("slide5")}
              className={`flex gap-1 h-[3rem] w-[7rem] text-[#B67E4A] text-[16px] 
                 font-semibold justify-center items-center bg-backBrown  rounded-[40px]`}>
              <div className="">
                <MdNavigateBefore size={30} />
              </div>
              <div>Back</div>
            </button>
            <button
              onClick={() => router.push("slide7")}
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
