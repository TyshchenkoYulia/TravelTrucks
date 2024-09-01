import { useSelector } from "react-redux";
import { selectItems } from "../../redux/allTrucks/selectors";
import TruckItem from "../TruckItem/TruckItem";
import css from "./CatalogList.module.css";

export default function CatalogList() {
  const trucks = useSelector(selectItems);

  if (trucks.length === 0) {
    return;
  }
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {trucks.map((truck) => (
          <li className={css.item} key={truck.id}>
            <TruckItem data={truck} />
          </li>
        ))}
      </ul>
      {trucks.length > 0 && (
        <button className={css.btn} type="button">
          Load more
        </button>
      )}
    </div>
  );
}
