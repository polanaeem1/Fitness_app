"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import chb from "../public/imgs/15.png";
import rice from "../public/imgs/13.png";
import vegetable from "../public/imgs/31.png";
import Dropdown from "@/components/Dropdown";
import alm from "../public/imgs/6.png";
import fruitImageDefault from "../public/imgs/22.png";
import egg from "../public/imgs/3.png";

const SecondSnackS = (props) => {
  const [imageMeat, setImageMeat] = useState("");
  const [imageFat, setImageFat] = useState("");
  const [imageFruit, setImageFruit] = useState("");
  const [imageVeg, setImageVeg] = useState("");
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
  const [meal, setmeal] = useState([]);
  const [visibale, setVisibale] = useState(false);
  const [meat, setMeat] = useState(``);
  const [fat, setFat] = useState("");
  const [veg, setVeg] = useState("");
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
        0, //veg
        0, //starch
        1, // fruit
        0, //meat
        0.5, //Fat
      ]);
    } else if (cal < 1350) {
      setBreakFast([
        1, //milk
        0, //veg
        0, //starch
        1, // fruit
        0, //meat
        1, //Fat
      ]);
    } else if (cal < 1450) {
      setBreakFast([
        1, //milk
        0, //veg
        0, //starch
        1, // fruit
        0, //meat
        1, //Fat
      ]);
    } else if (cal < 1550) {
      setBreakFast([
        1, //milk
        0, //veg
        0, //starch
        1, // fruit
        0, //meat
        1, //Fat
      ]);
    } else if (cal < 1650) {
      setBreakFast([
        1, //milk
        0, //veg
        0, //starch
        1, // fruit
        0, //meat
        1, //Fat
      ]);
    } else if (cal < 1750) {
      setBreakFast([
        1, //milk
        0, //veg
        0, //starch
        2, // fruit
        0, //meat
        0, //Fat
      ]);
    } else if (cal < 1850) {
      setBreakFast([
        1, //milk
        0, //veg
        0, //starch
        2, // fruit
        0, //meat
        1, //Fat
      ]);
    } else if (cal < 1950) {
      setBreakFast([
        1, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2050) {
      setBreakFast([
        1, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2150) {
      setBreakFast([
        1, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2250) {
      setBreakFast([
        1, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2350) {
      setBreakFast([
        1, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2450) {
      setBreakFast([
        1, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2550) {
      setBreakFast([
        2, //milk
        0, //veg
        1, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 2650) {
      setBreakFast([
        1, //milk
        2, //veg
        1, //starch
        2, // fruit
        1, //meat
        1, //Fat
      ]);
    } else if (cal < 2750) {
      setBreakFast([
        1, //milk
        0, //veg
        2, //starch
        2, // fruit
        2, //meat
        0, //Fat
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
        1, //Fat
      ]);
    } else if (cal < 3150) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        0, //Fat
      ]);
    } else if (cal < 3250) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 3350) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 3450) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        1, //meat
        2, //Fat
      ]);
    } else if (cal < 3550 || cal>3550) {
      setBreakFast([
        1, //milk
        2, //veg
        2, //starch
        2, // fruit
        2, //meat
        2, //Fat
      ]);
    }
    // console.log(0.33 * FruitServes * 0.5);
    // props.mealData.fruits.name === ""
    //   ? setFruit(
    //       `${(Math.round(0.33 * FruitServes) * 0.5).toFixed(
    //         2
    //       )} CUP of  Strawberries`
    //     )
    //   : setFruit(props.mealData.fruits.name);

    // props.mealData.fat.name === ""
    //   ? setFat(`${Math.round(0.33 * FatServes).toFixed(2)} Almonds`)
    //   : setFat(props.mealData.fat.name);

    // props.mealData.meat.name === ""
    //   ? setMeat(
    //       `${(Math.round(0.1 * MeatServes) * 30).toFixed(
    //         2
    //       )} G of Chicken breast`
    //     )
    //   : setMeat(props.mealData.meat.name);

    // props.mealData.vegetable.name === ""
    //   ? setVeg(
    //       `${(Math.round(0.4 * VegServes) * 0.5).toFixed(
    //         2
    //       )} CUP of Cooked vegetables`
    //     )
    //   : setVeg(props.mealData.vegetable.name);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ amount: "all" }}
        animate={{ opacity: !visibale ? 1 : 0 }}
        className="md:basis-3/6"
      >
        <h3 className="xl:text-[8rem] font-bold lg:text-[6rem] md:text-[4rem] text-[2.5rem]">
          <span className="text-[#06a5f6]">Second</span>
          Snack
        </h3>
        <div className="flex lg:flex-row mt-4 flex-col">
          <Dropdown
            title={fat}
            breakFast={meal}
            meal={"snack2"}
            d="fat"
            index={0}
            set={setFat}
            setImage={setImageFat}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
          <Dropdown
            title={fruit}
            breakFast={meal}
            meal={"snack2"}
            d="fruits"
            index={1}
            set={setFruit}
            setImage={setImageFruit}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
        <div className="flex lg:flex-row flex-col">
          <Dropdown
            title={meat}
            breakFast={meal}
            d="meat"
            meal={"snack2"}
            index={3}
            set={setMeat}
            setImage={setImageMeat}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
          <Dropdown
            title={veg}
            breakFast={meal}
            d="vegetable"
            meal={"snack2"}
            index={2}
            set={setVeg}
            setImage={setImageVeg}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
      </motion.div>
      <motion.div
        className="md:basis-3/6 md:flex md:flex-row  hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        <motion.div className="flex flex-col flex-wrap ml-24">
          <motion.div className="flex flex-row flex-wrap  justify-center">
            <Image
              src={
                props.mealData.meat.img == ""
                  ? chb
                  : `/imgs/${props.mealData.meat.img}`
              }
              width={200}
              height={200}
              alt="chb"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={
                props.mealData.fat.img == ""
                  ? alm
                  : `/imgs/${props.mealData.fat.img}`
              }
              width={200}
              height={200}
              alt="chb"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
            />
          </motion.div>
          <motion.div className="flex flex-row justify-center">
            <Image
              src={
                props.mealData.fruits.img == ""
                  ? fruitImageDefault
                  : `/imgs/${props.mealData.fruits.img}`
              }
              width={220}
              height={220}
              alt="Oat"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={
                props.mealData.vegetable.img == ""
                  ? vegetable
                  : `/imgs/${props.mealData.vegetable.img}`
              }
              width={220}
              height={220}
              alt="Salade"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SecondSnackS;
