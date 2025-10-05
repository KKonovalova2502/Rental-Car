import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../redux/brand/selectors.js';
import { fetchBrands } from '../../redux/catalog/operations.js';
import { useEffect } from 'react';
import Select from 'react-select';
import { DropdownIndicator } from '../../utils/DropdownIndicator.jsx';
import { selectStyles } from '../../utils/reactSelectStyles.js';
import css from './BrandSelect.module.css';

export default function BrandSelect({ value, onChange }) {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [dispatch, brands.length]);

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : '');
  };

  return (
    <label className={css.label}>
      Car brand
      <Select
        name="brand"
        value={value ? { value, label: value } : null}
        onChange={handleChange}
        options={brands.map((b) => ({ value: b, label: b }))}
        placeholder="Choose a brand"
        classNamePrefix="brand-select"
        isSearchable={false}
        components={{ DropdownIndicator }}
        styles={selectStyles}
      />
    </label>
  );
}
