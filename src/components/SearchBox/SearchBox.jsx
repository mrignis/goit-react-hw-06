import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../redux/actions";
import styles from "../SearchBox/SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);

  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div>
      <input
        className={styles.searchBox}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;