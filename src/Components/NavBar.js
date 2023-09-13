import { useLocation } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import TicketSearch from "./TicketSearch";

const NavBar = () => {
  const { pathname } = useLocation();
  const navClass = pathname === "/" ? "nav-home" : "nav-bar";

  return (
    <nav className={navClass}>
      <Logo />
      {pathname !== "/support" && pathname !== "/" && <TicketSearch />}

      <AppNav />
    </nav>
  );
};

export default NavBar;
