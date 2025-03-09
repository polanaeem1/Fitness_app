"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import egg from "../public/imgs/35.png";
import oat from "../public/imgs/29.png";
import salade from "../public/imgs/salade.png";
import milk from "../public/imgs/21.png";
import Dropdown from "@/components/Dropdown";

const DinnerS = (props) => {
  const [imageMeat, setImageMeat] = useState("");
  const [imageMilk, setImageMilk] = useState("");
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
  const [breakFast, setBreakFast] = useState([]);
  const [visibale, setVisibale] = useState(false);
  const [meat, setMeat] = useState(`Eggs`);
  const [milk1, setMilk1] = useState("milk ( 1 CUP (240 ML) )");
  const [Veg, setVeg] = useState("banana");
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
    if (cal < 1250) {
      setBreakFast([0, 1, 1, 0, 1, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1350) {
      setBreakFast([0, 1, 1, 0, 1, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1450) {
      setBreakFast([0, 2, 2, 0, 1, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1550) {
      setBreakFast([0, 1, 1, 0, 1, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1650) {
      setBreakFast([0, 2, 1, 0, 1, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${1 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1750) {
      setBreakFast([0, 2, 2, 0, 1, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1850) {
      setBreakFast([0, 2, 2, 0, 1, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`No Fruit`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 1950) {
      setBreakFast([0, 1, 1, 1, 1, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${1 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2050) {
      setBreakFast([0, 2, 1, 1, 1, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${1} Egg`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2150) {
      setBreakFast([0, 2, 1, 1, 2, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2250) {
      setBreakFast([0, 2, 1, 1, 2, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2350) {
      setBreakFast([0, 2, 1, 1, 2, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2450) {
      setBreakFast([0, 2, 1, 1, 2, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`No Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2550) {
      setBreakFast([0, 2, 1, 1, 2, 0]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${1} Mango`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`0 Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2650) {
      setBreakFast([0, 2, 1, 2, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2750) {
      setBreakFast([0, 2, 1, 1, 2, 1]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${1} Cup of oat`)
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
      setBreakFast([0, 2, 2, 2, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`0 ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${2 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 2950) {
      setBreakFast([1, 2, 2, 2, 2, 2]);

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
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3050) {
      setBreakFast([1, 2, 2, 2, 2, 2]);

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
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3150) {
      setBreakFast([1, 3, 2, 2, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3250) {
      setBreakFast([1, 3, 2, 2, 2, 2]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${2 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3350) {
      setBreakFast([1, 3, 2, 2, 2, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal < 3450) {
      setBreakFast([1, 3, 2, 2, 2, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    } else if (cal >= 3450) {
      setBreakFast([1, 3, 2, 2, 2, 3]);

      props.mealData.milk.name === ""
        ? setMilk1(`${1 * 240} ML of Milk`)
        : setMilk1(props.mealData.milk.name);

      props.mealData.vegetables.name === ""
        ? setVeg(`${3 * 0.5} CUP of Raw Vegetables`)
        : setVeg(props.mealData.vegetables.name);

      props.mealData.starch.name === ""
        ? setStarch(`${2} Cup of oat`)
        : setStarch(props.mealData.starch.name);

      props.mealData.fruits.name === ""
        ? setFruit(`${2} Mangoes`)
        : setFruit(props.mealData.fruits.name);

      props.mealData.meat.name === ""
        ? setMeat(`${2} Eggs`)
        : setMeat(props.mealData.meat.name);

      props.mealData.fat.name === ""
        ? setFat(`${3 * 6} Almonds`)
        : setFat(props.mealData.fat.name);
    }
    // props.mealData.meat.name === ""
    //   ? setMeat(`${Math.round(0.2 * MeatServes) * 30} G of Cottage Cheese`)
    //   : setMeat(props.mealData.meat.name);

    // props.mealData.milk.name === ""
    //   ? setMilk1(`${Math.round(0.5 * milkServes) * 180} G of Yogurt`)
    //   : setMilk1(props.mealData.milk.name);

    // props.mealData.vegetable.name === ""
    //   ? setVeg(`${Math.round(0.4 * VegServes) * 1} CUP of Raw vegetables`)
    //   : setVeg(props.mealData.vegetable.name);

    // props.mealData.starch.name === ""
    //   ? setStarch(`${Math.round(0.2 * StarchServes) * 90} G of Potato`)
    //   : setStarch(props.mealData.starch.name);
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
          Dinner
        </h3>
        <div className="flex lg:flex-row mt-4 flex-col">
          <Dropdown
            title={milk1}
            breakFast={breakFast}
            meal={"dinner"}
            d="milk"
            index={0}
            set={setMilk1}
            setImage={setImageMilk}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
          <Dropdown
            title={starch}
            breakFast={breakFast}
            meal={"dinner"}
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
            breakFast={breakFast}
            d="meat"
            meal={"dinner"}
            index={3}
            set={setMeat}
            setImage={setImageMeat}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
          <Dropdown
            title={Veg}
            breakFast={breakFast}
            d="vegetable"
            meal={"dinner"}
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
        <motion.div className="flex items-center">
          <Image
            src={
              props.mealData.milk.img == ""
                ? milk
                : `/imgs/${props.mealData.milk.img}`
            }
            width={339.25}
            height={600}
            alt="milk"
            className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
          />
        </motion.div>
        <motion.div className="flex flex-col flex-wrap">
          <motion.div className="flex flex-row flex-wrap  justify-center">
            {props.mealData.meat.img == "" ||
            props.mealData.meat.img == "35.png" ? (
              <>
                <Image
                  src={egg}
                  width={250}
                  height={250}
                  alt="Egg"
                  className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
                />
              </>
            ) : (
              <>
                <Image
                  src={`/imgs/${props.mealData.meat.img}`}
                  width={250}
                  height={250}
                  alt="Egg"
                  className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
                />
              </>
            )}
          </motion.div>
          <motion.div className="flex flex-row  justify-center">
            <Image
              src={
                props.mealData.starch.img == ""
                  ? oat
                  : `/imgs/${props.mealData.starch.img}`
              }
              width={250}
              height={250}
              alt="Oat"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
            />
            <Image
              src={
                props.mealData.vegetable.img == ""
                  ? salade
                  : `/imgs/${props.mealData.vegetable.img}`
              }
              width={250}
              height={250}
              alt="Salade"
              className=" xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem]  md:w-[9rem] md:h-[9rem]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DinnerS;
