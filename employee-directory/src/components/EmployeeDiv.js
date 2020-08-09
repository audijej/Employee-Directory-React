import React, { Component } from "react";
import SearchEmployee from "./SearchEmployee"
import EmployeeDetail from "./EmployeeDetail"
import Jumbotron from "./Jumbotron";
import dataset from "../utils/dataset"

import "./styles.css";
import API from "../utils/API";


class EmployeeDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            sortEmployee: "desc",
            employees: [],
            results: [],
            error: null,
            loading: false,
            message: ""
        };

    }


    componentDidMount() {
        API.searchEmployee()
            .then(res => this.setState({ employees: res.data.results, results: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        event.preventDefault();
        const query = event.target.value;
        const filteredResults = this.state.employees.filter(employee => {
            let values = employee.name.first.toLowerCase();
            return values.indexOf(query.toLowerCase()) !== -1;
        })
        if (!query) {
            this.setState({ query, message: '' });
        } else {
            this.setState({ results: filteredResults });
        }
        // const searchEmployeeList = event.target.value;
        // const showEmployeeList = this.state.employees.filter(names => {
        //     let values = names.name.first.toLowerCase();
        //     return values.indexOf(searchEmployeeList.toLowerCase()) !== -1;
        // })

        // this.state.results = showEmployeeList
    };



    handleFormSubmit = event => {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.search);

        API.searchEmployee(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    onSort = sortEmployee => {
        this.setState({ sortEmployee })
    }



    render() {
        console.log(this.state.employees);
        // console.log(dataset)
        const { employees, sortEmployee, search, results } = this.state;

        const sortEmployeeList = employees.sort((a, b) => {
            const isReversed = (sortEmployee === "asc") ? 1 : -1;
            return isReversed * a.name.first.localeCompare(b.name.last)
        });

        // const sortEmployeeList = employees.sort((a, b) => {a.name.first.localeCompare(b.name.first)})
        // const isReversed = (sortEmployee === "ascend") ? 1 : -1;

        return (
            <div className="headerDiv">
                <Jumbotron
                />

                <h2>Type in a name</h2>
                <SearchEmployee
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                />

                <EmployeeDetail
                    employees={results}
                    onSort={this.onSort}
                    sortedEmployees={sortEmployeeList}

                />

            </div>
        );
    }
}
export default EmployeeDiv;