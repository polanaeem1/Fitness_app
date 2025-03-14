"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import gb from "../../../../public/imgss/gb.jpg";
import mango from "../../../../public/imgss/mango.jpg";
import se from "../../../../public/imgss/se.jpg";

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
      <div className="flex flex-col gap-12">
        <div className="flex flex-col  items-center gap-10 ">
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
                • Eat protein with every meal to maintain muscle mass and
                satiety.
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
                <br /> • Women: Around 2.7 liters (91 oz) per day. <br />•
                Replace soft drinks with natural juices or water.
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
                with veggies. <br /> • Avoid ultra-processed snacks high in
                sugar and trans fats.
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
                • Practice mindfulness, meditation, or deep breathing exercises
                to reduce stress levels.
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
                the immune system and reduces illness risk. <br /> • Helps
                reduce stress and anxiety. <br /> • Improves sleep quality,
                leading to better rest. <br /> • Promotes healthy, glowing skin.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col  items-center gap-10 ">
          <h1 className="sm:text-[8rem] font-bold  text-[4rem]  text-white">
            Recipes
          </h1>
          <div className="flex flex-col flex-wrap justify-center justify-around gap-12">
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={gb} alt="gb" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Greek Yogurt Breakfast Bowl
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~320 kcal <br /> Ingredients: <br /> • ¼ cup
                    uncooked oats (20g) – 75 kcal <br />• 1 cup Greek yogurt
                    (200g) – 150 kcal <br />• 6 almonds (8g) – 50 kcal <br />• ¼
                    cup blueberries (37g) – 21 kcal
                    <br /> • 1 tsp honey (optional, 7g) – 21 kcal <br />{" "}
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions: <br />
                    1. Cook the oats with water or milk if desired. Let them
                    cool.
                    <br />
                    2. Mix the oats with Greek yogurt in a bowl. <br />
                    3. Top with blueberries and chopped almonds. <br />
                    4. Drizzle with honey if desired.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Healthy Mango & Banana Smoothie{" "}
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~280 kcal
                    <br /> Ingredients:
                    <br /> • ¾ cup mango (125g) – 80 kcal
                    <br /> • ½ banana (50g) – 45 kcal <br /> • 1 cup milk
                    (250ml) – 120 kcal
                    <br /> • 4 almonds (5g) – 30 kcal <br /> • ½ tsp honey
                    (optional, 3g) – 10 kcal
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Blend all ingredients until smooth.
                    <br /> 2. Serve chilled and enjoy as a nutritious snack.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={se} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Scrambled Eggs with Whole Grain Toast
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~290 kcal
                    <br /> Ingredients: <br />• 1 whole egg (50g) – 70 kcal{" "}
                    <br />• 1 egg white (33g) – 17 kcal <br />• 1 slice whole
                    grain toast (30g) – 70 kcal
                    <br /> • ½ tsp olive oil (2.5g) – 22 kcal <br />• ½ cup
                    cooked vegetables (75g) – 40 kcal <br />• Salt & pepper to
                    taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Heat olive oil in a pan and scramble the egg and
                    egg white.
                    <br /> 2. Toast the bread while the eggs cook.
                    <br /> 3. Serve scrambled eggs with toast and cooked
                    vegetables on the side.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Grilled Beef with Mashed Potatoes & Vegetables
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~350 kcal
                    <br /> Ingredients:
                    <br /> • 30g grilled beef – 65 kcal
                    <br /> • ½ cup mashed potatoes (120g) – 105 kcal <br />• ½
                    cup cooked vegetables (75g) – 40 kcal <br />• 1 tsp olive
                    oil (5g) – 45 kcal <br />• Salt & pepper to taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Grill the beef with a little salt and pepper.
                    <br /> 2. Prepare mashed potatoes with water or skim milk.
                    <br />
                    3. Serve beef with mashed potatoes and cooked vegetables.
                    <br /> 4. Drizzle olive oil over the vegetables before
                    serving.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Rice & Salmon Bowl
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~340 kcal
                    <br /> Ingredients:
                    <br /> • 30g grilled salmon – 60 kcal <br /> • ⅓ cup cooked
                    rice (50g) – 75 kcal
                    <br /> • ½ cup cooked vegetables (75g) – 40 kcal <br /> • 1
                    tsp olive oil (5g) – 45 kcal <br /> • Salt & pepper to taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions: <br />
                    1. Grill the salmon with a little salt and pepper.
                    <br /> 2. Serve it with cooked rice and steamed vegetables.
                    <br />
                    3. Drizzle olive oil over the vegetables before serving.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Chicken & Tortilla Wrap
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~340 kcal
                    <br /> Ingredients:
                    <br /> • 1 whole wheat tortilla (50g) – 130 kcal
                    <br /> • 30g grilled chicken – 50 kcal
                    <br /> • ½ cup cooked vegetables (75g) – 40 kcal
                    <br /> • 1 tsp olive oil (5g) – 45 kcal <br /> • 1 tbsp
                    Greek yogurt (15g) – 15 kcal <br /> • Salt & pepper to taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Spread Greek yogurt over the tortilla.
                    <br /> 2. Add grilled chicken and cooked vegetables.
                    <br /> 3. Drizzle with olive oil and season with salt and
                    pepper.
                    <br /> 4. Wrap and serve warm or cold. Guava & Orange Fruit
                    Salad
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Guava & Orange Fruit Salad{" "}
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~190 kcal
                    <br /> Ingredients:
                    <br /> • 1 whole guava (100g) – 68 kcal
                    <br /> • 1 small orange (130g) – 62 kcal
                    <br /> • 12 fresh cherries (60g) – 50 kcal <br />• ½ tsp
                    lemon juice – 4 kcal <br />• 1 tsp honey (optional, 7g) – 21
                    kcal
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Slice guava and orange into small pieces.
                    <br /> 2. Add cherries and mix well. <br /> 3. Drizzle with
                    lemon juice and honey if desired. <br /> 4. Serve fresh as a
                    light dessert or snack.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Quinoa & Egg Bowl
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~300 kcal
                    <br />
                    Ingredients: <br />• ⅓ cup cooked quinoa (43g) – 95 kcal{" "}
                    <br />• 1 boiled egg (50g) – 70 kcal <br />• ½ cup cooked
                    vegetables (75g) – 40 kcal <br />• 1 tsp olive oil (5g) – 45
                    kcal <br />• Salt & pepper to taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Cook the quinoa and set it aside.
                    <br /> 2. Boil the egg, then slice it.
                    <br /> 3. Mix quinoa with cooked vegetables and top with the
                    egg.
                    <br /> 4. Drizzle with olive oil, season with salt and
                    pepper, and serve warm.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Baked Fish with Mashed Potatoes
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~330 kcal
                    <br />
                    Ingredients: <br />• 30g baked fish – 50 kcal <br />• ½ cup
                    mashed potatoes (120g) – 105 kcal
                    <br /> • ½ cup cooked vegetables (75g) – 40 kcal <br />• 1
                    tsp olive oil (5g) – 45 kcal <br />• 1 tsp lemon juice – 4
                    kcal <br />• Salt & pepper to taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions: <br />
                    1. Season the fish with salt, pepper, and lemon juice, then
                    bake at 180°C for 10-15 minutes.
                    <br /> 2. Prepare mashed potatoes using water or skim milk.
                    <br /> 3. Serve the baked fish with mashed potatoes and
                    cooked vegetables.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={mango} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Liver with Rice & Vegetables
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~330 kcal
                    <br />
                    Ingredients: <br />• 30g grilled liver – 55 kcal
                    <br /> • ⅓ cup cooked rice (50g) – 75 kcal <br />• ½ cup
                    cooked vegetables (75g) – 40 kcal
                    <br /> • 1 tsp olive oil (5g) – 45 kcal <br />• Salt &
                    pepper to taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Grill the liver with a little salt and pepper.
                    <br /> 2. Serve with cooked rice and steamed vegetables.
                    <br /> 3. Drizzle olive oil over the vegetables before
                    serving.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <img src={"https://modifyhealth.com/cdn/shop/products/ISO_Grilled-Steak-with-Sumac-Carrots_Broccoli-_-Mashed-Potatoes_grande.png?v=1614026268"} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Grilled Turkey with Mashed Potatoes & Vegetables
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem]">
                    Calories: ~320 kcal
                    <br />
                    Ingredients: <br />• 30g grilled turkey – 50 kcal <br />• ½
                    cup mashed potatoes (120g) – 105 kcal
                    <br /> • ½ cup cooked vegetables (75g) – 40 kcal
                    <br /> • 1 tsp olive oil (5g) – 45 kcal
                    <br /> • 1 tsp lemon juice – 4 kcal <br />• Salt & pepper to
                    taste
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Instructions:
                    <br /> 1. Grill the Turkey: Season the turkey with salt and
                    pepper, then grill over medium heat for 5-7 minutes until
                    fully cooked.
                    <br /> 2. Prepare Mashed Potatoes: Boil potatoes until soft,
                    then mash them with a little water or skim milk for a smooth
                    texture.
                    <br /> 3. Cook the Vegetables: Steam or lightly sauté the
                    vegetables.
                    <br /> 4. Assemble the Plate: Serve the grilled turkey
                    alongside the mashed potatoes and vegetables.
                    <br /> 5. Final Touch: Drizzle olive oil and lemon juice
                    over the vegetables, then serve warm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
