/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
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
          <div className="w-full md:w-[70%] xl:w-[60%]">
            <h1 className=" text-darkBrown sub-title text-center">
              Tell us a little bit <br className="hidden md:block" /> about your transport company...
            </h1>
          </div>
          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex flex-col justify-center items-center ">
            <div className="w-[95%] md:w-[40%] lg:w-[30%] flex-col gap-3 flex   ">
              <div className="w-full">
                <input
                  type="text"
                  className="rounded-[40px]  placeholder:text-darkBrown placeholder:opacity-50 px-4 text-[16px] md:text-[18px] text py-5 bg-white border-none outline-none  h-full w-full "
                  placeholder="Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="rounded-[40px]  placeholder:text-darkBrown placeholder:opacity-50 px-4 text-[16px] md:text-[18px] text py-5 bg-white border-none outline-none  h-full w-full "
                  placeholder="UIC/ VAT..."
                />
              </div>
            </div>

          </div>
          <div className="flex sm:justify-between justify-center gap-3 mt-2 md:mt-0  items-center w-[98%]  sm:w-[90%] xl:mt-5">
            <button
              onClick={() => router.push("slide2")}
              className={`flex gap-1 h-[3rem] w-[7rem] text-[#B67E4A] text-[16px] 
                 font-semibold justify-center items-center bg-backBrown  rounded-[40px]`}>
              <div className="">
                <MdNavigateBefore size={30} />
              </div>
              <div>Back</div>
            </button>
            <button
              onClick={() => router.replace("slide4")}
              className={`flex gap-1 h-[3rem] w-[7rem] text-white text-[16px]  font-semibold justify-center items-center bg-nextBrown rounded-[40px]`}>
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
            onClick={() => router.replace("slide4")}
            className="absolute top-[49%] right-2 text-darkBrown hidden md:block cursor-pointer">
            <BsChevronRight size={30} />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default index;
