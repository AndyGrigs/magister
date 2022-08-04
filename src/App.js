import React from "react";
import Header from "./Components/Header/Header.js"
import Descr from "./Components/Description/Descr.js"
import Drawer from "./Components/Drawer/Drawer.js"
import SearchBar from "./Components/Search/Search.js"
import Cards from "./Components/Cards/Cards.js"


function App() {
  return (
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

     

      
   


        




    </div>
  );
}

export default App;


/*АКСУК - Академiя Культурноï Спадщини Украïнського Козацтва */