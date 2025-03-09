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

const LunchS = (props) => {
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
    if (cal < 1250) {
      setBreakFast([0, 2, 2, 0, 1, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Eggs`)
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
    } else if (cal < 1350) {
      setBreakFast([0, 2, 2, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
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
    } else if (cal < 1450) {
      setBreakFast([0, 2, 2, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
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
    } else if (cal < 1550) {
      setBreakFast([0, 3, 2, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1650) {
      setBreakFast([0, 2, 3, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
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
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1750) {
      setBreakFast([0, 2, 3, 0, 2, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
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
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1850) {
      setBreakFast([0, 3, 3, 0, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);
    } else if (cal < 1950) {
      setBreakFast([0, 2, 2, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2050) {
      setBreakFast([0, 2, 2, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2150) {
      setBreakFast([0, 2, 2, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2250) {
      setBreakFast([0, 2, 3, 0, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2350) {
      setBreakFast([0, 2, 3, 0, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2450) {
      setBreakFast([0, 2, 3, 0, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2550) {
      setBreakFast([0, 2, 3, 0, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${0} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2650) {
      setBreakFast([0, 2, 3, 1, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2750) {
      setBreakFast([0, 2, 3, 1, 2, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2850) {
      setBreakFast([0, 2, 3, 1, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2950) {
      setBreakFast([0, 2, 3, 1, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3050) {
      setBreakFast([0, 2, 3, 2, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${3} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3150) {
      setBreakFast([0, 3, 4, 2, 3, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${4} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3250) {
      setBreakFast([0, 3, 4, 2, 3, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${4} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3350) {
      setBreakFast([0, 3, 4, 2, 3, 4]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${4} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${4 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3450) {
      setBreakFast([1, 2, 2, 2, 2, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3550) {
      setBreakFast([0, 3, 4, 2, 3, 5]);

      props.mealData.milk.name === ""
        ? setMilk1(`${0 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${4} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${3} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${5 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    }
    // props.mealData.meat.name === ""
    //   ? setMeat(
    //       `${(Math.round(0.4 * MeatServes) * 30).toFixed(
    //         2
    //       )} G of Chicken breast`
    //     )
    //   : setMeat(props.mealData.meat.name);
    // props.mealData.fat.name === ""
    //   ? setFat(`${(Math.round(0.5 * FatServes) * 6).toFixed(2)} Almonds`)
    //   : setFat(props.mealData.fat.name);

    // props.mealData.starch.name === ""
    //   ? setStarch(
    //       `${(Math.round(0.4 * StarchServes) * (1 / 3)).toFixed(
    //         2
    //       )} CUP of Rice Cooked`
    //     )
    //   : setStarch(props.mealData.starch.name);
    // props.mealData.vegetable.name === ""
    //   ? setVeg(
    //       `${Math.round(0.2 * VegServes).toFixed(2)} CUP of Raw vegetables`
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
              src={
                props.mealData.meat.img == ""
                  ? chb
                  : `/imgs/${props.mealData.meat.img}`
              }
              width={250}
              height={250}
              alt="chb"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={
                props.mealData.fat.img == ""
                  ? alm
                  : `/imgs/${props.mealData.fat.img}`
              }
              width={250}
              height={250}
              alt="chb"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
          </motion.div>
          <motion.div className="flex flex-row justify-center">
            <Image
              src={
                props.mealData.starch.img == ""
                  ? rice
                  : `/imgs/${props.mealData.starch.img}`
              }
              width={250}
              height={250}
              alt="Oat"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[12rem] lg:h-[12rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={
                props.mealData.vegetable.img == ""
                  ? vegetable
                  : `/imgs/${props.mealData.vegetable.img}`
              }
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

export default LunchS;
