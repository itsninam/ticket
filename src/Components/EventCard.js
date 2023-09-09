const EventCard = ({ image, eventName, date, location }) => {
  return (
    <li>
      <img src={image} alt={eventName} />
      <p>{eventName}</p>
      <span>
        {date} - {location}
      </span>
    </li>
  );
};

export default EventCard;
