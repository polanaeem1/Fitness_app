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

const Lunch = () => {
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
    setMeat(
      `${(Math.round(0.4 * MeatServes) * 30).toFixed(2)} G of Chicken breast`
    );
    setFat(`${(Math.round(0.5 * FatServes) * 6).toFixed(2)} Almonds`);
    setStarch(
      `${(Math.round(0.4 * StarchServes) * (1 / 3)).toFixed(
        2
      )} CUP of Rice Cooked`
    );
    setVeg(`${Math.round(0.2 * VegServes).toFixed(2)} CUP of Raw vegetables`);
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
          <span className="text-[#06a5f6]">Lunch</span>
        </h3>
        <div className="flex flex-row mt-4">
          <Dropdown
            title={fat}
            breakFast={meal}
            meal={"lunch"}
            d="fat"
            index={0}
            set={setFat}
            setImage={setImageFat}
          />
          <Dropdown
            title={starch}
            breakFast={meal}
            meal={"lunch"}
            d="starch"
            index={1}
            set={setStarch}
            setImage={setImageStarch}
          />
        </div>
        <div className="flex flex-row">
          <Dropdown
            title={meat}
            breakFast={meal}
            d="meat"
            meal={"lunch"}
            index={3}
            set={setMeat}
            setImage={setImageMeat}
          />
          <Dropdown
            title={veg}
            breakFast={meal}
            d="vegetable"
            meal={"lunch"}
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
            <Image src={imageMeat == "" ? chb : `/imgs/${imageMeat}`} width={250} height={250} alt="chb" />
            <Image src={imageFat == "" ? alm : `/imgs/${imageFat}`} width={250} height={250} alt="chb" />
          </motion.div>
          <motion.div className="flex flex-row justify-center">
            <Image
              src={imageStarch == "" ? rice : `/imgs/${imageStarch}`}
              width={250}
              height={250}
              alt="Oat"
            />
            <Image
              src={imageVeg == "" ? vegetable : `/imgs/${imageVeg}`}
              width={250}
              height={250}
              alt="Salade"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Lunch;
