import React, { Component } from "react";
import SearchEmployee from "./SearchEmployee"
import ResultList from "./ResultList"
import "./styles.css";

class EmployeeDiv extends Component {
    state = {
        search: "",
        results: []
      };

    render () {
        return (
            <div className="headerDiv">
                <h1>Search an employee</h1>
                <h2>Type in a name</h2>
                <SearchEmployee />
                
                <ResultList results={this.state.results} />
            </div>
        );
    }
}





export default EmployeeDiv;