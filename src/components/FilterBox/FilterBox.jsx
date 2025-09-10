import { useDispatch } from 'react-redux';
import css from './FilterBox.module.css';
import PriceSelect from '../PriceSelect/PriceSelect.jsx';
import MileageInputs from '../MileageInputs/MileageInputs.jsx';
import BrandSelect from '../BrandSelect/BrandSelect.jsx';
import { useState } from 'react';
import { setFilters } from '../../redux/filter/slice.js';

export default function FilterBox() {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilters({ brand, rentalPrice, minMileage, maxMileage }));
  };

  return (
    <form className="css.form" onSubmit={handleSearch}>
      <BrandSelect value={brand} onChange={setBrand} />
      <PriceSelect value={rentalPrice} onChange={setRentalPrice} />
      <MileageInputs
        min={minMileage}
        max={maxMileage}
        onChangeMin={setMinMileage}
        onChangeMax={setMaxMileage}
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
}
