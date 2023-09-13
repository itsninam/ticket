import TicketSearch from "../Components/TicketSearch";
import CurrentEvents from "./CurrentEvents";

const HomePage = () => {
  return (
    <>
      <header className="header">
        <TicketSearch />
      </header>
      <main className="main-events">
        <h2>Upcoming events in your area</h2>
        <CurrentEvents />
      </main>
    </>
  );
};

export default HomePage;
