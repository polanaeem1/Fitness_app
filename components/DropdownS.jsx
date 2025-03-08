import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import data from "../app/dataS";

const DropdownS = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  
  return (
    <div
      className="w-full flex flex-col items-center"
      onBlur={() => {
        setTimeout(() => {
          setIsOpen(!isOpen);
        }, 200);
      }}
    >
      <div className="w-full pr-2">
        <div className="flex flex-col items-center relative">
          <div className="w-full">
            <div className="my-2 p-3 bg-white flex border border-gray-200 rounded md:text-xl text-sm">
              <input
                placeholder={value === "" ? props.title : value}
                className="p-1 px-2 appearance-none outline-none w-full  cursor-pointer placeholder:text-black"
                onClick={() => setIsOpen(!isOpen)}
              />
              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-up w-4 h-4"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <>
              <div className="shadow absolute  bg-white top-100 z-40 w-full left-0 rounded max-h-44 overflow-y-auto">
                {data[props.meal][props.d].map((e) => {
                  return (
                    <DropdownItem
                      setIsOpen={setIsOpen}
                      selected={false}
                      setValue={setValue}
                      title={e.title}
                      quantity={props.breakFast[props.index]}
                      amount={e.amountInt}
                      amountType={e.amountType}
                      key={e.id}
                      id={e.id}
                      set={props.set}
                      setImage={props.setImage}
                      setMeal={props.setMeal}
                      mealData={props.mealData}
                      d={props.d}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownS;
