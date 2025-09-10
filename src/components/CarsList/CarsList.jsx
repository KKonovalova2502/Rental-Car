import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/catalog/selectors.js';
import css from './CarsList.module.css';
import CarCard from '../CarCard/CarCard.jsx';

export default function CarsList() {
  const cars = useSelector(selectCars);
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li key={car.id} className={css.item}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}
