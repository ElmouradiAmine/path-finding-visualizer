import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import useDimension from "../../hooks/useDimension";
import { generateGridData } from "../../utils/utils";
import MainGrid from "./MainGrid/MainGrid";

const Board = (): ReactElement => {
  const [{ columns, rows }, sizeRef] = useDimension();
  return (
    <Box padding="0 1.2rem" height="100%">
      <MainGrid
        ref={sizeRef}
        columns={columns}
        rows={rows}
        gridData={generateGridData(columns * rows)}
      />
    </Box>
  );
};

export default Board;
