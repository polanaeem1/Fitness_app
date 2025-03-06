"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import chb from "../public/imgs/15.png";
import alm from "../public/imgs/6.png";
import rice from "../public/imgs/13.png";
import vegetable from "../public/imgs/31.png";
import Dropdown from "@/components/Dropdown";

const Lunch = (props) => {
  const [imageMeat, setImageMeat] = useState("");
  const [imageFat, setImageFat] = useState("");
  const [imageStarch, setImageStarch] = useState("");
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
  const [starch, setStarch] = useState("");
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldRender2, setShouldRender2] = useState(true);

  const handleClick = () => {
    setVisibale(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  useEffect(() => {
    const calProtin = () => {
      proten = Math.round((parseInt(cal) * 0.25) / 4);
      MeatServes = Math.round((0.56 * proten) / 7);
    };
    const calCHO = () => {
      CHO = Math.round((parseInt(cal) * 0.55) / 4);
      milkServes = Math.round((0.11 * CHO) / 15);
      VegServes = Math.round((0.09 * CHO) / 5);
      FruitServes = Math.round((0.24 * CHO) / 15);
      StarchServes = Math.round((0.56 * CHO) / 15);
    };
    const calFat = () => {
      Fat = Math.round((parseInt(cal) * 0.2) / 9);
      FatServes = Math.round((0.23 * Fat) / 5);
    };

    calCHO();
    calProtin();
    calFat();
    setmeal([
      Math.round(0.5 * FatServes),
      Math.round(0.4 * StarchServes),
      Math.round(0.2 * VegServes),
      Math.round(0.4 * MeatServes),
    ]);
    props.mealData.meat.name === ""
      ? setMeat(
          `${(Math.round(0.4 * MeatServes) * 30).toFixed(
            2
          )} G of Chicken breast`
        )
      : setMeat(props.mealData.meat.name);
    props.mealData.fat.name === ""
      ? setFat(`${(Math.round(0.5 * FatServes) * 6).toFixed(2)} Almonds`)
      : setFat(props.mealData.fat.name);

    props.mealData.starch.name === ""
      ? setStarch(
          `${(Math.round(0.4 * StarchServes) * (1 / 3)).toFixed(
            2
          )} CUP of Rice Cooked`
        )
      : setStarch(props.mealData.starch.name);
    props.mealData.vegetable.name === ""
      ? setVeg(
          `${Math.round(0.2 * VegServes).toFixed(2)} CUP of Raw vegetables`
        )
      : setVeg(props.mealData.vegetable.name);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ amount: "all" }}
        animate={{ opacity: !visibale ? 1 : 0 }}
        className="md:basis-3/6"
      >
        <h3 className="xl:text-[8rem] font-bold lg:text-[6rem] md:text-[4rem] text-[3rem]">
          <span className="text-[#06a5f6]">Lunch</span>
        </h3>
        <div className="flex lg:flex-row mt-4 flex-col">
          <Dropdown
            title={fat}
            breakFast={meal}
            meal={"lunch"}
            d="fat"
            index={0}
            set={setFat}
            setImage={setImageFat}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
          <Dropdown
            title={starch}
            breakFast={meal}
            meal={"lunch"}
            d="starch"
            index={1}
            set={setStarch}
            setImage={setImageStarch}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
        <div className="flex lg:flex-row flex-col">
          <Dropdown
            title={meat}
            breakFast={meal}
            d="meat"
            meal={"lunch"}
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
            meal={"lunch"}
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
              src={props.mealData.meat.img == "" ? chb : `/imgs/${props.mealData.meat.img}`}
              width={250}
              height={250}
              alt="chb"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={props.mealData.fat.img == "" ? alm : `/imgs/${props.mealData.fat.img}`}
              width={250}
              height={250}
              alt="chb"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
          </motion.div>
          <motion.div className="flex flex-row justify-center">
            <Image
              src={props.mealData.starch.img == "" ? rice : `/imgs/${props.mealData.starch.img}`}
              width={250}
              height={250}
              alt="Oat"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={props.mealData.vegetable.img == "" ? vegetable : `/imgs/${props.mealData.vegetable.img }`}
              width={250}
              height={250}
              alt="Salade"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Lunch;
