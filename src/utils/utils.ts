import { v4 as uuidv4 } from "uuid";
import {
  cellState,
  CELL_HEIGHT,
  CELL_WIDTH,
  Colors,
} from "../constants/constants";
import CellData from "../models/cellData";

export const getNumColumns = (height: number): number =>
  Math.floor(height / CELL_WIDTH);

export const getNumRows = (width: number): number =>
  Math.floor(width / CELL_HEIGHT);

export const generateGridData = (size: number): CellData[] => {
  const gridData: CellData[] = [];
  for (let i = 0; i < size; i += 1) {
    gridData.push({
      state: cellState.UNVISITED,
      color: Colors.RED,
      id: uuidv4(),
    });
  }
  return gridData;
};
