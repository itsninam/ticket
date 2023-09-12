import { useLocation } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import TicketSearch from "./TicketSearch";

const NavBar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <nav>
      <Logo />
      {currentLocation !== "/" && <TicketSearch />}
      <AppNav />
    </nav>
  );
};

export default NavBar;
