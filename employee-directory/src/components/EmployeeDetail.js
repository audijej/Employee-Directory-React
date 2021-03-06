import React from "react";
import "./styles.css";


function EmployeeDetail(props) {
  return (
    
        <table>

      <thead>
        <tr>
          <th style={{width: "25%", height: "50%"}}>Profile Pic</th>
          <th style={{width: "50%", height: "50%"}}><button  className="btn btn-success" type="submit" onClick={()=>props.onSort("asc")}>Name</button></th>
          <th style={{width: "25%", height: "50%"}}>Phone</th>
          <th style={{width: "25%", height: "50%"}}> Email</th>
        </tr>
      </thead>

      <tbody id="employeeTable">
      {props.employees.map((employee, index) => (

            <tr key={index} style={{backgroundColor: index % 2 === 0 ? "#ff33cc" : "#e495e4"}}>
              <td><img alt="avatar" src={employee.picture.medium} className="img-fluid" /></td>
              <td id="employeeColumnName">{employee.name.first}  {employee.name.last}</td>
              <td id="employeeColumnName">{employee.phone}</td>
              <td id="employeeColumnName">{employee.email}</td>
            </tr>

))}
</tbody>
        </table>


  );
}

export default EmployeeDetail;
