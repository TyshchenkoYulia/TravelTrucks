import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addFilters } from "../../redux/filters/addFilters";
import { changeValue } from "../../redux/pagination/slice";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import css from "./Filters.module.css";

export default function Filters() {
  const initialValues = {
    location: "",
    form: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    water: false,
    microwave: false,
    radio: false,
    refrigerator: false,
    gas: false,
  };

  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addFilters(value));
    dispatch(changeValue(3));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Location />
        <h3 className={css.title}>Filters</h3>
        <VehicleEquipment />
        <VehicleType />
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
