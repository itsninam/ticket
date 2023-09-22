import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrentEventsContext } from "../Contexts/CurrentEventsContext";
import LoadingSpinner from "../Components/LoadingSpinner";
import useFormatDate from "../Hooks/useFormatDate";
import useFormatTime from "../Hooks/useFormatTime";

const EventDetails = () => {
  const { formatDate } = useFormatDate();
  const { formatTime } = useFormatTime();
  const { currentEvents, isLoading } = useContext(CurrentEventsContext);
  let { id } = useParams();

  const chosenEvent = currentEvents.find((event) => event.id === Number(id));

  if (isLoading || !chosenEvent) {
    return <LoadingSpinner />;
  }

  return (
    <div className="event-details">
      <div className="event-information">
        <h2>{chosenEvent.short_title}</h2>
        <p>
          {formatDate(chosenEvent.datetime_local)} at{" "}
          {formatTime(chosenEvent.datetime_local)} &#x2022;{" "}
          {chosenEvent.venue.name}, {chosenEvent.venue.display_location}
        </p>
        <p>Avergage price: ${chosenEvent.stats.average_price}</p>
        <a
          href={chosenEvent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn"
        >
          Find Tickets
        </a>
      </div>
      <img
        src={chosenEvent.performers[0].images.huge}
        alt={chosenEvent.short_title}
      />
    </div>
  );
};

export default EventDetails;
