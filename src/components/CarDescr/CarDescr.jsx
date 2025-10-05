import css from './CarDescr.module.css';

export default function CarDescr({ car }) {
  const {
    img,
    brand,
    model,
    year,
    address,
    mileage,
    rentalPrice,
    description,
  } = car;

  const formattedMileage =
    mileage?.toLocaleString('en-US').replace(/,/g, ' ') || '—';

  const parts = address?.split(',') || [];
  const city = parts[1]?.trim() || '';
  const country = parts[2]?.trim() || '';
  const shortId = img.match(/\/(\d+)-ai\.jpg$/)[1];

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        {brand} {model}, {year} <span className={css.carId}>Id: {shortId}</span>
      </h2>

      <div className={css.info}>
        <p>
          <svg width="16" height="16">
            <use href="/sprite-icons.svg#icon-location" />
          </svg>
          {city}, {country}
        </p>
        <p>Mileage: {formattedMileage} km</p>
      </div>

      <p className={css.price}>${rentalPrice}</p>

      <p className={css.descr}>{description} </p>
    </div>
  );
}
