import React, {useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header.js"
import Descr from "./Components/Descr.js"
import Drawer from "./Components/Drawer.js"
import SearchBar from "./Components/Search.js"
import Cards from "./Components/Cards.js"
import Login from "./Components/Login.js"


function App() {
  const[isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <Drawer />
        <Header />
        <Descr />
        <SearchBar />

        <div className="cardContainer">
          <div className="card__container">
            <Cards />
          </div>
        </div>
        <Route path="/login" render={()=>(
          isAuthenticated ? (
            <ProtectedComponent />
          ): (
            <Login to="/login" />
          )
        )}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
