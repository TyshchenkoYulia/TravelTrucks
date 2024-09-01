import css from "./VehicleDetails.module.css";

export default function VehicleDetails({ truckInfo }) {
  const { consumption, tank, length, width, form, height } = truckInfo;

  const addDetails = (str) => {
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i - 1] !== " ") {
        return str.slice(0, i) + " " + str.slice(i);
      }
    }
    return str;
  };

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p>Form</p>
        <p className={css.text}>{addDetails(form)}</p>
      </li>
      <li className={css.item}>
        <p>Length</p>
        <p>{length.slice(0, -1) + " " + length.slice(-1)}</p>
      </li>
      <li className={css.item}>
        <p>Width</p>
        <p>{width.slice(0, -1) + " " + width.slice(-1)}</p>
      </li>
      <li className={css.item}>
        <p>Height</p>
        <p>{height.slice(0, -1) + " " + height.slice(-1)}</p>
      </li>
      <li className={css.item}>
        <p>Tank</p>
        <p>{tank.slice(0, -1) + " " + tank.slice(-1)}</p>
      </li>
      <li className={css.item}>
        <p>Consumption</p>
        <p>
          {consumption.slice(0, consumption.length - 2) +
            " " +
            consumption.slice(consumption.length - 2)}
        </p>
      </li>
    </ul>
  );
}
