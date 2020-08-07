import React, { Component } from "react";
import SearchEmployee from "./SearchEmployee"
import EmployeeDetail from "./EmployeeDetail"
import Jumbotron from "./Jumbotron";

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
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }
    handleFormSubmit = event => {
        event.preventDefault();
        API.searchEmployee(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

   handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

    render() {
        console.log(this.state.employees);
        // const  employees  = this.state;
        return (
            <div className="headerDiv">
                <Jumbotron />

                <h1>Search an employee</h1>
                <h2>Type in a name</h2>
                <SearchEmployee
                    employees={this.state.employees}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeDetail
                    employees={this.state.employees}

                />

            </div>
        );
    }
}
export default EmployeeDiv;