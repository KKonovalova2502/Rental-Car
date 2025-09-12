import css from './CarImage.module.css';

export default function CarImage({ car }) {
  if (!car) return null;

  const { img, brand, model } = car;

  return (
    <div className={css.wrapper}>
      <img src={img} alt={`${brand} ${model}`} className={css.image} />
    </div>
  );
}
