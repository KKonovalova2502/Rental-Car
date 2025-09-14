import { useState } from 'react';
import css from './PriceSelect.module.css';

export default function PriceSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
    setOpen(false);
  };

  return (
    <label className={`${css.label} ${open ? css.open : ''}`}>
      Price / 1 hour
      <select
        value={value}
        onChange={handleChange}
        className={css.select}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <option value="">Choose a price</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
      </select>
      <svg className={css.icon} width="16" height="16">
        <use href="/sprite-icons.svg#icon-arrow" />
      </svg>
    </label>
  );
}
