import {
  BsWind,
  BsCupHot,
  BsFuelPump,
  BsDiagram3,
  BsGrid1X2,
} from "react-icons/bs";
import { MdOutlineAutoAwesomeMosaic, MdOutlineGridView } from "react-icons/md";
import { IoMdTv } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiPocketRadio, GiGasStove } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuMicrowave } from "react-icons/lu";
import { FaHandHoldingWater } from "react-icons/fa";
import css from "./Categories.module.css";

export default function Categories({ truckInfo }) {
  const {
    transmission,
    engine,
    AC,
    kitchen,
    refrigerator,
    radio,
    bathroom,
    microwave,
    TV,
    gas,
    water,
    form,
  } = truckInfo;

  return (
    <ul className={css.list}>
      <li className={css.category}>
        <BsDiagram3 size={20} />
        <p className={css.text}>{transmission}</p>
      </li>
      <li className={css.category}>
        <BsFuelPump size={20} />
        <p className={css.text}>{engine}</p>
      </li>
      {form === "alcove" && (
        <li className={css.category}>
          <BsWind size={20} />
          <p className={css.text}>Alcove</p>
        </li>
      )}
      {form === "fullyIntegrated" && (
        <li className={css.category}>
          <MdOutlineGridView size={20} />
          <p className={css.text}>Fully Integrated</p>
        </li>
      )}
      {form === "van" && (
        <li className={css.category}>
          <BsGrid1X2 size={20} />
          <p className={css.text}>Van</p>
        </li>
      )}
      {form === "panelTruck" && (
        <li className={css.category}>
          <MdOutlineAutoAwesomeMosaic size={20} />
          <p className={css.text}>Panel Truck</p>
        </li>
      )}

      {AC && (
        <li className={css.category}>
          <BsWind size={20} />
          <p className={css.text}>AC</p>
        </li>
      )}
      {kitchen && (
        <li className={css.category}>
          <BsCupHot className={css.iconCategory} />
          <p className={css.text}>Kitchen</p>
        </li>
      )}
      {refrigerator && (
        <li className={css.category}>
          <CgSmartHomeRefrigerator size={20} />
          <p className={css.text}>Refrigerator</p>
        </li>
      )}
      {radio && (
        <li className={css.category}>
          <GiPocketRadio size={20} />
          <p className={css.text}>Radio</p>
        </li>
      )}
      {bathroom && (
        <li className={css.category}>
          <MdOutlineWaterDrop size={20} />
          <p className={css.text}>Bathroom</p>
        </li>
      )}
      {microwave && (
        <li className={css.category}>
          <LuMicrowave size={20} />
          <p className={css.text}>Microwave</p>
        </li>
      )}
      {TV && (
        <li className={css.category}>
          <IoMdTv size={20} />
          <p className={css.text}>TV</p>
        </li>
      )}
      {gas && (
        <li className={css.category}>
          <GiGasStove size={20} />
          <p className={css.text}>Gas</p>
        </li>
      )}
      {water && (
        <li className={css.category}>
          <FaHandHoldingWater size={20} />
          <p className={css.text}>Water</p>
        </li>
      )}
    </ul>
  );
}
