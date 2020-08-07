import React from "react";
import "./styles.css";

function SearchEmployee(props) {
  return (
<form className="search">
      <div className="form-group">
        <label htmlFor="breed">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Search an employee here..."
          id="breed"
        />
        <datalist id="breeds">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    );
}

export default SearchEmployee;
