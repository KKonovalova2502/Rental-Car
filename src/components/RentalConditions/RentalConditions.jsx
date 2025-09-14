import css from './RentalConditions.module.css';

export default function RentalConditions({ conditions }) {
  if (!conditions || conditions.length === 0) return null;

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Rental Conditions:</h3>
      <ul className={css.list}>
        {conditions.map((item, index) => (
          <li key={index} className={css.item}>
            <svg width="16" height="16">
              <use href="/sprite-icons.svg#icon-check-circle" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
