import { SearchEventsContext } from "../Contexts/SearchEventsContext";
import { useContext } from "react";

const TicketSearch = () => {
  const { userInput, setUserInput, handleSearchEvents } =
    useContext(SearchEventsContext);

  return (
    <form action="" onSubmit={handleSearchEvents}>
      <label htmlFor="search">Search event</label>
      <input
        type="text"
        id="search"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
    </form>
  );
};

export default TicketSearch;
