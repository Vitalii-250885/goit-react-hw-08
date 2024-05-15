import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import TextField from "@mui/material/TextField";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={css.filter__wrapper}>
      <TextField
        id="outlined-search"
        label="Find contacts by name"
        type="text"
        value={filter}
        onChange={onFilterChange}
        size="small"
      />
    </div>
  );
};

export default SearchBox;
