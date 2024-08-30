import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <button>
          <Link to="/catalog" className={css.btn}>
            View Now
          </Link>
        </button>
      </div>
    </>
  );
}
