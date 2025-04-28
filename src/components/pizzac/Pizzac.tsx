import { useAppSelector } from "../../redux/store"; //!redux selector
import { CardPizza } from "./index"; //!custom component
import Skeleton from "./loading/Skeleton"; //!status == 'pending' / skeleton components
import Error from "./error/Error"; //!status == 'error' / error components
import "../css/pizzac.scss"; //!css

const Pizzac = () => {
  const pizzac = useAppSelector((state) => state.pizza.items);
  const status = useAppSelector((state) => state.pizza.status);
  const inputValue = useAppSelector((state) => state.sort.inputValue);

  const sortPizza = pizzac
    .filter((item) => {
      if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item, index: number) => <CardPizza key={index} {...item} />);

  return (
    <div className="pizzac">
      <div className="container">
        <div className="pizzac__title">Все пиццы</div>
        {status === "pending" && (
          <div className="skeleton__row">
            {[...new Array(8)].map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}
        {status === "fulfilled" && (
          <div className="pizzac__row">{sortPizza}</div>
        )}
        {status === "rejected" && <Error />}
      </div>
    </div>
  );
};
export default Pizzac;
