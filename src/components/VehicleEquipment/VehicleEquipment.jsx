import { BsWind, BsCupHot } from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiPocketRadio, GiGasStove } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuMicrowave } from "react-icons/lu";
import { FaHandHoldingWater } from "react-icons/fa";
import { Field } from "formik";
import css from "./VehicleEquipment.module.css";

const keys = [
  { key: "AC" },
  { key: "kitchen" },
  { key: "TV" },
  { key: "bathroom" },
  { key: "water" },
  { key: "microwave" },
  { key: "radio" },
  { key: "refrigerator" },
  { key: "gas" },
];

export default function VehicleEquipment() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.list}>
        {keys.map((item) => (
          <li key={item.key} className={css.items}>
            <Field
              className={css.field}
              type="checkbox"
              name={item.key}
              id={item.key}
            />
            <label htmlFor={item.key} className={css.label}>
              <div className={css.wrapper}>
                {"AC" === item.key && <BsWind size={32} />}
                {"kitchen" === item.key && <BsCupHot size={32} />}
                {"TV" === item.key && <IoMdTv size={32} />}
                {"radio" === item.key && <GiPocketRadio size={32} />}
                {"refrigerator" === item.key && (
                  <CgSmartHomeRefrigerator size={32} />
                )}
                {"microwave" === item.key && <LuMicrowave size={32} />}
                {"bathroom" === item.key && <MdOutlineWaterDrop size={32} />}
                {"gas" === item.key && <GiGasStove size={32} />}
                {"water" === item.key && <FaHandHoldingWater size={32} />}
                <span className={css.spanText}>{item.key}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
