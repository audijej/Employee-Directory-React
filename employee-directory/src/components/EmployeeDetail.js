import React from "react";
import "./styles.css";


function EmployeeDetail(props) {
  return (
    <div>
        <table >

      <thead>
        <tr>
          <th>Profile Pic</th>
          <th><button type="submit" onClick={()=>props.onSort("asc")}>Name</button></th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>

      {props.employees.map(employee => (

          <tbody key={employee} id="employeeTable" className="list-group-item">
            <tr>
              <td><img alt="avatar" src={employee.picture.medium} className="img-fluid" /></td>
              <td id="employeeColumnName">{employee.name.first}  {employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          </tbody>



      ))}
        </table>

    </div>

  );
}

export default EmployeeDetail;
