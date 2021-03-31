import { useState } from "react";
import CellData from "../models/cellData";

const useGridData = (): {
  gridData: CellData[];
  setGridData: React.Dispatch<React.SetStateAction<CellData[]>>;
  updateCellData: (newCellData: CellData) => void;
} => {
  const [gridData, setGridData] = useState<CellData[]>([]);

  const updateCellData = (newCellData: CellData) => {
    setGridData((prevState) => {
      const newState: CellData[] = [];
      prevState.forEach((cellData) => {
        if (cellData.id === newCellData.id) {
          newState.push({
            ...newCellData,
          });
          return;
        }
        newState.push({
          ...cellData,
        });
      });
      return newState;
    });
  };

  return {
    gridData,
    setGridData,
    updateCellData,
  };
};

export default useGridData;
