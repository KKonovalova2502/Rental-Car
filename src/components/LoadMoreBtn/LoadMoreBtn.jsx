import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick, disabled }) {
  return (
    <button
      type="button"
      className={css.btn}
      onClick={onClick}
      disabled={disabled}
    >
      Load More
    </button>
  );
}
