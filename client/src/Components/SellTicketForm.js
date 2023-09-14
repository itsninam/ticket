import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

const SellTicket = () => {
  const { handleAddTicketSubmit, handleInputChange, userInput, tickets } =
    useContext(SellTicketContext);

  return (
    <>
      <form onSubmit={handleAddTicketSubmit} className="sell-ticket-form">
        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={userInput.eventName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="eventCity">City </label>
        <input
          type="text"
          id="eventCity"
          name="eventCity"
          value={userInput.eventCity}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="eventCountry">Country</label>
        <input
          type="text"
          id="eventCountry"
          name="eventCountry"
          value={userInput.eventCountry}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="eventPrice">Price</label>
        <input
          type="number"
          id="eventPrice"
          name="eventPrice"
          value={userInput.eventPrice}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="eventDate">Date</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={userInput.eventDate}
          onChange={handleInputChange}
          required
        />

        <button className="action-btn">Submit</button>
      </form>
      {tickets.map((ticket) => {
        return <p key={ticket._id}>{ticket.eventName}</p>;
      })}
    </>
  );
};

export default SellTicket;
