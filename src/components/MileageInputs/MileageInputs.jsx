export default function MileageInputs({ min, max, onChangeMin, onChangeMax }) {
  const handleChangeMin = (e) => {
    onChangeMin(e.target.value);
  };

  const handleChangeMax = (e) => {
    onChangeMax(e.target.value);
  };

  return (
    <div>
      <label>
        Car mileage / km
        <input
          type="number"
          placeholder="From"
          value={min}
          onChange={handleChangeMin}
        />
        <input
          type="number"
          placeholder="To"
          value={max}
          onChange={handleChangeMax}
        />
      </label>
    </div>
  );
}
