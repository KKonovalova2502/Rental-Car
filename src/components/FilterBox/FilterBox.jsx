import { useDispatch, useSelector } from 'react-redux';
import css from './FilterBox.module.css';
import PriceSelect from '../PriceSelect/PriceSelect.jsx';
import MileageInputs from '../MileageInputs/MileageInputs.jsx';
import BrandSelect from '../BrandSelect/BrandSelect.jsx';
import { clearFilters, setFilters } from '../../redux/filter/slice.js';
import { clearCars } from '../../redux/catalog/slice.js';
import { selectAllFilters } from '../../redux/filter/selectors.js';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/catalog/operations.js';
import { cleanFilters } from '../../utils/cleanFilters.js';

const initialLocalFilters = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

export default function FilterBox() {
  const dispatch = useDispatch();
  const savedFilters = useSelector(selectAllFilters);

  // локальний стейт для форми

  const [localFilters, setLocalFilters] = useState(savedFilters);

  // якщо Redux-фільтри зміняться (наприклад reset), оновлюємо локальні

  useEffect(() => {
    setLocalFilters(savedFilters);
  }, [savedFilters]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // зберігаємо у Redux

    dispatch(setFilters(localFilters));

    // очищаємо список і робимо новий запит з фільтрами

    dispatch(clearCars());
    dispatch(fetchCars({ page: 1, ...cleanFilters(localFilters) }));
  };

  const handleReset = () => {
    // скидаємо локальні фільтри
    setLocalFilters(initialLocalFilters);

    // скидаємо Redux-фільтри
    dispatch(clearFilters());

    // очищаємо список машин
    dispatch(clearCars());

    // запит без фільтрів
    dispatch(fetchCars({ page: 1 }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrap}>
        <BrandSelect
          value={localFilters.brand || ''}
          onChange={(value) =>
            setLocalFilters((prev) => ({ ...prev, brand: value }))
          }
        />

        <PriceSelect
          value={localFilters.rentalPrice || ''}
          onChange={(value) =>
            setLocalFilters((prev) => ({ ...prev, rentalPrice: value }))
          }
        />

        <MileageInputs
          min={localFilters.minMileage || ''}
          max={localFilters.maxMileage || ''}
          onChangeMin={(value) =>
            setLocalFilters((prev) => ({ ...prev, minMileage: value }))
          }
          onChangeMax={(value) =>
            setLocalFilters((prev) => ({ ...prev, maxMileage: value }))
          }
        />
      </div>

      <div className={css.buttonGroup}>
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
        <button type="button" className={css.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
