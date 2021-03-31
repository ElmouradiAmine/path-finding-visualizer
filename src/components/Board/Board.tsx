import React, { ReactElement, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import useDimension from "../../hooks/useDimension";
import { initGridData } from "../../utils/utils";
import MainGrid from "./MainGrid/MainGrid";
import useMouse from "../../hooks/useMouse";
import BoardContext from "../../context/boardContext";
import useGridData from "../../hooks/useGridData";

const Board = (): ReactElement => {
  const [{ columns, rows }, sizeRef] = useDimension();
  const { gridData, setGridData, updateCellData } = useGridData();
  const mouseIsDown = useMouse();

  useEffect(() => {
    setGridData(initGridData(columns * rows));
  }, [columns, rows, setGridData]);

  return (
    <BoardContext.Provider
      value={{
        mouseIsDown,
        updateCellData,
      }}
    >
      <Box padding="0 1.2rem" height="100%">
        <MainGrid
          ref={sizeRef}
          columns={columns}
          rows={rows}
          gridData={gridData}
        />
      </Box>
    </BoardContext.Provider>
  );
};

export default Board;
