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
import fruitImageDefault from "../public/imgs/5.png";
import egg from "../public/imgs/3.png";

const SecondSnack = () => {
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
      Math.round(0.33 * FruitServes),
      Math.round(0.4 * VegServes),
      Math.round(0.1 * MeatServes),
    ]);
    setFruit(`${Math.round(0.33 * FruitServes).toFixed(2)} Bananas`)
    setFat(`${Math.round(0.33 * FatServes).toFixed(2)} Almonds`)
    setMeat(`${Math.round(0.1 * MeatServes).toFixed(2)} Egg`)
    setVeg(`${(Math.round(0.4 * VegServes)*0.5).toFixed(2)} CUP of Cooked vegetables`)
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
          <span className="text-[#06a5f6]">Second</span>
          Snack
        </h3>
        <div className="flex flex-row mt-4">
          <Dropdown
            title={fat}
            breakFast={meal}
            meal={"snack2"}
            d="fat"
            index={0}
            set={setFat}
            setImage={setImageFat}
          />
          <Dropdown
            title={fruit}
            breakFast={meal}
            meal={"snack2"}
            d="fruits"
            index={1}
            set={setFruit}
            setImage={setImageFruit}
          />
        </div>
        <div className="flex flex-row">
          <Dropdown
            title={meat}
            breakFast={meal}
            d="meat"
            meal={"snack2"}
            index={3}
            set={setMeat}
            setImage={setImageMeat}
          />
          <Dropdown
            title={veg}
            breakFast={meal}
            d="vegetable"
            meal={"snack2"}
            index={2}
            set={setVeg}
            setImage={setImageVeg}
          />
        </div>
      </motion.div>
      <motion.div
        className="basis-3/6 flex flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        <motion.div className="flex flex-col flex-wrap ml-24">
          <motion.div className="flex flex-row flex-wrap  justify-center">
            <Image src={imageMeat == "" ? egg : `/imgs/${imageMeat}`} width={200} height={200} alt="chb" />
            <Image src={imageFat == "" ? alm : `/imgs/${imageFat}`} width={200} height={200} alt="chb" />
          </motion.div>
          <motion.div className="flex flex-row justify-center">
            <Image
              src={imageFruit == "" ? fruitImageDefault : `/imgs/${imageFruit}`}
              width={220}
              height={220}
              alt="Oat"
            />
            <Image
              src={imageVeg == "" ? vegetable : `/imgs/${imageVeg}`}
              width={220}
              height={220}
              alt="Salade"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SecondSnack;
