import { useRef, useContext } from "react";
import { CurrentEventsContext } from "../Contexts/CurrentEventsContext";

import LoadingSpinner from "../Components/LoadingSpinner";
import EventCardContainer from "../Components/EventCards/EventCardContainer";
import EventCardHeader from "../Components/EventCards/EventCardHeader";
import EventCard from "../Components/EventCards/EventCard";
import EventCardList from "../Components/EventCards/EventCardList";
import NoEventAvailable from "../Components/EventCards/NoEventAvailable";
import useFormatDate from "../Hooks/useFormatDate";

const CurrentEvents = () => {
  const { formatDate } = useFormatDate();

  const {
    currentEvents,
    isLoading,
    errorMessage,
    filterEventCategories,
    categories,
  } = useContext(CurrentEventsContext);

  // Source for approach: https://stackoverflow.com/a/66977283
  const eventCardRef = useRef({});

  const onhandleNextCard = (eventsListContainer) => {
    const eventsContainer = eventCardRef.current[eventsListContainer];
    eventsContainer.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  const onhandlePrevCard = (eventsListContainer) => {
    const eventsContainer = eventCardRef.current[eventsListContainer];
    eventsContainer.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage || !currentEvents.length) {
    return <p>{errorMessage}</p>;
  }

  return (
    <section>
      {categories.map((category) => {
        return (
          <EventCardContainer key={category.title}>
            <EventCardHeader
              header={category.title}
              onhandleNextCard={() => onhandleNextCard(category.title)}
              onhandlePrevCard={() => onhandlePrevCard(category.title)}
            />
            <EventCardList
              id={category.title}
              ref={(el) => (eventCardRef.current[category.title] = el)}
            >
              {filterEventCategories(category.type).map((event) => {
                return (
                  <EventCard
                    event={event.id}
                    key={event.id}
                    image={event.performers[0].image}
                    eventName={event.short_title}
                    date={formatDate(event.datetime_local)}
                    location={event.venue.city}
                  />
                );
              })}
              <NoEventAvailable category={category} />
            </EventCardList>
          </EventCardContainer>
        );
      })}
    </section>
  );
};

export default CurrentEvents;
