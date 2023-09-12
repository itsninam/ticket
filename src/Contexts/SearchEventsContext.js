import { createContext, useState } from "react";
import useNavigateToPage from "../Hooks/useNavigateToPage";

const SearchEventsContext = createContext();

const SearchEventsProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { navigateToPage } = useNavigateToPage();

  const apiKey = "MzY0Mjk1NjN8MTY5NDEzNzY5OS41ODgyNzU";

  const fetchEvents = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.seatgeek.com/2/events?per_page=200&q=${userInput}&client_id=${apiKey}`
      );

      if (!response.ok) {
        console.log(response.status);
        setErrorMessage("Something went wrong with finding events");
        setIsLoading(false);
        console.log(errorMessage);
      } else {
        const data = await response.json();
        setSearchResults(data.events);
        console.log(data.events);
        setIsLoading(false);

        if (!data.events.length) {
          setErrorMessage("No events found");
        }
      }
    } catch (error) {
      console.error("Error fetching SeatGeek data:", error);
      setErrorMessage(error);
      setIsLoading(false);
    }
  };

  const handleSearchEvents = (event) => {
    event.preventDefault();

    if (!userInput) return;

    fetchEvents();
    navigateToPage("/results");
    setUserInput("");
  };

  return (
    <SearchEventsContext.Provider
      value={{
        searchResults,
        isLoading,
        errorMessage,
        userInput,
        setUserInput,
        handleSearchEvents,
      }}
    >
      {children}
    </SearchEventsContext.Provider>
  );
};

export { SearchEventsContext, SearchEventsProvider };
