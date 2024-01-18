import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtomprops {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rigthIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer?: string;
  setManufacturer?: (manufacturer: string) => void;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<number>>;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: Dispatch<SetStateAction<number>>;
}

export interface SearchBarProps {
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
}
