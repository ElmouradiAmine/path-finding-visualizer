import { useState, useEffect, useCallback } from "react";
import Dimension from "../models/dimension";
import { getNumColumns, getNumRows } from "../utils/utils";

const useDimension = (): [Dimension, ReturnType<typeof useCallback>] => {
  const [dimension, setDimension] = useState({ columns: 0, rows: 0 });
  const [tick, setTick] = useState(0);

  const forceUpdate = () => {
    setTick((prev) => prev + 1);
  };

  const handleSizeChange = (height: number, width: number) => {
    setDimension({
      columns: getNumColumns(width),
      rows: getNumRows(height),
    });
  };

  const sizeRef = useCallback(
    (node) => {
      if (node != null) {
        const height = Math.floor(node.getBoundingClientRect().height);
        const width = Math.floor(node.getBoundingClientRect().width);
        handleSizeChange(height, width);
      }
      return tick;
    },
    [tick]
  );

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    return () => window.removeEventListener("resize", forceUpdate);
  }, []);

  return [dimension, sizeRef];
};

export default useDimension;
