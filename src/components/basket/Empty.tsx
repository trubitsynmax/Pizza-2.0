import { Link } from "react-router-dom";
import empty from "../../assets/image/empty.png";
import "../css/empty.scss";
const Empty = () => {
  return (
    <div className="empty">
      <div className="empty__container container">
        <div className="empty__title">
          Корзина пуста, нужно добавить что-либо, чтобы получилось сделать заказ
        </div>
        <div className="empty__image">
          <img src={empty} alt="" />
        </div>
        <Link to="/" className="empty__button">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default Empty;
