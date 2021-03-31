import React from "react";
import CellData from "../models/cellData";

export interface BoardData {
  mouseIsDown: boolean;
  updateCellData: (cellData: CellData) => void;
}
const boardContext = React.createContext<BoardData>({
  mouseIsDown: false,
  updateCellData: () => {},
});

export default boardContext;
