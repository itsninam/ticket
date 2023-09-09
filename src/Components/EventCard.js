const EventCard = ({ image, eventName, date, location }) => {
  return (
    <div>
      <img src={image} alt={eventName} />
      <p>{eventName}</p>
      <span>
        {date} - {location}
      </span>
    </div>
  );
};

export default EventCard;
