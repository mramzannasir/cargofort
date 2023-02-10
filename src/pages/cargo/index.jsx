/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  return (
    <>
      <main className="wrapper">
        <div
          onClick={() => router.replace("/cargo/slide2")}
          className=" card cursor-pointer contain relative flex-col justify-center items-center">
          <h1 className=" text-darkBrown heading text-center">Cargo</h1>
          <p className="text-darkBrown title">Question Flow</p>
          <div>
            <img
              src="left-cloud.png"
              className="absolute top-6 -left-11 z-[-1]"
              alt=""
              srcset=""
            />
            <img
              src="right-cloud.png"
              className="absolute top-6 -right-8 z-[-1]"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default index;
