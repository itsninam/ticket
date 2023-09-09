import React, { useContext } from "react";

import EventCard from "../Components/EventCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import { CurrentEventsContext } from "../Contexts/CurrentEventsContext";

const CurrentEvents = () => {
  const {
    currentEvents,
    isLoading,
    errorMessage,
    filterEventCategories,
    categories,
  } = useContext(CurrentEventsContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  const formatDate = (date) => {
    let month = new Date(date).toLocaleString("default", { month: "short" });
    let day = new Date(date).getDate();

    return `${month} ${day}`;
  };

  return (
    <>
      {currentEvents.length > 0 && (
        <section>
          {categories.map((category) => {
            return (
              <React.Fragment key={category.title}>
                <h3>{category.title}</h3>
                <ul className="current-events-list">
                  {filterEventCategories(category.type).map((event) => {
                    return (
                      <EventCard
                        key={event.id}
                        image={event.performers[0].image}
                        eventName={event.short_title}
                        date={formatDate(event.datetime_local)}
                        location={event.venue.city}
                      />
                    );
                  })}
                </ul>
              </React.Fragment>
            );
          })}
        </section>
      )}
    </>
  );
};

export default CurrentEvents;
