import { SearchEventsContext } from "../Contexts/SearchEventsContext";
import { useContext } from "react";

const TicketSearch = () => {
  const { userInput, setUserInput, handleSearchEvents } =
    useContext(SearchEventsContext);

  return (
    <form action="" onSubmit={handleSearchEvents} className="search-form">
      <label htmlFor="search" className="sr-only">
        Search event or city
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for an event"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <span class="material-icons">search</span>
    </form>
  );
};

export default TicketSearch;
