import { useParams } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import CarDescr from '../../components/CarDescr/CarDescr.jsx';
import CarImage from '../../components/CarImage/CarImage.jsx';
import CarInfo from '../../components/CarInfo/CarInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedCar } from '../../redux/catalog/selectors.js';
import { getCarById } from '../../redux/catalog/operations.js';
import { clearSelectedCar } from '../../redux/catalog/slice.js';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader.jsx';

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = useSelector(selectSelectedCar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarById(id));

    return () => {
      dispatch(clearSelectedCar());
    };
  }, [dispatch, id]);

  if (!car) return <Loader />;

  return (
    <div>
      <CarImage car={car} />
      <CarDescr car={car} />
      <CarInfo car={car} />
      <BookingForm car={car} />
    </div>
  );
}
