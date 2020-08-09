import React from "react";
import "./styles.css";

function SearchEmployee(props) {
  
  return (
    
<form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search an employee here..."
          id="employee"
        />
       
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    );
}

export default SearchEmployee;
