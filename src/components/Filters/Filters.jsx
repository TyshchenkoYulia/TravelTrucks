import { BsWind } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoAppsOutline } from "react-icons/io5";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Filters</h3>
      <div>
        <h4 className={css.text}>Vehicle equipment</h4>
        <hr className={css.line}></hr>
        <ul className={css.list}>
          <li className={css.item}>
            <BsWind size={32} />
            AC
          </li>
          <li className={css.item}>
            <TbAutomaticGearbox size={32} />
            Automatic
          </li>
          <li className={css.item}>
            <BsCupHot size={32} />
            Kitchen
          </li>
          <li className={css.item}>
            <IoMdTv size={32} />
            TV
          </li>
          <li className={css.item}>
            <MdOutlineWaterDrop size={32} />
            Bathroom
          </li>
        </ul>
      </div>
      <div>
        <h4 className={css.text}>Vehicle type</h4>
        <hr className={css.line}></hr>
        <ul className={css.list}>
          <li className={css.item}>
            <MdOutlineAutoAwesomeMosaic size={32} />
            Van
          </li>
          <li className={css.item}>
            <MdOutlineGridView size={32} />
            Fully Integrated
          </li>
          <li className={css.item}>
            <IoAppsOutline size={32} />
            Alcove
          </li>
        </ul>
      </div>
      <button className={css.btn} type="button">
        Search
      </button>
    </div>
  );
}
