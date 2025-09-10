import { Link } from 'react-router-dom';
import css from './CarCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite } from '../../redux/favorites/selectors.js';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice.js';

export default function CarCard({ car }) {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const parts = address?.split(',') || [];
  const city = parts[1]?.trim() || '';
  const country = parts[2]?.trim() || '';

  const formattedMileage = mileage.toLocaleString('en-US').replace(/,/g, ' ');

  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(id));

  const toggleFavorite = () => {
    dispatch(isFavorite ? removeFavorite(id) : addFavorite(id));
  };

  return (
    <div className={css.card}>
      <div className={css.imgWrapp}>
        <img src={img} alt={`${brand} ${model}`} className={css.image} />
        <button
          onClick={toggleFavorite}
          className={css.favoriteBtn}
          type="button"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg width="16" height="16">
            <use
              href={`/sprite-icons.svg#${
                isFavorite ? 'icon-heart-active' : 'icon-heart-default'
              }`}
            />
          </svg>
        </button>
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h3 className={css.title}>
            {brand} <span className={css.model}>{model}</span>, {year}
          </h3>
          <p className={css.price}>${rentalPrice}</p>
        </div>

        <p className={css.details}>
          {city} | {country} | {rentalCompany} | {type} | {formattedMileage} km
        </p>

        <Link to={`/cars/${id}`} className={css.readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
}
