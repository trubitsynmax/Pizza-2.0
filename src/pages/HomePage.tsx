import { Categories, Pizzac, Popup } from "../components/index"; //!custom component
import { useAppSelector } from "../redux/store"; //!redux component
import { SelectUserFilter } from "../components/index"; //!slice input slice
export default function HomePage() {
  const changeItem = useAppSelector((state) => state.items.changeItem);
  SelectUserFilter();
  return (
    <div>
      <Categories />
      <Pizzac />
      {changeItem && <Popup {...changeItem} {...changeItem.info} />}
    </div>
  );
}
