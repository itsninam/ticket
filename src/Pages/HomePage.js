import TicketSearch from "../Components/TicketSearch";

const HomePage = ({ children }) => {
  return (
    <header>
      <p>Home</p>
      <TicketSearch />
    </header>
  );
};

export default HomePage;
