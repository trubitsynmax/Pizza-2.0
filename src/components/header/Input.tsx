import debounce from "lodash.debounce";
import React from "react";
import { useAppDispatch } from "../../redux/store";
import { selectInput } from "../../redux/sortItems/sliceSort";

export const Input = React.memo(() => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [valueInput, setValueInput] = React.useState("");
  const dispatch = useAppDispatch();
  const getValueInput = React.useCallback(
    debounce((str: string) => {
      dispatch(selectInput(str));
    }, 500),
    []
  );

  const clearInput = React.useCallback(() => {
    setValueInput("");
    getValueInput("");
    inputRef.current?.focus();
  }, []);
  const getUsersValueInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInput(event.target.value);
      getValueInput(event.target.value);
    },
    []
  );
  return (
    <>
      <input
        ref={inputRef}
        value={valueInput}
        onChange={getUsersValueInput}
        type="text"
        className="header__input"
        placeholder="Поиск пиццы"
        maxLength={35}
      />
      {valueInput && <span onClick={clearInput}></span>}
    </>
  );
});
