/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";
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
          <img src="/logo.png" className="mx-auto" alt="" />
        </div>
        <motion.div
          variants={animationConfiguration}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          className=" card  contain relative flex-col justify-center items-center">
          <div className="w-full md:w-[70%] xl:w-[60%]">
            <h1 className=" text-darkBrown sub-title text-center">
              What do you want to protect/ insure today?
            </h1>
          </div>

          <div className="w-[95%] md:w-[70%] flex-col gap-3 flex  my-[30px] sm:my-[35px] lg:my-[30px]">
            <div className="w-full rounded-[40px]  outline-none border-none bg-white py-2 sm:py-3 4xl:py-3  flex items-center gap-3 justify-start px-5">
              <div
                onClick={() => setShow(1)}
                className={`relative bg-lightBrow cursor-pointer hover:bg-selectBrown ${
                  show === 1 ? "bg-selectBrown" : ""
                } h-[29px] w-[29px] sm:h-[30px] sm:w-[30px] rounded-full`}>
                <input
                  type="checkbox"
                  className="appearance-none  cursor-pointer    rounded-full"></input>
                {show === 1 && (
                  <div className="absolute top-1 sm:top-[3px] left-[1px] sm:left-[2px] text-white">
                    <FiCheck size={27} />
                  </div>
                )}
              </div>
              <div>
                <p className="text-darkBrown des">CARGO</p>
              </div>
            </div>
            <div className="w-full rounded-[40px] outline-none border-none bg-white py-2 sm:py-3 4xl:py-3 flex items-center gap-3 justify-start px-5">
              <div
                onClick={() => setShow(2)}
                className={`relative bg-lightBrow cursor-pointer hover:bg-selectBrown ${
                  show === 2 ? "bg-selectBrown" : ""
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
                <p className="text-darkBrown des">Carriage Liabilities</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full  md:mt-5">
            <button
              disabled={!show}
              onClick={() => router.replace("slide3")}
              className={`flex gap-2 px-5 py-2 text-white text-[16px] ${
                show ? "enabled" : ""
              }  font-semibold justify-center items-center bg-nextBrown rounded-[40px]`}>
              <div>Next</div>
              <div className="">
                <MdOutlineNavigateNext size={30} />
              </div>
            </button>
          </div>
          {/* position absolute  */}
          <div>
            <img
              src="/left-cloud.png"
              className="absolute top-6 -left-11 z-[-1]"
              alt=""
              srcset=""
            />
            <img
              src="/right-cloud.png"
              className="absolute top-6 -right-8 z-[-1]"
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
