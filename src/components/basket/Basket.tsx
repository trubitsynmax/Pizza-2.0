import {
  addItem,
  deleteGroupItems,
  removeItem,
} from "../../redux/items/sliceItems"; //!custom slices
import { useAppDispatch } from "../../redux/store";
import { namesTypes } from "../categories/data"; //!['традиционное', 'тонкое']
import "../css/basket.scss";
import { TPlusItem } from "../types/types";

const Basket: React.FC<TPlusItem> = ({
  id,
  imageUrl,
  name,
  typesPizza,
  getSizes,
  price,
  count,
}) => {
  //*redux
  const dispatch = useAppDispatch();

  const plusItem = (): void => {
    dispatch(
      addItem({ id, imageUrl, name, typesPizza, getSizes, price, count })
    );
  };
  const minusItem = (): void => {
    dispatch(removeItem({ id, typesPizza, getSizes, count }));
  };
  const deleteGroup = (): void => {
    dispatch(deleteGroupItems({ id, typesPizza, getSizes }));
  };

  //*ui
  return (
    <>
      <div className="basket__wrapper">
        <div className="basket__card">
          <div className="basket__image-section">
            <img
              src={imageUrl}
              alt=""
              className="basket__image"
              onClick={deleteGroup}
            />
            <button
              className="basket__delete-group-image"
              onClick={deleteGroup}
            ></button>
          </div>
          <div className="basket__info-section">
            <div className="basket__sub-title">{name}</div>
            <div className="basket__label">
              {namesTypes[typesPizza]}, {getSizes} см.
            </div>
          </div>
          <div className="basket__buttons-section">
            <button className="basket__minus" onClick={minusItem}></button>
            <div className="basket__count">{count}</div>
            <button className="basket__plus" onClick={plusItem}></button>
          </div>
          <div className="basket__price">{price * count} ₽</div>
          <button
            className="basket__delete-group"
            onClick={deleteGroup}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Basket;
