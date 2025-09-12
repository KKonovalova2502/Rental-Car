import css from './CarFeatures.module.css';

export default function CarFeatures({
  accessories = [],
  functionalities = [],
}) {
  const allFeatures = [...accessories, ...functionalities];

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Accessories and functionalities:</h3>
      <ul className={css.list}>
        {allFeatures.map((feature, index) => (
          <li key={index} className={css.item}>
            <svg width="16" height="16" className={css.icon}>
              <use href="/sprite-icons.svg#icon-check-circle" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
