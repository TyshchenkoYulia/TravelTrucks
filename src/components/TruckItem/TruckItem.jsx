import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFavoriteId } from "../../redux/favorite/selectors";
import {
  BsWind,
  BsCupHot,
  BsFuelPump,
  BsDiagram3,
  BsSuitHeart,
} from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiPocketRadio, GiGasStove } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuMicrowave } from "react-icons/lu";
import { FaHandHoldingWater } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { toggleFavoriteTruck } from "../../redux/favorite/slice";
import css from "./TruckItem.module.css";
import clsx from "clsx";

export default function TruckItem({ data }) {
  const {
    id,
    name,
    location,
    description,
    price,
    rating,
    reviews,
    gallery,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = data;

  const favorite = useSelector(selectIsFavoriteId);

  const dispatch = useDispatch();
  const handleIsFavorite = () => {
    dispatch(toggleFavoriteTruck({ id }));
  };

  return (
    <>
      <img
        className={css.img}
        src={gallery[0].thumb}
        alt={name}
        width="292"
        height="320"
      />
      <div className={css.container}>
        <div className={css.wrapper}>
          <div>
            <div className={css.wrapperHeader}>
              <h2 className={css.title}>{name}</h2>
              <p className={css.price}>€{price.toFixed(2)}</p>
              <button
                className={css.iconFavourite}
                onClick={handleIsFavorite}
                type="button"
              >
                <BsSuitHeart
                  className={clsx(
                    favorite.some((item) => item.id === id)
                      ? css.active
                      : css.disabled
                  )}
                />
              </button>
            </div>
            <div className={css.wrapperDetails}>
              <div className={css.iconRating}>
                <HiStar className={css.iconStar} />
                <p className={css.rating}>
                  {rating}({reviews.length} Reviews)
                </p>
              </div>

              <div className={css.iconLocation}></div>
              <CiMap size={16} />
              <p className={css.location}>{location}</p>
            </div>
          </div>

          <p className={css.description}>{description}</p>

          <ul className={css.list}>
            {transmission && (
              <li className={css.item}>
                <BsDiagram3 size={20} />
                <p className={css.itemDescription}>{transmission}</p>
              </li>
            )}
            {engine && (
              <li className={css.item}>
                <BsFuelPump size={20} />
                <p className={css.itemDescription}>{engine}</p>
              </li>
            )}
            {AC && (
              <li className={css.item}>
                <BsWind size={20} />
                <p className={css.itemDescription}>AC</p>
              </li>
            )}
            {bathroom && (
              <li className={css.item}>
                <MdOutlineWaterDrop size={20} />
                <p className={css.itemDescription}>bathroom</p>
              </li>
            )}
            {kitchen && (
              <li className={css.item}>
                <BsCupHot size={20} />
                <p className={css.itemDescription}>kitchen</p>
              </li>
            )}
            {TV && (
              <li className={css.item}>
                <IoMdTv size={20} />
                <p className={css.itemDescription}>TV</p>
              </li>
            )}
            {radio && (
              <li className={css.item}>
                <GiPocketRadio size={20} />
                <p className={css.itemDescription}>radio</p>
              </li>
            )}
            {refrigerator && (
              <li className={css.item}>
                <CgSmartHomeRefrigerator size={20} />
                <p className={css.itemDescription}>refrigerator</p>
              </li>
            )}
            {microwave && (
              <li className={css.item}>
                <LuMicrowave size={20} />
                <p className={css.itemDescription}>microwave</p>
              </li>
            )}
            {gas && (
              <li className={css.item}>
                <GiGasStove size={20} />
                <p className={css.itemDescription}>gas</p>
              </li>
            )}
            {water && (
              <li className={css.item}>
                <FaHandHoldingWater size={32} />
                <p className={css.itemDescription}>water</p>
              </li>
            )}
          </ul>

          <NavLink className={css.link} to={`/catalog/${id}`}>
            Show more
          </NavLink>
        </div>
      </div>
    </>
  );
}
