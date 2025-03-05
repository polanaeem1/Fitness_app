"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import egg from "../public/imgs/3.png";
import oat from "../public/imgs/1.png";
import salade from "../public/imgs/salade.png";
import milk from "../public/imgs/4.png";
import Dropdown from "@/components/Dropdown";

const BreakFast = (props) => {
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
  const [breakFast, setBreakFast] = useState([]);
  const [visibale, setVisibale] = useState(false);
  const [meat, setMeat] = useState(`Eggs`);
  const [milk1, setMilk1] = useState("milk ( 1 CUP (240 ML) )");
  const [fruit, setFruit] = useState("banana");
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
    setBreakFast([
      Math.round(0.5 * milkServes),
      Math.round(0.4 * StarchServes),
      Math.round(0.22 * FruitServes),
      Math.round(0.3 * MeatServes),
    ]);
    console.log(props.mealData);
    
    props.mealData.meat.name === ""
      ? setMeat(`${Math.round(0.3 * MeatServes)} Eggs`)
      : setMeat(props.mealData.meat.name);
    props.mealData.milk.name === ""
      ? setMilk1(`${Math.round(0.5 * milkServes) * 240} ML of Milk`)
      : setMilk1(props.mealData.milk.name);
    props.mealData.fruits.name === ""
      ? setFruit(`${Math.round(0.22 * FruitServes) * 1} Banana`)
      : setFruit(props.mealData.fruits.name);
    props.mealData.starch.name === ""
      ? setStarch(`${Math.round(0.4 * StarchServes) * 0.25} Cup of oat`)
      : setStarch(props.mealData.starch.name);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ amount: "all" }}
        animate={{ opacity: !visibale ? 1 : 0 }}
        className=" basis-3/6"
      >
        <h3 className="xl:text-[8rem] font-bold text-[6rem]">
          <span className="text-[#06a5f6]">Break</span>
          fast
        </h3>
        <div className="flex flex-row mt-4">
          <Dropdown
            title={milk1}
            breakFast={breakFast}
            meal={"breakfast"}
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
            meal={"breakfast"}
            d="starch"
            index={1}
            set={setStarch}
            setImage={setImageStarch}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
        <div className="flex flex-row">
          <Dropdown
            title={meat}
            breakFast={breakFast}
            d="meat"
            meal={"breakfast"}
            index={3}
            set={setMeat}
            setImage={setImageMeat}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
          <Dropdown
            title={fruit}
            breakFast={breakFast}
            d="fruits"
            meal={"breakfast"}
            index={2}
            set={setFruit}
            setImage={setImageFruit}
            setMeal={props.setMeal}
            mealData={props.mealData}
          />
        </div>
      </motion.div>
      <motion.div
        className="basis-3/6 flex flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: !visibale ? 1 : 0 }}
      >
        <motion.div className="flex items-center xl:w-fit lg:w-1/2">
          <Image src={milk} width={339.25} height={600} alt="milk" />
        </motion.div>
        <motion.div className="flex flex-col flex-wrap">
          <motion.div className="flex flex-row flex-wrap  justify-center ">
            {props.mealData.meat.img == "" || props.mealData.meat.img == "3.png" ? (
              <>
                <Image src={egg} width={120} height={150} alt="Egg"  className=" lg:w-[6rem] lg:h-[6rem]"/>
                <Image src={egg} width={120} height={150} alt="Egg" className=" lg:w-[6rem] lg:h-[6rem]"/>
                <Image src={egg} width={120} height={150} alt="Egg" className=" lg:w-[6rem] lg:h-[6rem]"/>
              </>
            ) : (
              <>
                <Image
                  src={`/imgs/${props.mealData.meat.img}`}
                  width={250}
                  height={250}
                  alt="Egg"
                  className="xl:w-fit lg:w-1/2"
                />
              </>
            )}
          </motion.div>
          <motion.div className="flex flex-row  justify-center ">
            <Image
              src={props.mealData.starch.img == "" ? oat : `/imgs/${props.mealData.starch.img}`}
              width={250}
              height={250}
              alt="Oat"
              className=" lg:w-1/2"
            />
            <Image
              src={props.mealData.fruits.img == "" ? salade : `/imgs/${props.mealData.fruits.img}`}
              width={250}
              height={250}
              alt="Salade"
              className=" lg:w-1/2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default BreakFast;
