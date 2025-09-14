import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <Link className={css.container} to="/">
      <div className={css.logo}>
        <svg width="104" height="16">
          <use href="/sprite-icons.svg#icon-Logo" />
        </svg>
      </div>
    </Link>
  );
}
