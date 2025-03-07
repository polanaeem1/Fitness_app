"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import fruitImageDefault from "../public/imgs/5.png";
import Dropdown from "@/components/Dropdown";

const FirstSnackS = (props) => {
  const [imageMeat, setImageMeat] = useState("");
  const [imageMilk, setImageMilk] = useState("");
  const [imageStarch, setImageStarch] = useState("");
  const [imageFruit, setImageFruit] = useState("");
  const params = useParams();
  const { cal } = params;
  let proten;
  let CHO;
  let Fat;
  let milkServes;
  let StarchServes;
  let VegServes;
  let FruitServes;
  let MeatServes;
  let FatServes;
  const [firstSnack, setFirstSnack] = useState([]);
  const [visibale, setVisibale] = useState(false);
  const [breakFast, setBreakFast] = useState([]);

  const [fruit, setFruit] = useState("");
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldRender2, setShouldRender2] = useState(true);

  const handleClick = () => {
    setVisibale(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  useEffect(() => {
    if (cal < 1250) {
      setBreakFast([
        1, //milk
        0,
        0,
        1, // fruit
        0,
        1, //Fat
      ]);
    } else if (cal < 1350) {
      setBreakFast([
        1, //milk
        0,
        0,
        2, // fruit
        0,
        0.5, //Fat
      ]);
    } else if (cal < 1450) {
      setBreakFast([
        1, //milk
        0,
        0,
        1, // fruit
        0,
        1, //Fat
      ]);
    } else if (cal < 1550) {
      setBreakFast([
        1, //milk
        0,
        0,
        2, // fruit
        0,
        1, //Fat
      ]);
    } else if (cal < 1650) {
      setBreakFast([
        1, //milk
        0,
        0,
        1, // fruit
        0,
        1, //Fat
      ]);
    } else if (cal < 1750) {
      setBreakFast([
        1, //milk
        0,
        0,
        2, // fruit
        0,
        1, //Fat
      ]);
    } else if (cal < 1850) {
      setBreakFast([
        1, //milk
        0,
        0,
        2, // fruit
        0,
        1, //Fat
      ]);
    } else if (cal < 1950) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        1, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2050) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        2, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2150) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        2, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2250) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        2, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2350) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        2, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2450) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        2, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2550) {
      setBreakFast([
        0, //milk
        1, //veg
        2, //starch
        2, // fruit
        0, //meat
        2, //Fat
      ]);
    } else if (cal < 2650) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        1, //Fat
      ]);
    } else if (cal < 2750) {
      setBreakFast([
        0, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        1, //Fat
      ]);
    } else if (cal < 2850) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        1, //Fat
      ]);
    } else if (cal < 2950) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        1, //Fat
      ]);
    } else if (cal < 3050) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        2, //Fat
      ]);
    } else if (cal < 3150) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        2, //Fat
      ]);
    } else if (cal < 3250) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        2, //Fat
      ]);
    } else if (cal < 3350) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        2, //Fat
      ]);
    } else if (cal < 3450) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        3, //Fat
      ]);
    } else if (cal < 3550) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        3, //Fat
      ]);
    }
    // props.mealData.fruits.name === ""
    //   ? setFruit(`${Math.round(0.44 * FruitServes) * 1} Bananas`)
    //   : setFruit(props.mealData.fruits.name);
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

        <div className="flex flex-row mt-10">
          <Dropdown
            title={fruit}
            breakFast={breakFast}
            meal={"snack1"}
            d="fruits"
            index={0}
            set={setFruit}
            setImage={setImageFruit}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
      </motion.div>
      <motion.div
        className="md:basis-3/6 md:flex md:flex-row  hidden justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        <Image
          src={
            props.mealData.fruits.img == ""
              ? fruitImageDefault
              : `/imgs/${props.mealData.fruits.img}`
          }
          width={350}
          height={350}
          alt="Salade"
          className=" xl:w-[20rem] xl:h-[20rem] lg:w-[15rem] lg:h-[15rem]  md:w-[13rem] md:h-[13rem]"
        />
      </motion.div>
    </>
  );
};

export default FirstSnackS;
