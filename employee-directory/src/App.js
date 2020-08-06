import React from 'react';
import EmployeeDiv from "./components/EmployeeDiv";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";


function App() {
 return (
   <div className="container">
     <Jumbotron />
     <EmployeeDiv />
     <Footer />

   </div>
 )
}

export default App;
