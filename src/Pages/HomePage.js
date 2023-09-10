import TicketSearch from "../Components/TicketSearch";
import CurrentEvents from "./CurrentEvents";

const HomePage = () => {
  return (
    <>
      <header>
        <p>Home</p>
        <TicketSearch />
      </header>
      <main>
        <h2>Upcoming events in your area</h2>
        <CurrentEvents />
      </main>
    </>
  );
};

export default HomePage;
