import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList.jsx';
import FilterBox from '../../components/FilterBox/FilterBox.jsx';
import { selectError, selectLoading } from '../../redux/catalog/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/catalog/operations.js';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FilterBox />
      {loading && <Loader />}
      {error && (
        <p style={{ color: '#3470ff', fontSize: '20px' }}>
          Oops!.. Something went wrong... <br />
          Wait, everything will be fine now!
        </p>
      )}
      <CarsList />
    </div>
  );
}
