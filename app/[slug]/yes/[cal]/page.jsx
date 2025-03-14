"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Dropdown from "../../../../components/Dropdown";
import FirstSnack from "../../../../components/FirstSnack";
import BreakFast from "../../../../components/BreakFast";
import Lunch from "../../../../components/Lunch";
import SecondSnack from "../../../../components/SecondSnack";
import Dinner from "../../../../components/Dinner";
import p from "../../../../public/imgs/p.jpg";
import po from "../../../../public/imgs/po.jpg";
import sh from "../../../../public/imgs/sh.jpg";
import ch from "../../../../public/imgs/ch.jpg";
import ts from "../../../../public/imgs/ts.webp";
import tc from "../../../../public/imgss/tc.jpg";
import ot from "../../../../public/imgs/ot.jpg";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
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
  });
  const [Snack1tData, setSnack1tData] = useState({
    fruits: { img: "", name: "" },
    milk: { img: "", name: "" },
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
    vegetable: { img: "", name: "" },
    starch: { img: "", name: "" },
    milk: { img: "", name: "" },
    meat: { img: "", name: "" },
    fruits: { img: "", name: "" },
  });
  const components = [
    <BreakFast mealData={BreakFastData} setMeal={setBreakFastData} />,
    <FirstSnack mealData={Snack1tData} setMeal={setSnack1tData} />,
    <Lunch mealData={LunchData} setMeal={setLunchData} />,
    <SecondSnack mealData={Snack2tData} setMeal={setSnack2tData} />,
    <Dinner mealData={DinnerData} setMeal={setDinnerData} />,
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
                Cooking Measurement
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base text-white font-[outfit]">
                - CHICKEN BREAST WEIGHT COOKED
                <br /> - LEAN STEAK WEIGHT COOKED
                <br /> - RICE WEIGHT COOKed
                <br /> - POTATOES WEIGHT UNCOOKED
                <br /> - FISH WEIGHT COOKED
                <br /> -Oats weight uncooked
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
                Basics
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base  text-white font-[outfit] ">
                - Drink at least 3 liters of water per day. <br />
                - Limit salt intake to 5 grams per day. <br />- Maintain a daily
                cardio routine.
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
          </div>
        </div>
        <div className="flex flex-col  items-center gap-10 ">
          <h1 className="sm:text-[8rem] font-bold  text-[4rem]  text-white">
            Recipes
          </h1>
          <div className="flex flex-col flex-wrap justify-center justify-around gap-12">
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={p} alt="gb" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Banana and Oat Pudding (2 Servings)
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem] xl:w-[37rem]">
                    Ingredients: <br /> • 100g oats <br />• 230g almond milk{" "}
                    <br />• 50g ripe banana <br />• 15g chia seeds <br />• A
                    pinch of sea salt
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Preparation:
                    <br /> 1. Blend the banana with a cup of almond milk or any
                    other plant-based milk.
                    <br /> 2. Place the oats in a large bowl, then add the
                    banana milk and the remaining ingredients.
                    <br /> 3. Mix well with a spoon, ensuring all ingredients
                    are evenly distributed.
                    <br /> 4. You can enjoy it immediately or refrigerate
                    overnight for a creamy texture.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={po} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Baked Potato Wedges
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem] xl:w-[37rem]">
                    Ingredients:
                    <br /> • 100g potatoes
                    <br /> • 1 tsp dried rosemary leaves
                    <br /> • 1 tsp dried oregano
                    <br /> • 1 tsp garlic powder
                    <br /> • ½ tsp paprika • ½ tsp black pepper
                    <br /> • ½ tsp salt
                    <br /> • 10g olive oil (optional)
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Preparation:
                    <br /> 1. Cut the potatoes into quarters (¾ inch thick).
                    <br /> 2. Toss the potato wedges with rosemary, oregano,
                    garlic powder, black pepper, paprika, and olive oil.
                    <br /> 3. Mix well in a bowl to evenly coat the potatoes.
                    <br /> 4. Preheat the oven to 350°F (175°C) and roast the
                    potatoes on the top rack for 20-30 minutes or until crispy
                    and golden brown.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={sh} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Shrimp and Lemon Noodles
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem] xl:w-[37rem]">
                    Ingredients:
                    <br /> • 100g noodles
                    <br /> • 100g shrimp
                    <br /> • 4 cloves garlic, minced
                    <br /> • Salt and pepper, to taste
                    <br /> • Thyme • Oregano
                    <br /> • ½ cup water
                    <br /> • ¼ cup lemon juice
                    <br /> • ¼ cup chopped parsley
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Preparation:
                    <br /> 1. In a non-stick pan, spray some oil and add the
                    shrimp, oregano, and thyme.
                    <br /> 2. Cook for 1 minute, then flip the shrimp when it
                    starts turning slightly orange. Add salt and pepper.
                    <br /> 3. Add the minced garlic and sauté for a moment.
                    Then, pour in the water and lemon juice. Let it cook for 1
                    minute.
                    <br /> 4. Add the noodles, stir well, and mix in the chopped
                    parsley before serving.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={ch} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Grilled Lemon Chicken Breasts
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem] xl:w-[37rem]">
                    Ingredients: <br /> • 100g chicken breast <br /> • Salt and
                    pepper, to taste <br /> • 1 tsp oregano
                    <br /> • 1 garlic clove, minced <br /> • ¼ cup water <br />{" "}
                    • 1 tbsp lemon juice <br /> • 1 tsp dried rosemary
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Preparation:
                    <br /> 1. Wash the chicken and season it with salt, pepper,
                    half of the oregano, and minced garlic.
                    <br /> 2. In a non-stick pan, spray some oil and cook the
                    chicken until browned on all sides (about 1 minute per
                    side).
                    <br /> 3. Transfer the chicken to a baking tray and sprinkle
                    with the remaining oregano, rosemary, and garlic.
                    <br /> 4. Add water to the tray and cover with foil.
                    <br /> 5. Bake in the oven for 20-30 minutes.
                    <br /> 6. Drizzle with lemon juice before serving.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={ts} alt="mango" className="md:h-[25rem]" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Tuna Salad
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem] xl:w-[37rem]">
                    Ingredients:
                    <br /> • 160g canned white tuna
                    <br /> • 50g bell pepper
                    <br /> • 50g red onion, chopped
                    <br /> • 50g cucumber, chopped
                    <br /> • 20g fresh parsley, chopped
                    <br /> • 28g lemon juice
                    <br /> • ½ tsp salt
                    <br /> • ½ tsp dried oregano
                    <br /> • ½ tsp dried basil
                    <br /> • ½ tsp garlic powder
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Preparation:
                    <br /> 1. In a bowl, mix oregano, basil, salt, garlic
                    powder, parsley, and lemon juice. Whisk everything together
                    until well combined.
                    <br /> 2. In a large bowl, add the bell pepper, onion,
                    cucumber, and tuna. Pour the dressing over the mixture and
                    gently toss until well combined.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem]">
              <div className="md:max-w-[30rem]  max-w-[15rem]">
                <Image src={tc} alt="mango" className="md:h-[20rem]" />
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
            <div className="flex xl:flex-row gap-12 bg-[#90abb9d7] rounded-3xl overflow-hidden flex-col max-w-[15rem] md:max-w-[30rem] xl:max-w-[90rem] xl:w-[90rem] mb-16">
              <div className="md:max-w-[30rem] max-w-[15rem] ">
                <Image src={ot} alt="mango" />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center xl:items-start">
                <h2 className="xl:text-[2.5rem]  text-white md:text-[1.5rem] text-[1.1rem]">
                  Oatmeal Cookies
                </h2>
                <div className="flex xl:flex-row md:gap-12 gap-4 flex-col ml-6 mb-4 xl:ml-0 xl:mb-0">
                  <p className="text-white text-[1.1rem] xl:w-[37rem]">
                    Ingredients:
                    <br /> • 100g rolled oats
                    <br /> • 10g stevia
                    <br /> • 2 tsp baking powder
                    <br /> • ½ tsp sea salt
                    <br /> • 50g oat flour
                    <br /> • ½ tsp cinnamon
                    <br /> • 2 eggs (whole or just egg whites)
                    <br /> • 50g peanut butter
                    <br /> • 50g oat milk
                    <br /> • 3 tsp vanilla extract
                    <br /> • Dark chocolate chips (optional)
                  </p>
                  <p className="text-white text-[1.1rem] mr-12">
                    Preparation:
                    <br /> 1. In a bowl, mix the dry ingredients (oats, baking
                    powder, salt, oat flour, and cinnamon).
                    <br /> 2. In another bowl, whisk the eggs until foamy. Add
                    peanut butter and whisk again, then add oat milk and vanilla
                    extract, mixing until well combined.
                    <br /> 3. Pour the dry ingredients into the wet ingredients
                    and mix until fully combined. Then, fold in the chocolate
                    chips if using.
                    <br /> 4. Cover the bowl tightly and refrigerate for at
                    least 2 hours.
                    <br /> 5. Line a baking sheet with parchment paper and scoop
                    small dough balls onto the sheet using a spoon.
                    <br /> 6. Bake at 180°C (350°F) for 10-12 minutes. Remove
                    from the oven and let them cool before serving.
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
