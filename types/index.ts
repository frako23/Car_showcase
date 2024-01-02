import { MouseEventHandler } from "react";

export interface CustomButtomprops {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
