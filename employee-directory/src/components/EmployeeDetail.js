import React from "react";
import "./styles.css";


function EmployeeDetail(props) {
  return (
    
        <table>

      <thead>
        <tr>
          <th>Profile Pic</th>
          <th><button type="submit" onClick={()=>props.onSort("asc")}>Name</button></th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>

      {props.employees.map(employee => (

          <tbody key={employee} id="employeeTable">
            <tr>
              <td><img alt="avatar" src={employee.picture.medium} className="img-fluid" /></td>
              <td id="employeeColumnName">{employee.name.first}  {employee.name.last}</td>
              <td id="employeeColumnName">{employee.phone}</td>
              <td id="employeeColumnName">{employee.email}</td>
            </tr>
          </tbody>



      ))}
        </table>


  );
}

export default EmployeeDetail;
