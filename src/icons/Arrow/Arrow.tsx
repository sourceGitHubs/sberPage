import React, { FC } from "react";

import { ArrowProps } from "./types";

export const Arrow: FC<ArrowProps> = ({
  width = 16,
  height = 16,
  color = "#939393",
  direction = "up",
}) => {
  const rotate = {
    up: "180",
    right: "-90",
    down: "0",
    left: "90",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      transform={`rotate(${rotate[direction]})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 5.81669C13 5.9396 12.9548 6.0625 12.8579 6.15953L8.61582 10.4094C8.27361 10.7522 7.71832 10.7522 7.38257 10.4094L3.14044 6.15953C2.95319 5.97194 2.95319 5.66145 3.14044 5.47386C3.32768 5.28627 3.63761 5.28627 3.82486 5.47386L8.00242 9.65902L12.18 5.47386C12.3672 5.28627 12.6772 5.28627 12.8644 5.47386C12.9548 5.57089 13 5.69379 13 5.81669Z"
        fill={color}
      />
    </svg>
  );
};
