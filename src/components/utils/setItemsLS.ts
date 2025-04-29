import React from "react";
import { TPlusItem } from "../types/types";

const setItemsLS = (pizzac: TPlusItem[]) => {
  const firstRender = React.useRef<boolean>(false);
  React.useEffect(() => {
    if (firstRender.current) {
      const json = JSON.stringify(pizzac);
      return localStorage.setItem("items", json);
    }
    firstRender.current = true;
  }, [pizzac]);
};

export default setItemsLS;
