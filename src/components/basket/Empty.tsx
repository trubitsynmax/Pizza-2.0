import { Link } from "react-router-dom";
import EmptyImage from "../../assets/image/empty.png";
import "../style.css";
const Empty = () => {
  return (
    <div className="empty">
      <div className="empty__container container">
        <div className="empty__title">
          Корзина пуста, нужно добавить что-либо, чтобы получилось сделать заказ
        </div>
        <div className="empty__image">
          <img src={EmptyImage} alt="" />
        </div>
        <Link to="/" className="empty__button-back">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default Empty;
