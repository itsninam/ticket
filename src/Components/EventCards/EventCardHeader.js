const EventCardHeader = ({ header, onClick }) => {
  return (
    <div className="flex-container">
      <h3>{header}</h3>
      <button onClick={onClick}>NExt</button>
    </div>
  );
};

export default EventCardHeader;
