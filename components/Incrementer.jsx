import React, { useState } from "react";
import { motion } from "motion/react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const Incrementer = (props) => {
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setValue(0);
    } else if (parseInt(e.target.value) >= 0) {
      setValue(parseInt(e.target.value));
      props.setValue(parseInt(e.target.value));
    }
  };

  const increment = () => {
    setValue((value) => value + 1);
    props.setValue((value) => value + 1);
  };
  const decrement = () => {
    if (value !== 0) {
      setValue((value) => value - 1);
      props.setValue((value) => value - 1);
    }
  };

  return (
    <motion.div className=" p-3 flex text-lg items-center text-white placeholder-gray-500 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-60 bg-transparent transition duration-300 ease-in-out hover:border-blue-500">
      <motion.button
        type="button"
        className="text-[#ff4747] w-[3.3rem] h-[3.3rem]"
        onClick={decrement}
      >
        <FaCircleMinus className="h-[3rem] w-[3rem] hover:h-[3.2rem] hover:w-[3.2rem] " />
      </motion.button>
      <input
        type="text"
        className="bg-transparent outline-none border-x-0 border-gray-300 h-11 font-medium text-center text-white text-xl focus:ring-blue-500 focus:border-blue-500 block w-36 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={handleInputChange}
        required
      />
      <button
        type="button"
        className="text-[#34d399] w-[3.3rem] h-[3.3rem]"
        onClick={increment}
      >
        <FaCirclePlus className="h-[3rem] w-[3rem] hover:h-[3.2rem] hover:w-[3.2rem]" />
      </button>
    </motion.div>
  );
};

export default Incrementer;
