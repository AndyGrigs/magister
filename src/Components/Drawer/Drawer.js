import React from "react";

export default function Drawer(){
    return(
        <div style={{display: "none"}}  className="overlay">
        <div className="drawer">
          <h2>Вибрані репетитори</h2>
           <div className="drawer-item">
            <img  width={100} height={90} src="https://cdn.pixabay.com/photo/2022/07/11/15/15/man-7315352_960_720.jpg" alt="tutor" />
            <div className="drawer-descr">
              <h4 className="tutorsName">Іваненко Іван Михайлович</h4>
              <button>Чат з репетитором</button>
            </div>
           </div>

        </div>
      </div>
    )
}