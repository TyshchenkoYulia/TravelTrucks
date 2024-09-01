import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
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
