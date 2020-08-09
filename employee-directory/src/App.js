import React from 'react';
import EmployeeDiv from "./components/EmployeeDiv";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Container from './components/Container';
import SearchEmployee from './components/SearchEmployee';



function App() {
  return (
    <div>
      <Jumbotron />
      <EmployeeDiv />


      <Container>
        <Footer />
      </Container>



    </div>
  )
}

export default App;


