import { useDispatch, useSelector } from 'react-redux';
import { selectBrands, selectLoading } from '../../redux/brand/selectors.js';
import { fetchBrands } from '../../redux/catalog/operations.js';
import { useEffect } from 'react';

export default function BrandSelect({ value, onChange }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const brands = useSelector(selectBrands);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [dispatch, brands.length]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label>
      Car brand
      <select value={value} onChange={handleChange}>
        <option value="">{loading ? 'Loading...' : 'Choose a brand'}</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </label>
  );
}
