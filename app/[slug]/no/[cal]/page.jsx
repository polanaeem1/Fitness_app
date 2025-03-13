"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import gb from "../../../../public/imgss/gb.jpg";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import BreakFastS from "../../../../components/BreakFastS";
import FirstSnackS from "../../../../components/FirstSnackS";
import LunchS from "../../../../components/LunchS";
import SecondSnackS from "../../../../components/SecondSnackS";
import DinnerS from "../../../../components/DinnerS";

const page = () => {
  const [imageMeat, setImageMeat] = useState("");
  const [imageMilk, setImageMilk] = useState("");
  const [imageStarch, setImageStarch] = useState("");
  const [imageFat, setImageFruit] = useState("");
  const [open, setOpen] = useState(1);

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
    vegetables: { img: "", name: "" },
    fat: { img: "", name: "" },
  });
  const [Snack1tData, setSnack1tData] = useState({
    milk: { img: "", name: "" },
    starch: { img: "", name: "" },
    fruits: { img: "", name: "" },
    meat: { img: "", name: "" },
    vegetables: { img: "", name: "" },
    fat: { img: "", name: "" },
  });
  const [LunchData, setLunchData] = useState({
    milk: { img: "", name: "" },
    starch: { img: "", name: "" },
    fruits: { img: "", name: "" },
    meat: { img: "", name: "" },
    vegetables: { img: "", name: "" },
    fat: { img: "", name: "" },
  });
  const [Snack2tData, setSnack2tData] = useState({
    milk: { img: "", name: "" },
    starch: { img: "", name: "" },
    fruits: { img: "", name: "" },
    meat: { img: "", name: "" },
    vegetables: { img: "", name: "" },
    fat: { img: "", name: "" },
  });
  const [DinnerData, setDinnerData] = useState({
    milk: { img: "", name: "" },
    starch: { img: "", name: "" },
    fruits: { img: "", name: "" },
    meat: { img: "", name: "" },
    vegetables: { img: "", name: "" },
    fat: { img: "", name: "" },
  });
  const components = [
    <BreakFastS mealData={BreakFastData} setMeal={setBreakFastData} />,
    <FirstSnackS mealData={Snack1tData} setMeal={setSnack1tData} />,
    <LunchS mealData={LunchData} setMeal={setLunchData} />,
    <SecondSnackS mealData={Snack2tData} setMeal={setSnack2tData} />,
    <DinnerS mealData={DinnerData} setMeal={setDinnerData} />,
  ];
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
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
      <div className="flex flex-col">
        <div className="flex flex-row text-white gap-20 md:p-16 h-screen items-center p-12">
          <AnimatePresence>
            {visibale && (
              <>
                <motion.div exit={{ opacity: 0 }} className="">
                  <h3 className="sm:text-[8rem] font-bold sm:mb-[-5rem] text-[4rem] mb-[-2.5rem]">
                    <span className="text-[#06a5f6] ">Eat</span>
                  </h3>
                  <h3 className="sm:text-[8rem] font-bold text-[4rem]">
                    Right
                  </h3>
                  <p className="sm:w-2/3">
                    Good nutrition is essential for overall health, growth, and
                    disease prevention. It involves eating a balanced diet that
                    provides the body with the necessary nutrients to function
                    properly. A well-rounded diet includes macronutrients such
                    as carbohydrates, proteins, and fats. It also contains
                    micronutrients like vitamins and minerals. Water is
                    essential for health, aiding digestion, temperature control,
                    and detoxification.
                  </p>
                  <button
                    className="mt-10 px-9 py-2 bg-[#06a5f6] font-bold text-xl rounded-lg cursor-pointer hover:bg-[#1d76a2]"
                    onClick={handleClick}
                  >
                    {parseFloat(cal).toFixed(2)} KCal
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
                  <div className=" absolute bottom-5">
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
      </div>
      <div className="flex flex-col  items-center gap-10 h-screen">
        <h1 className="sm:text-[8rem] font-bold  text-[4rem]  text-white">
          Tips
        </h1>
        <div className="flex flex-row flex-wrap justify-center justify-around">
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Set a Realistic Goal{" "}
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base text-white font-[outfit]">
              Aim to lose 5-15% of your body weight within 3 to 6 months for
              sustainable and healthy weight loss.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="mb-2 rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Meal Composition & Timing
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit] ">
              • Eat protein with every meal to maintain muscle mass and satiety.
              <br />
              • Include healthy fats to support brain function and hormone
              production.
              <br /> • Consume balanced meals and avoid processed and refined
              foods.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Daily Water Intake
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Men: Around 3.7 liters (125 oz) per day from fluids and food.{" "}
              <br /> • Women: Around 2.7 liters (91 oz) per day. <br />• Replace
              soft drinks with natural juices or water.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Reduce Inflammatory Foods
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Limit added sugars, processed meats, and refined grains to
              reduce inflammation and support overall health.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Smart Snacking
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Choose healthy snacks like Greek yogurt, mixed nuts, or hummus
              with veggies. <br /> • Avoid ultra-processed snacks high in sugar
              and trans fats.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Mindful Eating & Lifestyle
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Eat slowly and be mindful of portion sizes to prevent
              overeating. <br /> • Chew food thoroughly to aid digestion.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Get Enough Sleep
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Adults need 7-9 hours of sleep per night. <br /> • Maintain a
              consistent sleep schedule and create a relaxing bedtime routine.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 8}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 8 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Manage Stress{" "}
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Practice mindfulness, meditation, or deep breathing exercises to
              reduce stress levels.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 9}
            className="rounded-lg  px-4 outline-none max-w-96"
          >
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className={`border-b-0 transition-colors text-white font-[outfit] text-3xl ${
                open === 9 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              The Benefits of Healthy Eating{" "}
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base  text-white font-[outfit]">
              • Provides essential nutrients, boosting energy levels. <br /> •
              Supports brain function and improves focus. <br /> • Strengthens
              the immune system and reduces illness risk. <br /> • Helps reduce
              stress and anxiety. <br /> • Improves sleep quality, leading to
              better rest. <br /> • Promotes healthy, glowing skin.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-col  items-center gap-10 h-screen">
        <h1 className="sm:text-[8rem] font-bold  text-[4rem]  text-white">
          Recipes
        </h1>
        <div className="flex flex-col flex-wrap justify-center justify-around gap-12">
          <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-max">
            <div className="md:max-w-[30rem] max-w-[15rem] ">
              <Image src={gb} alt="gb" />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
              <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                Greek Yogurt Breakfast Bowl
              </h2>
              <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                <p className="text-white text-[1.1rem]">
                  Calories: ~320 kcal <br /> Ingredients: • ¼ cup uncooked oats
                  (20g) – 75 kcal <br />• 1 cup Greek yogurt (200g) – 150 kcal{" "}
                  <br />• 6 almonds (8g) – 50 kcal <br />• ¼ cup blueberries
                  (37g) – 21 kcal
                  <br /> • 1 tsp honey (optional, 7g) – 21 kcal <br />{" "}
                </p>
                <p className="text-white text-[1.1rem] mr-12">
                  Instructions: <br />
                  1. Cook the oats with water or milk if desired. Let them cool.
                  <br />
                  2. Mix the oats with Greek yogurt in a bowl. <br />
                  3. Top with blueberries and chopped almonds. <br />
                  4. Drizzle with honey if desired.
                </p>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-max">
            <div className="md:max-w-[30rem] max-w-[15rem] ">
              <Image src={gb} alt="gb" />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
              <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                Greek Yogurt Breakfast Bowl
              </h2>
              <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                <p className="text-white text-[1.1rem]">
                  Calories: ~320 kcal <br /> Ingredients: • ¼ cup uncooked oats
                  (20g) – 75 kcal <br />• 1 cup Greek yogurt (200g) – 150 kcal{" "}
                  <br />• 6 almonds (8g) – 50 kcal <br />• ¼ cup blueberries
                  (37g) – 21 kcal
                  <br /> • 1 tsp honey (optional, 7g) – 21 kcal <br />{" "}
                </p>
                <p className="text-white text-[1.1rem] mr-12">
                  Instructions: <br />
                  1. Cook the oats with water or milk if desired. Let them cool.
                  <br />
                  2. Mix the oats with Greek yogurt in a bowl. <br />
                  3. Top with blueberries and chopped almonds. <br />
                  4. Drizzle with honey if desired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
