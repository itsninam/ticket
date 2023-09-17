import { useContext } from "react";
import { CurrentEventsContext } from "../../Contexts/CurrentEventsContext";

const NoEventAvailable = ({ category }) => {
  const { filterEventCategories } = useContext(CurrentEventsContext);
  return (
    <>
      {!filterEventCategories(category.type).length && (
        <li>No events availble</li>
      )}
    </>
  );
};

export default NoEventAvailable;
