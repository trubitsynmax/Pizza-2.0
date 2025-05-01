import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not">
      <div className="container">
        <div className="not__body">
          <div className="not__emoji">🤔</div>
          <div className="not__title">
            К сожалению, такой страницы не смогли найти
          </div>
          <Link to="/" className="not__btn">
            на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
