import React from "react";

export default function SerchBar(){
    return(
        <div className="cardsTitle">
        <h2>Всі репетитори</h2>
        <div className="search-bar" >
          <img src="./img/icons8-search-24.png" alt="search"/>
          <input type="text" placeholder="Пошук..."/>
        </div>
     </div>
    )
}