import React from "react";


export default function Header(){
    return(
        <header className="AppHeader">

        <div className="AppHeaderItems">
          <div className="contLeft">
            <img width={70} height={70} src="./img/kozak.png" alt="kozak" />
            <div className="contLefttext">
              <h4>АКСУК</h4>
              <p>Академiя Культурноï Спадщини Украïнського Козацтва</p>
            </div>

          </div>

          <div className="contRight">
            <div className="contRighttext">
              <p>Мої репетитори</p>
            </div>

          </div>
        </div>
      </header>
    )
}