import { useSelector, useDispatch } from 'react-redux';
import style from './SearchBox.module.css';
import {
  changeFilterByName,
  changeFilterByNumber,
} from '../../redux/filters/slice';
import {
  selectNameFilter,
  selectNumberFilter,
} from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterByName = useSelector(selectNameFilter);
  const filterByNumber = useSelector(selectNumberFilter);

  const handleFilterChangeByName = (e) => {
    dispatch(changeFilterByName(e.target.value));
  };

  const handleFilterChangeByNumber = (e) => {
    dispatch(changeFilterByNumber(e.target.value));
  };

  return (
    <div className={style.container}>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filterByName}
        onChange={handleFilterChangeByName}
      ></input>

      <p className={style.text}>Find contacts by number</p>
      <input
        className={style.input}
        type="text"
        value={filterByNumber}
        onChange={handleFilterChangeByNumber}
      ></input>
    </div>
  );
};

export default SearchBox;
