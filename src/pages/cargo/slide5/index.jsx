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
  const [go, setGo] = useState(false);
  const handleChange = (e) => {
    setShow(e.target.value);
    setGo(!go);
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
          transition={{ duration: 0.4 }}
          className=" card  contain relative flex-col justify-center items-center">
          <div className="w-full md:w-[70%] xl:w-[60%]">
            <h1 className=" text-darkBrown sub-title text-center">
              Do you recognize the type of your cargo in any of these
              categories?
            </h1>
          </div>

          <div className="my-[30px] sm:my-[35px] lg:my-[30px] w-[100%] flex justify-center items-center flex-col">
            <div className="w-[95%] md:w-[60%] lg:w-[85%]   text-darkBrown  ">
              <input
                type="text"
                value={show}
                onChange={handleChange}
                className="rounded-[40px] px-4 text-[16px] md:text-[18px] text py-5 bg-white border-none outline-none  h-full w-full "
                placeholder="Something Else/ Other"
              />
            </div>
          </div>
          <div className="flex sm:justify-between justify-center gap-3 mt-2 md:mt-0  items-center w-[98%]  sm:w-[90%] xl:mt-5">
            <button
              onClick={() => router.push("slide4")}
              className={`flex gap-2 px-5 py-2 text-[#B67E4A] text-[16px] 
                 font-semibold justify-center items-center bg-backBrown  rounded-[40px]`}>
              <div className="">
                <MdNavigateBefore size={30} />
              </div>
              <div>Back</div>
            </button>
            <button
              disabled={!go}
              onClick={() => router.push("slide6")}
              className={`flex gap-2 px-5 py-2 text-white text-[16px] font-semibold justify-center items-center bg-nextBrown rounded-[40px]`}>
              <div>Next</div>
              <div className="">
                <MdOutlineNavigateNext size={30} />
              </div>
            </button>
          </div>
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
          <div
            onClick={() => router.replace("slide3")}
            className="absolute top-[50%] hidden sm:block left-2 text-darkBrown cursor-pointer">
            <BsChevronLeft size={30} />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default index;
