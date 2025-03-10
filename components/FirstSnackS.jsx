"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import fruitImageDefault from "../public/imgs/5.png";
import egg from "../public/imgs/3.png";
import oat from "../public/imgs/1.png";
import vegs from "../public/imgss/47.png";
import salade from "../public/imgss/33.png";
import f from "../public/imgss/24.png";

import milk from "../public/imgs/4.png";
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
  const [meat, setMeat] = useState(`Eggs`);
  const [milk1, setMilk1] = useState("milk ( 1 CUP (240 ML) )");
  const [starch, setStarch] = useState("oats ( 1/4 CUP )");
  const [fat, setFat] = useState("");
  const [veg, setVeg] = useState("");
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldRender2, setShouldRender2] = useState(true);

  const handleClick = () => {
    setVisibale(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  // 0=> milk
  // 1=>veg
  // 2=>starch
  // 3=> fruit
  // 4=> meat
  // 5=> fat
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

        <div className="flex lg:flex-row mt-4 flex-col">
          {breakFast[1] == 0 ? (
            ""
          ) : (
            <DropdownS
              title={veg}
              breakFast={breakFast}
              meal={"breakfast"}
              d="vegetables"
              index={1}
              set={setVeg}
              setImage={setImageMilk}
              setMeal={props.setMeal}
              mealData={props.mealData}
            />
          )}
          {breakFast[2] == 0 ? (
            ""
          ) : (
            <DropdownS
              title={starch}
              breakFast={breakFast}
              meal={"breakfast"}
              d="starch"
              index={2}
              set={setStarch}
              setImage={setImageStarch}
              setMeal={props.setMeal}
              mealData={props.mealData}
            />
          )}
        </div>
        <div className="flex lg:flex-row flex-col">
          {breakFast[4] == 0 ? (
            ""
          ) : (
            <DropdownS
              title={meat}
              breakFast={breakFast}
              d="meat"
              meal={"breakfast"}
              index={4}
              set={setMeat}
              setImage={setImageMeat}
              setMeal={props.setMeal}
              mealData={props.mealData}
            />
          )}
          {breakFast[5] == 0 ? (
            ""
          ) : (
            <DropdownS
              title={fat}
              breakFast={breakFast}
              d="fat"
              meal={"breakfast"}
              index={5}
              set={setFat}
              setImage={setImageFruit}
              setMeal={props.setMeal}
              mealData={props.mealData}
            />
          )}
        </div>
        <div className="flex lg:flex-row flex-col">
          {breakFast[3] == 0 ? (
            ""
          ) : (
            <DropdownS
              title={fruit}
              breakFast={breakFast}
              d="fruits"
              meal={"breakfast"}
              index={3}
              set={setFruit}
              setImage={setImageMeat}
              setMeal={props.setMeal}
              mealData={props.mealData}
            />
          )}
          {breakFast[0] == 0 ? (
            ""
          ) : (
            <DropdownS
              title={milk1}
              breakFast={breakFast}
              d="milk"
              meal={"breakfast"}
              index={0}
              set={setMilk1}
              setImage={setImageFruit}
              setMeal={props.setMeal}
              mealData={props.mealData}
            />
          )}
        </div>
      </motion.div>
      <motion.div
        className="md:basis-3/6 md:flex md:flex-row  hidden justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        {breakFast[0] == 0 ? (
          ""
        ) : (
          <motion.div className="flex items-center xl:w-fit lg:w-1/2">
            <Image
              src={
                props.mealData.milk.img == ""
                  ? milk
                  : `/imgss/${props.mealData.milk.img}`
              }
              width={339.25}
              height={600}
              alt="milk"
            />
          </motion.div>
        )}
        <motion.div className="flex flex-col flex-wrap">
          <motion.div className="flex flex-row flex-wrap  justify-center ">
            {breakFast[4] == 0 ? (
              ""
            ) : props.mealData.meat.img == "" ||
              props.mealData.meat.img == "3.png" ? (
              <>
                <Image
                  src={egg}
                  width={120}
                  height={150}
                  alt="Egg"
                  className="xl:w-[12rem] xl:h-[12rem] lg:w-[6rem] lg:h-[6rem] md:w-[4rem] md:h-[4rem]"
                />
              </>
            ) : (
              <>
                <Image
                  src={`/imgss/${props.mealData.meat.img}`}
                  width={250}
                  height={250}
                  alt="Egg"
                  className="xl:w-[12rem] xl:h-[12rem] lg:w-[6rem] lg:h-[6rem] md:w-[4rem] md:h-[4rem]"
                />
              </>
            )}
            {breakFast[1] == 0 ? (
              ""
            ) : (
              <Image
                src={
                  props.mealData.vegetables.img == ""
                    ? vegs
                    : `/imgss/${props.mealData.vegetables.img}`
                }
                width={250}
                height={250}
                alt="Egg"
                className="xl:w-[12rem] xl:h-[12rem] lg:w-[6rem] lg:h-[6rem] md:w-[4rem] md:h-[4rem]"
              />
            )}
            {breakFast[3] == 0 ? (
              ""
            ) : (
              <Image
                src={
                  props.mealData.fruits.img == ""
                    ? f
                    : `/imgss/${props.mealData.fruits.img}`
                }
                width={250}
                height={220}
                alt="Egg"
                className="xl:w-[12rem] xl:h-[12rem] lg:w-[6rem] lg:h-[6rem] md:w-[4rem] md:h-[4rem]"
              />
            )}
          </motion.div>
          <motion.div className="flex flex-row  justify-center ">
            {breakFast[2] == 0 ? (
              ""
            ) : (
              <Image
                src={
                  props.mealData.starch.img == ""
                    ? oat
                    : `/imgss/${props.mealData.starch.img}`
                }
                width={250}
                height={250}
                alt="Oat"
                className="xl:w-[12rem] xl:h-[12rem] lg:w-[6rem] lg:h-[6rem] md:w-[4rem] md:h-[4rem]"
              />
            )}

            {breakFast[5] == 0 ? (
              ""
            ) : (
              <Image
                src={
                  props.mealData.fat.img == ""
                    ? salade
                    : `/imgss/${props.mealData.fat.img}`
                }
                width={250}
                height={250}
                alt="Salade"
                className="xl:w-[12rem] xl:h-[12rem] lg:w-[6rem] lg:h-[6rem] md:w-[4rem] md:h-[4rem]"
              />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FirstSnackS;
