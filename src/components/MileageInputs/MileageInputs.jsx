import css from './MileageInputs.module.css';

export default function MileageInputs({ min, max, onChangeMin, onChangeMax }) {
  const handleChangeMin = (e) => {
    onChangeMin(e.target.value);
  };

  const handleChangeMax = (e) => {
    onChangeMax(e.target.value);
  };

  return (
    <div>
      <label className={css.label}>
        Car mileage / km
        <div className={css.inputs}>
          <input
            type="number"
            placeholder="From"
            value={min}
            onChange={handleChangeMin}
            className={css.input}
          />
          <input
            type="number"
            placeholder="To"
            value={max}
            onChange={handleChangeMax}
            className={css.input}
          />
        </div>
      </label>
    </div>
  );
}
