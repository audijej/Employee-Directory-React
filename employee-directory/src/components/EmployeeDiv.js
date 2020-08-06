import React, { Component } from "react";
import SearchEmployee from "./SearchEmployee"
import EmployeeDetail from "./EmployeeDetail"
import "./styles.css";
import API from "../utils/API";


class EmployeeDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            employees: [],
            results: [],
            error: null,
        };
    }

    componentDidMount() {
        API.searchEmployee()
            .then(res => this.setState({ employees: res.data.data }))
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };



    render() {
        console.log(this.state.employees);
        const { employees } = this.state;
        return (
            <div className="headerDiv">
                <h1>Search an employee</h1>
                <h2>Type in a name</h2>
                <SearchEmployee
                    employees={this.state.employees}

                />

                <EmployeeDetail />

                <ul className="list-group search-results">
      {this.state.employees.map(employee => (
        <li key={employee} className="list-group-item">
          <p>{employee.first_name}</p>
          <p>{employee.last_name}</p>
          <p>{employee.email}</p>
          <img alt="avatar" src={employee.avatar} className="img-fluid" />
        </li>
      ))}
    </ul>

            </div>
        );
    }
}





export default EmployeeDiv;