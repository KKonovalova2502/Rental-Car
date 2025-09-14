import css from './CarSpecs.module.css';

export default function CarSpecs({ year, type, fuelConsumption, engineSize }) {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Car Specifications:</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <svg width="16" height="16">
            <use href="/public/sprite-icons.svg#icon-calendar" />
          </svg>
          Year: {year}
        </li>
        <li className={css.item}>
          <svg width="16" height="16">
            <use href="/public/sprite-icons.svg#icon-car" />
          </svg>
          Type: {type}
        </li>
        <li className={css.item}>
          <svg width="16" height="16">
            <use href="/public/sprite-icons.svg#icon-fuel-pump" />
          </svg>
          Fuel Consumption: {fuelConsumption} л/100 км
        </li>
        <li className={css.item}>
          <svg width="16" height="16">
            <use href="/public/sprite-icons.svg#icon-gear" />
          </svg>
          Engine Size: {engineSize}
        </li>
      </ul>
    </div>
  );
}
