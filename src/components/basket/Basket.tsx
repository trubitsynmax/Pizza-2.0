import {
  addItem,
  deleteGroupItems,
  minusItem,
} from "../../redux/getSetItems/sliceGetItems";
import { useAppDispatch } from "../../redux/store";
import "../css/basket.scss";
import { namesTypes } from "../pizzac/ListPizza";
import { TItemSelectionPizza } from "../../redux/types";

export const Basket: React.FC<TItemSelectionPizza> = ({
  id,
  imageUrl,
  name,
  label,
  getSizes,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();

  const plusItems = () => {
    dispatch(addItem({ id, imageUrl, name, label, getSizes, price, count }));
  };
  const minusItems = () => {
    dispatch(minusItem({ id, label, getSizes, count }));
  };
  const deleteGroup = () => {
    dispatch(deleteGroupItems({ id, label, getSizes }));
  };
  return (
    <>
      <div className="basket__wrapper">
        <div className="basket__column">
          <div className="basket__section">
            <img
              src={imageUrl}
              alt=""
              className="basket__image"
              onClick={deleteGroup}
            />
            <button
              className="basket__delete-section"
              onClick={deleteGroup}
            ></button>
          </div>
          <div className="basket__body">
            <div className="basket__sub-title">{name}</div>
            <div className="basket__label">
              {namesTypes[label]}, {getSizes} см.
            </div>
          </div>
          <div className="basket__row">
            <button className="basket__minus" onClick={minusItems}></button>
            <div className="basket__count">{count}</div>
            <button className="basket__plus" onClick={plusItems}></button>
          </div>
          <div className="basket__price">{price * count} ₽</div>
          <button className="basket__delete" onClick={deleteGroup}></button>
        </div>
      </div>
    </>
  );
};
