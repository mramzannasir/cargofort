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
      router.replace("slide5");
    }
    if (show1) {
      router.replace("slide5");
    }
    if (show2) {
      router.replace("slide5");
    }
    if (show3) {
      router.replace("slide5");
    }
  };

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
          <div className="w-full md:w-[70%] xl:w-[70%]">
            <h1 className=" text-darkBrown sub-title text-center">
              To measure your protection better, can you tell us what is the
              exact name of your cargo and whether it is new or used?
            </h1>
          </div>
          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] md:w-[60%] lg:w-[85%] flex-col gap-3 flex lg:flex-row  ">
              <input
                type="text"
                className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-5 bg-white border-none outline-none  h-full w-full "
                placeholder="Number of palletes..."
              />
              <input
                type="text"
                className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-5 bg-white border-none outline-none  h-full w-full "
                placeholder="Packages..."
              />
              <input
                type="text"
                className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-5 bg-white border-none outline-none  h-full w-full "
                placeholder="Parcells..."
              />
            </div>
          </div>
          <div className="flex sm:justify-between justify-center gap-3  md:mt-0  items-center w-[98%]  sm:w-[90%] xl:mt-5">
            <button
              onClick={() => router.push("slide5")}
              className={`flex gap-2 px-5 py-2 text-[#B67E4A] text-[16px] 
                 font-semibold justify-center items-center bg-backBrown  rounded-[40px]`}>
              <div className="">
                <MdNavigateBefore size={30} />
              </div>
              <div>Back</div>
            </button>
            <button
              onClick={() => router.push("slide8")}
              className={`flex gap-2 px-5 py-2 text-white text-[16px] ${
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
