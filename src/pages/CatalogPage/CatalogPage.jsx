import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList.jsx';
import FilterBox from '../../components/FilterBox/FilterBox.jsx';
import {
  selectError,
  selectLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/catalog/selectors.js';
import { selectAllFilters } from '../../redux/filter/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/catalog/operations.js';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectAllFilters);

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const cleanFilters = Object.fromEntries(
      Object.entries(filters || {}).filter(
        ([, v]) => v !== '' && v !== null && v !== undefined,
      ),
    );

    dispatch(fetchCars({ ...cleanFilters, page: Number(page) + 1 }));
  };

  return (
    <div className={css.wrap}>
      <FilterBox />
      {loading && <Loader />}
      {error && (
        <p style={{ color: '#3470ff', fontSize: '20px' }}>
          Oops!.. Something went wrong... <br />
          Wait, everything will be fine now!
        </p>
      )}
      <CarsList />
      {page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
