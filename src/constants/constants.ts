export const CELL_WIDTH = 30;
export const CELL_HEIGHT = 30;
export enum CellState {
  UNVISITED,
  VISITING,
  VISITED,
  PATH,
  WALL,
}

export const Colors = {
  [CellState.PATH]: "yellow",
  [CellState.UNVISITED]: "white",
  [CellState.VISITED]: "green",
  [CellState.VISITING]: "orange",
  [CellState.WALL]: "black",
};
