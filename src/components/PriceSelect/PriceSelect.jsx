import Select from 'react-select';
import css from './PriceSelect.module.css';
import { selectStyles } from '../../utils/reactSelectStyles.js';
import { DropdownIndicator } from '../../utils/DropdownIndicator.jsx';

export default function PriceSelect({ value, onChange }) {
  const priceOptions = [
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
  ];

  const handleChange = (selectedOption) => {
    onChange(selectedOption?.value || '');
  };

  const selectedOption = value
    ? priceOptions.find((option) => option.value === value)
    : null;

  return (
    <label className={css.label}>
      Price / 1 hour
      <Select
        name="price"
        value={selectedOption}
        onChange={handleChange}
        options={priceOptions}
        placeholder="Choose a price"
        styles={selectStyles}
        formatOptionLabel={(option, { context }) => {
          if (context === 'menu') return option.label;
          if (context === 'value') return `To $${option.label}`;
        }}
        components={{ DropdownIndicator }}
        classNamePrefix="price-select"
        isSearchable={false}
      />
    </label>
  );
}
