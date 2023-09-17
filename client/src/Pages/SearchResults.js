import { useContext } from "react";
import { SearchEventsContext } from "../Contexts/SearchEventsContext";

import LoadingSpinner from "../Components/LoadingSpinner";
import SearchResultItem from "../Components/SearchResultItem";

const SearchResults = () => {
  const { searchResults, isLoading, errorMessage } =
    useContext(SearchEventsContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <ul>
      {searchResults.map((result) => {
        return <SearchResultItem key={result.id} result={result} />;
      })}
    </ul>
  );
};

export default SearchResults;
