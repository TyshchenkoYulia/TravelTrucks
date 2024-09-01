import { MdOutlineGridView } from "react-icons/md";
import { IoAppsOutline } from "react-icons/io5";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { Field } from "formik";
import css from "./VehicleType.module.css";

const keys = [
  { key: "panelTruck" },
  { key: "fullyIntegrated" },
  { key: "alcove" },
];

export default function VehicleType() {
  return (
    <>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        {keys.map((type) => (
          <li key={type.key} className={css.items}>
            <Field
              className={css.field}
              type="radio"
              name={type.key}
              id={type.key}
            />
            <label htmlFor={type.key} className={css.label}>
              <div className={css.wrapper}>
                {"panelTruck" === type.key && (
                  <MdOutlineAutoAwesomeMosaic size={32} />
                )}
                {"fullyIntegrated" === type.key && (
                  <MdOutlineGridView size={32} />
                )}
                {"alcove" === type.key && <IoAppsOutline size={32} />}
                <span className={css.spanText}>{type.key}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
