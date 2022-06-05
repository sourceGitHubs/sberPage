import { CSSProperties } from "react";

export interface AverageTypes {
  mean: number | string;
  param: string;
  styleMean?: CSSProperties;
  styleParam?: CSSProperties;
}
