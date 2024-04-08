import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return <input type="text" onChange={handleChange} />;
};

export default SearchBox;
