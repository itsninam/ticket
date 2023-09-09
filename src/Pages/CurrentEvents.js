import React, { useEffect, useState } from "react";

import EventCard from "../Components/EventCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const CurrentEvents = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = "MzY0Mjk1NjN8MTY5NDEzNzY5OS41ODgyNzU";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);

        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await fetch(
              `https://api.seatgeek.com/2/events?lat=${latitude}&lon=${longitude}&per_page=100&client_id=${apiKey}`
            );

            if (!response.ok) {
              console.log(response.status);
              setErrorMessage("Something went wrong with finding events");
              setIsLoading(false);
            } else {
              const data = await response.json();
              setCurrentEvents(data.events);
              setIsLoading(false);

              if (!data.events.length) {
                setErrorMessage("No events found");
              }
            }
          });
        } else {
          console.error("Geolocation is not available in this browser.");
          setErrorMessage("Unable to find events in your area at this time");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching SeatGeek data:", error);
        setErrorMessage(error);
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filterEventCategories = (type) => {
    return currentEvents.filter((event) => event.type === type);
  };

  const categories = [
    {
      type: "mlb",
      title: "Sports",
    },
    {
      type: "concert",
      title: "Concerts",
    },
    {
      type: "comedy",
      title: "Comedy",
    },
    {
      type: "broadway_tickets_national",
      title: "Broadway",
    },
    {
      type: "theater",
      title: "Theater",
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <>
      {currentEvents.length > 0 && (
        <section>
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <h3>{category.title}</h3>
                {filterEventCategories(category.type).map((event, index) => {
                  return (
                    <EventCard
                      key={event.id}
                      image={event.performers[0].image}
                      eventName={event.short_title}
                      date={event.datetime_local}
                      location={event.venue.city}
                    />
                  );
                })}
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default CurrentEvents;
