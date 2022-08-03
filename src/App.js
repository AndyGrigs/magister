


function App() {
  return (
    <div className="App">


      <header className="AppHeader">

       <div className="AppHeaderItems">
       <div className="contLeft"> 
            <img width={70} height={70} src="./img/kozak.jpg" alt="kozak"/>
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


      <div className="descrCard">
          <div className="descrCardItem">Науково-методичний пiдроздiл Академiï репетиторсько-просвiтницькi послуги стосовно пiдвищення рiвня знань, умiнь i навичок осiб рiзного вiку та доведення його до вимог ЕС.</div>
          <div className="descrCardItem">
          Scientific and Methodical Department of Academy proposes tutorial and educational services concerning different age persons knowledge, habits and skills level promotion and requirements of European Union level achievement.
          </div>
       </div>

      
     <div className="cardsTitle">
        <h2>Всі репетитори</h2>
        <div className="search-bar" >
          <img src="./img/icons8-search-24.png" alt="search"/>
          <input type="text" placeholder="Пошук..."/>
        </div>
     </div>

        <div className="cardContainer">   
            <div className="card__container">
            <div className="card">
              <div className="card__content">
                <img  className="card__img" width={100} height={90} src="https://cdn.pixabay.com/photo/2022/07/11/15/15/man-7315352_960_720.jpg"  alt="portrait of a man"/>
                <h3 className="card__header">Іваненко Іван Михайлович</h3>
                <p className="card__info">Репетитор англійської мови</p>
                <p className="card__info">Досвід роботи <span> 5 </span> років</p>
                <button className=" card__button">Вибрати</button>
              </div>
            </div>

            <div className="card">
              <div className="card__content">
                <img  className="card__img" width={100} height={90} src="https://cdn.pixabay.com/photo/2022/07/11/15/15/man-7315352_960_720.jpg"  alt="portrait of a man"/>
                <h3 className="card__header">Іваненко Іван Михайлович</h3>
                <p className="card__info">Репетитор англійської мови</p>
                <p className="card__info">Досвід роботи <span> 5 </span> років</p>
                <button className=" card__button">Вибрати</button>
              </div>
            </div>

            <div className="card">
              <div className="card__content">
                <img  className="card__img" width={100} height={90} src="https://cdn.pixabay.com/photo/2022/07/11/15/15/man-7315352_960_720.jpg"  alt="portrait of a man"/>
                <h3 className="card__header">Іваненко Іван Михайлович</h3>
                <p className="card__info">Репетитор англійської мови</p>
                <p className="card__info">Досвід роботи <span> 5 </span> років</p>
                <button className=" card__button">Вибрати</button>
              </div>
            </div>
        
            </div>
        </div>

        




    </div>
  );
}

export default App;


/*АКСУК - Академiя Культурноï Спадщини Украïнського Козацтва */