import { SearchEventsContext } from "../Contexts/SearchEventsContext";
import { useContext } from "react";

import Input from "./Input";

const TicketSearch = () => {
  const { userInput, setUserInput, handleSearchEvents } =
    useContext(SearchEventsContext);

  return (
    <form action="" onSubmit={handleSearchEvents} className="search-form">
      <Input
        htmlFor="search"
        labelText="Search event or city"
        className="sr-only"
        type="text"
        id="search"
        placeholder="Search for an event"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <span className="material-icons">search</span>
    </form>
  );
};

export default TicketSearch;
