import { Link } from "react-router-dom";

export default function Home(props) {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div className="mainContainer" >
      <div className="titleContainer">
        <div>خوش آمدید!</div>
      </div>

      <br />
      <div>
        نرم افزار مدیریت سرمایه
      </div>
      <br />

      <img className="homeImg" src="./images/calculator.jpeg" alt="imgAlt" />
      {/* <div className="buttonContainer homeButtonContainer"> */}
      <div className="btnContainer">
        {/* <input
          className="inputButton"
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "خروج" : "ورود"} />
        {(loggedIn ? <div>
          نام کاربری شما: {username}
        </div> : <div />)} */}

        <Link className="link" to="/login">
          <button className="btnHome">ورود</button>
        </Link>
        <button className="btnHome" onClick={logout}>خروج</button>


        {/* <Link className="link" to="/login" value={loggedIn ? "خروج" : "ورود"}>
            {isLoggedIn ? 'خروج' : 'ورود'}

          </Link> */}
      </div>
    </div >
  )
}


