import { useEffect, useState } from "react";

const useMouse = (): boolean => {
  const [mouseIsDown, setMouseIsDown] = useState(false);

  const toggleMouseDown = (e: Event) => {
    if (e.type === "mousedown") {
      setMouseIsDown(true);
    } else if (e.type === "mouseup") {
      setMouseIsDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", toggleMouseDown);
    window.addEventListener("mouseup", toggleMouseDown);

    return () => {
      window.removeEventListener("mousedown", toggleMouseDown);
      window.removeEventListener("mouseup", toggleMouseDown);
    };
  }, []);

  return mouseIsDown;
};

export default useMouse;
