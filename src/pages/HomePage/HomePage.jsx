import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.descr}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button className={css.btn} onClick={() => navigate('/catalog')}>
        View Catalog
      </button>
    </div>
  );
}
