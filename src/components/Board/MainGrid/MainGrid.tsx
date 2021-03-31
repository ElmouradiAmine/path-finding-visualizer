import { Grid } from "@chakra-ui/react";
import React from "react";
import CellData from "../../../models/cellData";
import Cell from "../Cell/Cell";

interface Props {
  gridData: CellData[];
  columns: number;
  rows: number;
}

const MainGrid = React.forwardRef<HTMLDivElement, Props>(
  ({ gridData, columns, rows }: Props, ref) => {
    const cellsList = gridData.map((cellData) => (
      <Cell key={cellData.id} data={cellData} />
    ));
    return (
      <Grid
        ref={ref}
        borderBottom="1px solid black"
        borderRight="1px solid black"
        templateColumns={`repeat(${columns}, 1fr)`}
        templateRows={`repeat(${rows}, 1fr)`}
        height="100%"
      >
        {cellsList}
      </Grid>
    );
  }
);

export default MainGrid;
