import React, { ReactElement, useContext } from "react";
import { GridItem } from "@chakra-ui/react";
import CellData from "../../../models/cellData";
import { CellState, Colors } from "../../../constants/constants";
import boardContext, { BoardData } from "../../../context/boardContext";

interface Props {
  data: CellData;
}

const Cell = ({ data }: Props): ReactElement => {
  const { mouseIsDown, updateCellData } = useContext<BoardData>(boardContext);

  const getColor = (state: CellState): string => Colors[state];
  const handleChange = () => {
    updateCellData({
      ...data,
      state:
        data.state === CellState.WALL ? CellState.UNVISITED : CellState.WALL,
    });
  };

  return (
    <GridItem
      borderTop="1px solid black"
      borderLeft="1px solid black"
      transition="all 0.3s"
      background={getColor(data.state)}
      onMouseEnter={() => {
        if (mouseIsDown) {
          handleChange();
        }
      }}
      onMouseDown={handleChange}
    />
  );
};

export default Cell;
