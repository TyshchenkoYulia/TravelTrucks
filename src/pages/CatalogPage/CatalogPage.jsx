import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <Location />
        <Filters />
      </div>
    </section>
  );
}
