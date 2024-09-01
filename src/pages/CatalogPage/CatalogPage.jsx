import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTrucks } from "../../redux/allTrucks/operations";
import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <Filters />
      </div>
      <div>
        <CatalogList />
      </div>
    </section>
  );
}
