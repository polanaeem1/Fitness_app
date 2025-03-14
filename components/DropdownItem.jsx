import React, { useState } from "react";

const DropdownItem = (props) => {
  const [isSelected, setIsSelected] = useState(props.selected);

  const handleClick = () => {
    props.setValue(
      `${(props.quantity * props.amount).toFixed(1)} ${
        props.amountType == "piece" ? "" : props.amountType + " of "
      } ${props.title}`
    );
    props.set(props.title + " (" + props.amount + ")");
    props.setImage(props.id + ".png");
    props.setIsOpen(false);
    let s = props.d;
    props.setMeal({
      ...props.mealData,
      [props.d]: {
        name: `${(props.quantity * props.amount).toFixed(1)} ${
          props.amountType == "piece" ? "" : props.amountType + " of "
        } ${props.title}`,
        img: props.id + ".png",
      },
    });
    console.log(props.quantity * props.amount);
  };

  return (
    <div className="flex flex-col w-full" onClick={handleClick}>
      <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
          <div className="w-full items-center flex">
            <div className="mx-2 -mt-1 w-1/2 text-gray-500">
              {props.title}
              <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                {(props.quantity * props.amount).toFixed(1)} {props.amountType}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
