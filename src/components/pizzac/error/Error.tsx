import "./error.scss"; //!css

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error__title">😣</div>
        <h2 className="error__subtitle">
          К сожалению, пиццы не удалось загрузить, попробуйте сделать это позже
          или перезагрузить страницу
        </h2>
      </div>
    </div>
  );
};
export default Error;
