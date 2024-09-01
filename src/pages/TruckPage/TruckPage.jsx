import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTruck } from "../../redux/truck/operations";
import { selectTruckItems } from "../../redux/truck/selectors";
import clsx from "clsx";
import css from "./TruckPage.module.css";

export default function TruckPage() {
  const truckData = useSelector(selectTruckItems);
  const { name, price, rating, location, description, reviews, gallery } =
    truckData;

  const { Id } = useParams();

  const pathLocation = useLocation();

  const dispatch = useDispatch();

  const changeActivePage = ({ isActive }, activeClass, inactiveClass) => {
    return clsx(inactiveClass, isActive && activeClass);
  };

  useEffect(() => {
    dispatch(fetchTruck(Id));
  });

  if (truckData.length === 0) {
    return;
  }

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>{name}</h2>
        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <HiStar className={css.iconStar} />
            <p className={css.rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <CiMap size={16} />
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <h2 className={css.price}>€{price.toFixed(2)}</h2>
      </div>

      <ul className={css.galleryList}>
        {gallery.map((image) => (
          <li className={css.galleryItem} key={image.original}>
            <img className={css.img} src={image.original} alt="photo truck" />
          </li>
        ))}
      </ul>
      <p className={css.text}>{description}</p>
      <ul className={css.listLinks}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive || !pathLocation.pathname.includes("reviews")
                ? css.active
                : css.link
            }
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) =>
              changeActivePage(isActive, css.active, css.link)
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}
