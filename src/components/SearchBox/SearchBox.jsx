import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"; // Імпорт екшену для зміни фільтра
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter({ term: e.target.value, by: "name" }));
  };

  return (
    <div className="search-box-container">
      <div>
        <input type="text" placeholder="Search..." onChange={handleChange} />
      </div>
    </div>
  );
};

export default SearchBox;
