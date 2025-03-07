"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import FirstSnack from "@/components/FirstSnack";
import BreakFast from "@/components/BreakFast";
import Lunch from "@/components/Lunch";
import SecondSnack from "@/components/SecondSnack";
import Dinner from "@/components/Dinner";
import BreakFastS from "@/components/BreakFastS";
import FirstSnackS from "@/components/FirstSnackS";
import LunchS from "@/components/LunchS";
import SecondSnackS from "@/components/SecondSnackS";
import DinnerS from "@/components/DinnerS";

const page = () => {
  const [imageMeat, setImageMeat] = useState("");
  const [imageMilk, setImageMilk] = useState("");
  const [imageStarch, setImageStarch] = useState("");
  const [imageFat, setImageFruit] = useState("");
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
  const [visibale, setVisibale] = useState(true);
  const [meat, setMeat] = useState("eggs");
  const [milk1, setMilk1] = useState("milk ( 1 CUP (240 ML) )");
  const [fruit, setFruit] = useState("banana");
  const [starch, setStarch] = useState("oats ( 1/4 CUP )");
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldRender2, setShouldRender2] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [BreakFastData, setBreakFastData] = useState({
    milk: { img: "", name: "" },
    starch: { img: "", name: "" },
    fruits: { img: "", name: "" },
    meat: { img: "", name: "" },
  });
  const [Snack1tData, setSnack1tData] = useState({
    fruits: { img: "", name: "" },
  });
  const [LunchData, setLunchData] = useState({
    vegetable: { img: "", name: "" },
    starch: { img: "", name: "" },
    fat: { img: "", name: "" },
    meat: { img: "", name: "" },
  });
  const [Snack2tData, setSnack2tData] = useState({
    vegetable: { img: "", name: "" },
    fruits: { img: "", name: "" },
    fat: { img: "", name: "" },
    meat: { img: "", name: "" },
  });
  const [DinnerData, setDinnerData] = useState({
    vegetable:{ img: "", name: "" },
    starch:{ img: "", name: "" },
    milk:{ img: "", name: "" },
    meat:{ img: "", name: "" },
  });
  const components = [
    <BreakFastS mealData={BreakFastData} setMeal={setBreakFastData} />,
    <FirstSnackS mealData={Snack1tData} setMeal={setSnack1tData} />,
    <LunchS mealData={LunchData} setMeal={setLunchData} />,
    <SecondSnackS mealData={Snack2tData} setMeal={setSnack2tData} />,
    <DinnerS mealData={DinnerData} setMeal={setDinnerData} />,
  ];

  const handleClick = () => {
    setVisibale(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  const nextComponent = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevComponent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
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
  }, []);

  return (
    <>
      <div className="flex flex-row text-white gap-20 md:p-16 h-screen items-center p-12">
        <AnimatePresence>
          {visibale && (
            <>
              <motion.div exit={{ opacity: 0 }} className="">
                <h3 className="sm:text-[8rem] font-bold sm:mb-[-5rem] text-[4rem] mb-[-2.5rem]">
                  <span className="text-[#06a5f6] ">Eat</span>
                </h3>
                <h3 className="sm:text-[8rem] font-bold text-[4rem]">Right</h3>
                <p className="sm:w-2/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum reprehenderit non veritatis et quas, quasi minus id
                  dolore cumque assumenda soluta minima dolor libero inventore
                  quo accusantium temporibus voluptatum consectetur.
                </p>
                <button
                  className="mt-10 px-9 py-2 bg-[#06a5f6] font-bold text-xl rounded-lg cursor-pointer hover:bg-[#1d76a2]"
                  onClick={handleClick}
                >
                  Show Me
                </button>
              </motion.div>
            </>
          )}
          {shouldRender ? (
            ""
          ) : (
            <>
              <div className="flex flex-col items-center justify-around h-screen w-full">
                <div className="flex flex-row text-white  md:w-full items-center w-64">
                  {components[currentIndex]}
                </div>
                <div className=" absolute bottom-10">
                  <button
                    type="button"
                    className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
                    onClick={prevComponent}
                    disabled={currentIndex === 0}
                  >
                    <div className="flex flex-row align-middle">
                      <p className="ml-2">Prev</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
                    onClick={nextComponent}
                    disabled={currentIndex === components.length - 1}
                  >
                    <div className="flex flex-row align-middle">
                      <span className="mr-2">Next</span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default page;
