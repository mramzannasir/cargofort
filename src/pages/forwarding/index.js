/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const index = () => {
    const router = useRouter();
    return (
        <>
            <main className="wrapper">
                <motion.div
                    variants={animationConfiguration}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                    onClick={() => router.replace("/forwarding/slide2")}
                    className=" card cursor-pointer contain relative flex-col justify-center items-center">
                    <div className="w-full lg:w-[80%]"> <h1 className=" text-darkBrown heading text-center">
                        {" "}
                        Carriage Liabilities
                        (Forwarding)
                    </h1></div>
                    <p className="text-darkBrown title">Question Flow</p>
                    <div>
                        <img
                            src="/left-cloud.png"
                            className="absolute top-6 -left-11 md:h-auto md:w-auto h-[2rem]  md:top-[8rem] md:-left-[6rem]  z-[-1]"
                            alt=""
                            srcset=""
                        />
                        <img
                            src="/right-cloud.png"
                            className="absolute top-6 md:top-4 md:h-auto md:w-auto h-[2rem] -right-8 z-[-1] md:-right-[10rem]"
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
