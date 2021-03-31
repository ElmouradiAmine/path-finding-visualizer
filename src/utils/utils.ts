import { v4 as uuidv4 } from "uuid";
import { CellState, CELL_HEIGHT, CELL_WIDTH } from "../constants/constants";
import CellData from "../models/cellData";

export const getNumColumns = (height: number): number =>
  Math.floor(height / CELL_WIDTH);

export const getNumRows = (width: number): number =>
  Math.floor(width / CELL_HEIGHT);

// function randomEnum<T>(anEnum: T): T[keyof T] {
//   const enumValues = (Object.keys(anEnum)
//     .map((n) => Number.parseInt(n, 4))
//     .filter((n) => !Number.isNaN(n)) as unknown) as T[keyof T][];
//   const randomIndex = Math.floor(Math.random() * enumValues.length);
//   const randomEnumValue = enumValues[randomIndex];
//   return randomEnumValue;
// }

export const initGridData = (size: number): CellData[] => {
  const gridData: CellData[] = [];
  for (let i = 0; i < size; i += 1) {
    gridData.push({
      id: uuidv4(),
      state: CellState.UNVISITED,
    });
  }
  return gridData;
};
