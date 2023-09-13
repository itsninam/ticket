import { Link, useLocation } from "react-router-dom";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";

const Logo = () => {
  const { pathname } = useLocation();

  const logoSrc = pathname === "/" ? logoLight : logoDark;

  return (
    <h1 className="logo">
      <Link to="/">
        <img src={logoSrc} alt="logo" />
        <span>TicketWonder</span>
      </Link>
    </h1>
  );
};

export default Logo;
