import { useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";
import BookingForm from "../BookingForm/BookingForm";
// import StarRating from "../StarRating/StarRating";
import css from "./Reviews.module.css";

export default function Reviews() {
  const truckInfo = useSelector(selectTruckItems);

  const { reviews } = truckInfo;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {reviews.map((review, i) => (
          <li key={i}>
            <div className={css.nameContainer}>
              <div className={css.logoName}>
                <p className={css.logoNameLetter}>
                  {review.reviewer_name[0].toUpperCase()}
                </p>
              </div>
              <div>
                <p className={css.name}>{review.reviewer_name}</p>
                {/* <StarRating rating={review.reviewer_rating} /> */}
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
}
