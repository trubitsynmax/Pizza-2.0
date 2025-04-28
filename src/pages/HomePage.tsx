import { Categories } from "../components/categories/index"; //!custom component categories
import { Pizzac } from "../components/pizzac/index"; //!custom component pizzac
import Popup from "../components/popup/Popup"; //!custor component popup
import { useAppSelector } from "../redux/store"; //!redux component
import { SelectUserFilter } from "../components/categories/index"; //!slice input slice
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
