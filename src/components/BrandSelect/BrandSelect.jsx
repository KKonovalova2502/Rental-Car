import { useDispatch, useSelector } from 'react-redux';
import { selectBrands, selectLoading } from '../../redux/brand/selectors.js';
import { fetchBrands } from '../../redux/catalog/operations.js';
import { useEffect, useState } from 'react';
import css from './BrandSelect.module.css';

export default function BrandSelect({ value, onChange }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const brands = useSelector(selectBrands);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [dispatch, brands.length]);

  const handleChange = (e) => {
    onChange(e.target.value);
    setOpen(false);
  };

  return (
    <label className={`${css.label} ${open ? css.open : ''}`}>
      Car brand
      <select
        value={value}
        onChange={handleChange}
        className={css.select}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <option value="">{loading ? 'Loading...' : 'Choose a brand'}</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
      <svg className={css.icon} width="16" height="16">
        <use href="/sprite-icons.svg#icon-arrow" />
      </svg>
    </label>
  );
}
