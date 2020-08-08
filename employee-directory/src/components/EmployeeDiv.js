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
            sortEmployee: "desc",
            employees: [],
            results: [],
            error: null,
        };

        //const[employeeState, setEmployeeState] = useState ({
        // search: "",
        // employees: [],
        // results: [],
        // error: null,
        // })

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    // useEffect(() => {
    //     // For demonstration purposes, we mock an API call.
    //     API.searchEmployee
    //      .then((res) => {
    //       setEmployeeState(res.data.results);
    //       console.log("Developer State:");
    //       console.log(developerState);
    //     });
    //   }, []);

    componentDidMount() {
        API.searchEmployee()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const searchEmployeeList = event.target.value;
        this.state.employees.filter(names => {
            let values = names.name.first.toLowerCase();
            return values.indexOf(searchEmployeeList.toLowerCase()) !== -1;
        })
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
        this.setState({sortEmployee})
    }



    render() {
        console.log(this.state.employees);
        const {employees, sortEmployee}  = this.state;

        const sortEmployeeList = employees.sort( (a, b) => {
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
                    employees={sortEmployeeList}
                    onSort={this.onSort}
                    

                />

            </div>
        );
    }
}
export default EmployeeDiv;