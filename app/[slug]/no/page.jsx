"use client";
import { useParams } from "next/navigation";
import React, { use, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import Incrementer from "../../../components/Incrementer";
import { Variants } from "motion/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const page = () => {
  const [wvalue, setWValue] = useState(0);
  const [hvalue, setHValue] = useState(0);
  const [avalue, setAValue] = useState(0);
  const [clickedm, setClickedm] = useState(true);
  const [clickedf, setClickedf] = useState(false);
  const [light, setLight] = useState(false);
  const [moderate, setModerate] = useState(false);
  const [heavy, setHeavy] = useState(false);
  const [veryActive, setveryActive] = useState(false);
  let pa;
  const router = useRouter();
  const location = usePathname();

  const params = useParams();
  const { slug } = params;
  const calculateCal = (w, h, a, pa, gender) => {
    let BMI = w / h ** 2;
    if (BMI > 30) {
      let idealW;
      let AdBW;
      let REE;
      let TEE;
      if (gender === "male") {
        idealW = (h - 152) * 1.1 + 48;
        AdBW = (w - idealW) * 32 + idealW;
        REE = w * 10 + 6.25 * h - 5 * a + 5;
      } else if (gender === "female") {
        idealW = (h - 152) * 0.9 + 45;
        AdBW = (w - idealW) * 38 + idealW;
        REE = w * 10 + 6.25 * h - 5 * a - 161;
        TEE = REE * pa;
      }
      return TEE;
    } else {
      let REE;
      let TEE;
      if (gender === "male") {
        REE = w * 10 + 6.25 * h - 5 * a + 5;
        TEE = REE * pa;
      } else if (gender === "female") {
        REE = w * 10 + 6.25 * h - 5 * a - 161;
        TEE = REE * pa;
      }
      return TEE;
    }
  };
  const handleSubmit = () => {
    let gender = clickedm ? "male" : "female";
    if (light) {
      pa = 1;
    } else if (moderate) {
      if (gender === "male") {
        pa = 1.11;
      } else if (gender === "female") {
        pa = 1.12;
      }
    } else if (heavy) {
      if (gender === "male") {
        pa = 1.25;
      } else if (gender === "female") {
        pa = 1.27;
      }
    } else if (veryActive) {
      if (gender === "male") {
        pa = 1.48;
      } else if (gender === "female") {
        pa = 1.45;
      }
    }
    let cal = calculateCal(
      wvalue,
      hvalue,
      avalue,
      pa,
      clickedm ? "male" : "female"
    );
    if (wvalue != "" && hvalue != "" && avalue != "" && pa != "") {
      router.push(location + `/${cal}`);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center  gap-28 w-full lg:h-[85rem] h-[92rem] ">
        <motion.div
          value={"weight-loss"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center gap-40 w-full "
        >
          <h3 className="text-white sm:text-[4rem] font-bold mt-14 text-[2rem]">
            Please fill this inputs
          </h3>
          <motion.div
            value={"weight-loss"}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 2.4 }}
            viewport={{ amount: "some" }}
            className="flex flex-col items-center w-full mb-48"
          >
            <motion.div
              value={"weight-loss"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              className=" flex flex-wrap justify-around items-center gap-16 xl:flex-row xl:items-center xl:justify-around w-full lg:flex-wrap lg:items-center lg:justify-center lg:gap-5"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.6 }}
                className="flex flex-col items-center"
              >
                <label className="block text-2xl font-semibold text-white mb-4">
                  Gender
                </label>
                <motion.div className="flex  gap-12 mt-2">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    onClick={() => {
                      setClickedf((clickedf) => !clickedf);
                      if (clickedm) {
                        setClickedm((clickedm) => !clickedm);
                      }
                    }}
                    className={
                      !clickedf
                        ? "opt w-32 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl`"
                        : "opt w-32 flex-col gap-1 flex cursor-pointer bg-[#ff69b4] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl`"
                    }
                  >
                    <h5 className="text-white text-[1.5rem] font-bold">
                      Female
                    </h5>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    onClick={() => {
                      setClickedm((clickedm) => !clickedm);
                      if (clickedf) {
                        setClickedf((clickedf) => !clickedf);
                      }
                    }}
                    className={
                      !clickedm
                        ? "opt w-32 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl text-[#00008b]`"
                        : "opt w-32 flex-col gap-1 flex cursor-pointer bg-[#00008b] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl`"
                    }
                  >
                    <h5 className="text-white text-[1.5rem] font-bold">Male</h5>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.7 }}
                className="flex flex-col items-center"
              >
                <label className="block text-2xl font-semibold text-white mb-4">
                  Weight
                </label>
                <Incrementer setValue={setWValue} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.8 }}
                className="flex flex-col items-center"
              >
                <label className="block text-2xl font-semibold text-white mb-4">
                  Height
                </label>
                <Incrementer setValue={setHValue} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.9 }}
                className="flex flex-col items-center lg:ml-5 xl:ml-0"
              >
                <label className="block text-2xl font-semibold text-white mb-4 ">
                  Age
                </label>
                <Incrementer setValue={setAValue} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col items-center w-full">
          <motion.div
            viewport={{ amount: "all" }}
            className="flex flex-col items-center gap-8"
          >
            <label className="block lg:text-5xl font-semibold text-white mb-4 text-3xl text-center">
              What's your physical activity level ?
            </label>
            <motion.div className="flex gap-2 mt-2 box-style flex-wrap justify-center lg:gap-12">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visibale: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.1 }}
                viewport={{ amount: "some" }}
                className={light ? "a-active" : "a"}
                onClick={() => {
                  setLight((light) => !light);
                  setHeavy(false);
                  setModerate(false);
                  setveryActive(false);
                }}
              >
                <h5 className="text-white text-[1.2rem] lg:text-[1.5rem] font-bold">
                  Sedentary
                </h5>
                <p className="text-white text-[0.8rem] lg:text-[1rem] font-bold">
                  1-2 days / week
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  opacity: 1,
                  y: 0,
                }}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visibale: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.1 }}
                viewport={{ amount: "some" }}
                className={moderate ? "a-active" : "a"}
                onClick={() => {
                  setModerate((moderate) => !moderate);
                  setHeavy(false);
                  setLight(false);
                  setveryActive(false);
                }}
              >
                <h5 className="text-white text-[1.2rem] lg:text-[1.5rem] font-bold">
                  Low Active
                </h5>
                <p className="text-white text-[0.8rem] lg:text-[1rem] font-bold">
                  3-4 days / week
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  opacity: 1,
                  y: 0,
                }}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visibale: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.1 }}
                viewport={{ amount: "some" }}
                className={heavy ? "a-active" : "a"}
                onClick={() => {
                  setHeavy((heavy) => !heavy);
                  setModerate(false);
                  setLight(false);
                  setveryActive(false);
                }}
              >
                <h5 className="text-white text-[1.2rem] lg:text-[1.5rem] font-bold">
                  Active
                </h5>
                <p className="text-white text-[0.8rem] lg:text-[1rem] font-bold">
                  5-6 days / week
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  opacity: 1,
                  y: 0,
                }}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visibale: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.1 }}
                viewport={{ amount: "some" }}
                className={veryActive ? "a-active" : "a"}
                onClick={() => {
                  setveryActive((veryActive) => !veryActive);
                  setHeavy(false);
                  setModerate(false);
                  setLight(false);
                }}
              >
                <h5 className="text-white text-[1.2rem] lg:text-[1.5rem] font-bold">
                  Very Active
                </h5>
                <p className="text-white text-[0.8rem] lg:text-[1rem] font-bold">
                  5-6 days / week
                </p>
              </motion.div>
            </motion.div>
            <motion.button
              className="be md:mt-14 mb-12"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visibale: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.1 }}
              viewport={{ amount: "some" }}
              onClick={handleSubmit}
            >
              Calculate
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default page;
