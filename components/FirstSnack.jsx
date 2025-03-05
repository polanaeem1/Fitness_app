"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import fruitImageDefault from "../public/imgs/5.png";
import Dropdown from "@/components/Dropdown";

const FirstSnack = (props) => {
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
    props.mealData.fruits.name === ""
      ? setFruit(`${Math.round(0.44 * FruitServes)*1} Bananas`)
      : setFruit(props.mealData.fruits.name);

  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ amount: "all" }}
        animate={{ opacity: !visibale ? 1 : 0 }}
        className=" basis-3/6"
      >
        <h3 className="text-[8rem] font-bold">
          <span className="text-[#06a5f6]">First</span>
          Snack
        </h3>

        <div className="flex flex-row mt-10">
          <Dropdown
            title={fruit}
            breakFast={firstSnack}
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
        className="basis-3/6 flex flex-row justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        <Image
          src={props.mealData.fruits.img == "" ? fruitImageDefault : `/imgs/${props.mealData.fruits.img}`}
          width={350}
          height={350}
          alt="Salade"
        />
      </motion.div>
    </>
  );
};

export default FirstSnack;
