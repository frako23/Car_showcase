"use client";

import { CustomButtomprops } from "@/types";
import Image from "next/image";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rigthIcon,
}: CustomButtomprops) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rigthIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rigthIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
