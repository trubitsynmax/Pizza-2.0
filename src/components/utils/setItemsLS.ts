import React from "react"; //!react component
import { TPlusItem } from "../types/types"; //!types

const setItemsLS = (pizzac: TPlusItem[]) => {
  const firstRender = React.useRef<boolean>(false);
  React.useEffect(() => {
    if (firstRender.current) {
      const json = JSON.stringify(pizzac);
      console.log(json);
      return localStorage.setItem("items", json);
    }
    firstRender.current = true;
  }, [pizzac]);
};

export default setItemsLS;
