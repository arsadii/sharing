import React from "react";
import Button from "../Button";

const ButtonWrapper = () => {
  const CalcButtons = [
    {
      label: "C",
      type: "secondary",
    },
    {
      label: "+/-",
      type: "secondary",
    },
    {
      label: "%",
      type: "secondary",
    },
    {
      label: "/",
      type: "primary",
    },
    {
      label: "7",
      type: "normal",
    },
    {
      label: "8",
      type: "normal",
    },
    {
      label: "9",
      type: "normal",
    },
    {
      label: "x",
      type: "primary",
    },
    {
      label: "4",
      type: "normal",
    },
    {
      label: "5",
      type: "normal",
    },
    {
      label: "6",
      type: "normal",
    },
    {
      label: "-",
      type: "primary",
    },
    {
      label: "1",
      type: "normal",
    },
    {
      label: "2",
      type: "normal",
    },
    {
      label: "3",
      type: "normal",
    },
    {
      label: "+",
      type: "primary",
    },
    {
      label: "0",
      type: "normal",
      span: 2,
    },
    {
      label: ".",
      type: "normal",
    },
    {
      label: "=",
      type: "primary",
    },
  ];

  return (
    <div className="flex-grow ">
      <div className="grid w-full h-full grid-cols-4 gap-2">
        {CalcButtons.map((btn) => {
          return (
            <div
              key={btn.label}
              className={`min-w-[86px] col-span-${btn.span} min-h-[82px]`}
            >
              <Button type={btn.type}>{btn.label}</Button>
            </div>
          );
        })}
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ButtonWrapper;
