import { useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import BoockingForm from "../BookingForm/BookingForm";
import Categories from "../Categories/Categories";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./Features.module.css";

export default function Features() {
  const truckInfo = useSelector(selectTruckItems);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Categories truckInfo={truckInfo} />
        <div className={css.characteristics}>
          <h2 className={css.title}>Vehicle details</h2>
          <VehicleDetails truckInfo={truckInfo} />
        </div>
      </div>
      <BoockingForm />
    </div>
  );
}
