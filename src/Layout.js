import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">خانه</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">ورود به سیستم</Link>
          </li>

          {/* <li className="nav-item">
            <Link className="nav-link" to="/expenseTracker">مدیریت سرمایه</Link>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link" to="/Others">سایتهای بیرونی</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      {/* <footer>footer</footer> */}
    </div>
  );
}
