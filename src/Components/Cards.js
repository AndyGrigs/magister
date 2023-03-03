import React from "react";

export default function Cards(){
    return(
        <div className="card">
        <div className="card__content">
          <img  className="card__img" width={100} height={90} src="https://cdn.pixabay.com/photo/2022/07/11/15/15/man-7315352_960_720.jpg"  alt="portrait of a man"/>
          <h3 className="card__header">Іваненко Іван Михайлович</h3>
          <p className="card__info">Репетитор англійської мови</p>
          <p className="card__info">Досвід роботи <span> 5 </span> років</p>
          <button className=" card__button">Вибрати</button>
        </div>
      </div>
    )
}