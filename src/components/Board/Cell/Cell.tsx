import React, { ReactElement } from "react";
import { GridItem } from "@chakra-ui/react";
import CellData from "../../../models/cellData";

interface Props {
  data: CellData;
}

const Cell = ({ data }: Props): ReactElement => {
  return (
    <GridItem
      borderTop="1px solid black"
      borderLeft="1px solid black"
      background={data.color}
    />
  );
};

export default Cell;
