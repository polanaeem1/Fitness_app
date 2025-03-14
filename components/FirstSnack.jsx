"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import ba from "../public/imgs/5.png";
import Dropdown from "./Dropdown";

const FirstSnack = (props) => {
  const params = useParams();
  const { cal } = params;

  let FruitServes;

  const [breakFast, setBreakFast] = useState([]);
  const [visibale, setVisibale] = useState(false);
  const [meat, setMeat] = useState(`Eggs`);
  const [milk1, setMilk1] = useState("milk ( 1 CUP (240 ML) )");
  const [fruit, setFruit] = useState("banana");
  const [starch, setStarch] = useState("oats ( 1/4 CUP )");
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldRender2, setShouldRender2] = useState(true);

  const handleClick = () => {
    setVisibale(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  useEffect(() => {
    const calCHO = () => {
      let CHO = Math.round((parseInt(cal) * 0.55) / 4);
      FruitServes = Math.round((0.24 * CHO) / 15);
    };

    calCHO();
    setBreakFast([Math.round(0.44 * FruitServes)]);

    props.mealData.fruits.name === ""
      ? setFruit(`${Math.round(0.44 * FruitServes) * 1} Banana`)
      : setFruit(props.mealData.fruits.name);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ amount: "all" }}
        animate={{ opacity: !visibale ? 1 : 0 }}
        className=" md:basis-3/6"
      >
        <h3 className="xl:text-[8rem] font-bold lg:text-[6rem] md:text-[4rem] text-[3rem]">
          <span className="text-[#06a5f6]">First</span>
          Snack
        </h3>
        <div className="flex lg:flex-row mt-4 flex-col">
          <Dropdown
            title={fruit}
            breakFast={breakFast}
            meal={"snack1"}
            d="fruits"
            index={0}
            set={setFruit}
            setImage={setFruit}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
      </motion.div>
      <motion.div
        className="md:basis-3/6 md:flex md:flex-row hidden gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        <motion.div className="flex flex-col flex-wrap">
          <motion.div className="flex flex-row flex-wrap  justify-center ">
            {props.mealData.fruits.img == "" ||
            props.mealData.fruits.img == "5.png" ? (
              <>
                <Image
                  src={ba}
                  width={120}
                  height={150}
                  alt="Egg"
                  className=" lg:w-[15rem] lg:h-[15rem] md:w-[7rem] md:h-[7rem] ml-24"
                />
              </>
            ) : (
              <>
                <Image
                  src={`/imgs/${props.mealData.fruits.img}`}
                  width={250}
                  height={250}
                  alt="Egg"
                  className="xl:w-fit lg:w-1/2"
                />
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FirstSnack;
