import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";

export default function Location() {
  return (
    <label className={css.label} htmlFor="location">
      Location
      <CiMap className={css.icon} />
      <input
        className={css.input}
        id="location"
        type="text"
        placeholder="City"
      />
    </label>
  );
}
