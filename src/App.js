import Navbar from "./Component/Navbar.js";
import Card from "./Component/Card.js";
import React from 'react'
import CustomerData from "./Component/CustomerData.js"

function App() {

  const[isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <div>
      <Navbar data={setIsLoggedIn}  initial={isLoggedIn} /> 
      <CustomerData/>
    </div>
  );
}

export default App;
