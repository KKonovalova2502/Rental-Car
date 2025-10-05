import css from './MileageInputs.module.css';

export default function MileageInputs({ min, max, onChangeMin, onChangeMax }) {
  const formatNumber = (num) => {
    if (!num) return '';
    const raw = num.toString().replace(/\D/g, ''); // тільки цифри
    return raw.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const parseNumber = (str) => {
    return str.replace(/\D/g, ''); // видаляємо все, крім цифр
  };

  const handleChangeMin = (e) => {
    const raw = parseNumber(e.target.value);
    if (raw.length <= 6) {
      onChangeMin(raw);
    }
  };

  const handleChangeMax = (e) => {
    const raw = parseNumber(e.target.value);
    if (raw.length <= 6) {
      onChangeMax(raw);
    }
  };

  return (
    <label className={css.label}>
      Car mileage / km
      <div className={css.inputs}>
        <div className={css.inputWrapper}>
          <span className={css.inputLabel}>From</span>
          <input
            type="text"
            value={formatNumber(min)}
            onChange={handleChangeMin}
            className={`${css.input} ${css.inputFrom}`}
            inputMode="numeric"
          />
        </div>
        <div className={css.inputWrapper}>
          <span className={css.inputLabel}>To</span>
          <input
            type="text"
            value={formatNumber(max)}
            onChange={handleChangeMax}
            className={`${css.input} ${css.inputTo}`}
            inputMode="numeric"
          />
        </div>
      </div>
    </label>
  );
}
