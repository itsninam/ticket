import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <ul className="nav-list">
      <li>
        <Link to="sell-tickets">Sell</Link>
      </li>
      <li>
        <Link to="support">Support</Link>
      </li>
      <li>
        <Link to="account">Account</Link>
      </li>
    </ul>
  );
};

export default AppNav;
