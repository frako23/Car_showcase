"use client";

import { CustomButtomprops } from "@/types";
import Image from "next/image";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtomprops) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
