import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentEventsContext } from "../Contexts/CurrentEventsContext";
import LoadingSpinner from "../Components/LoadingSpinner";

const EventDetails = () => {
  const { currentEvents, isLoading } = useContext(CurrentEventsContext);
  let { id } = useParams();

  const chosenEvent = currentEvents.find((event) => event.id == id);
  console.log(chosenEvent);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!chosenEvent) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <p>{chosenEvent.short_title}</p>
      <p>${chosenEvent.stats.average_price}</p>
      <img
        src={chosenEvent.performers[0].images.huge}
        alt={chosenEvent.short_title}
      />
    </>
  );
};

export default EventDetails;
