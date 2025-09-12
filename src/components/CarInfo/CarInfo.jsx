import CarFeatures from '../CarFeatures/CarFeatures.jsx';
import CarSpecs from '../CarSpecs/CarSpecs.jsx';
import RentalConditions from '../RentalConditions/RentalConditions.jsx';
import css from './CarInfo.module.css';

export default function CarInfo({ car }) {
  return (
    <div className={css.wrapper}>
      <RentalConditions conditions={car.rentalConditions} />
      <CarSpecs
        year={car.year}
        type={car.type}
        fuelConsumption={car.fuelConsumption}
        engineSize={car.engineSize}
      />
      <CarFeatures
        accessories={car.accessories}
        functionalities={car.functionalities}
      />
    </div>
  );
}
