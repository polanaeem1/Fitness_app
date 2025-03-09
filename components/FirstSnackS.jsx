"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import fruitImageDefault from "../public/imgs/5.png";
import Dropdown from "@/components/Dropdown";
import DropdownS from "./DropdownS";

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
      setBreakFast([1, 0, 0, 1, 0, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1350) {
      setBreakFast([1, 0, 0, 2, 0, 0.5]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${0.5 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1450) {
      setBreakFast([1, 0, 0, 1, 0, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1550) {
      setBreakFast([1, 0, 0, 2, 0, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1650) {
      setBreakFast([1, 0, 0, 1, 0, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1750) {
      setBreakFast([1, 0, 0, 2, 0, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1850) {
      setBreakFast([1, 0, 0, 2, 0, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`0 CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`0 Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1950) {
      setBreakFast([0, 1, 2, 1, 0, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2050) {
      setBreakFast([0, 1, 2, 2, 0, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2150) {
      setBreakFast([0, 1, 2, 2, 0, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2250) {
      setBreakFast([0, 1, 2, 2, 0, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2350) {
      setBreakFast([0, 1, 2, 2, 0, 2]);
      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2450) {
      setBreakFast([0, 1, 2, 2, 0, 2]);
      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2550) {
      setBreakFast([0, 1, 2, 2, 0, 2]);
      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`0 Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2650) {
      setBreakFast([1, 2, 2, 2, 2, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2750) {
      setBreakFast([0, 2, 2, 2, 2, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2850) {
      setBreakFast([1, 2, 2, 2, 2, 1]);
      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 2950) {
      setBreakFast([1, 2, 2, 2, 2, 1]);
      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 3050) {
      setBreakFast([1, 2, 2, 2, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 3150) {
      setBreakFast([1, 2, 2, 2, 2, 2]);
      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 3250) {
      setBreakFast([1, 2, 2, 2, 2, 2]);
      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 3350) {
      setBreakFast([1, 2, 2, 2, 2, 2]);
      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 3450) {
      setBreakFast([1, 2, 2, 2, 2, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 3550) {
      setBreakFast([1, 2, 2, 2, 2, 3]);
      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    }
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
          <DropdownS
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
