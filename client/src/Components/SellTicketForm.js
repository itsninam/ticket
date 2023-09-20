import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

import Input from "./Input";

const SellTicket = () => {
  const {
    handleAddTicketSubmit,
    handleInputChange,
    userInput,
    handleCloseForm,
  } = useContext(SellTicketContext);

  return (
    <div className="form-container">
      <form onSubmit={handleAddTicketSubmit} className="sell-ticket-form">
        <Input
          htmlFor="eventName"
          labelText="Event Name"
          type="text"
          id="eventName"
          name="eventName"
          value={userInput.eventName}
          onChange={handleInputChange}
          required
        />

        <Input
          htmlFor="eventCity"
          labelText="City"
          type="text"
          id="eventCity"
          name="eventCity"
          value={userInput.eventCity}
          onChange={handleInputChange}
          required
        />

        <Input
          htmlFor="eventCountry"
          labelText="Country"
          type="text"
          id="eventCountry"
          name="eventCountry"
          value={userInput.eventCountry}
          onChange={handleInputChange}
          required
        />

        <Input
          htmlFor="eventPrice"
          labelText="Price"
          type="number"
          id="eventPrice"
          name="eventPrice"
          value={userInput.eventPrice}
          onChange={handleInputChange}
          required
        />

        <Input
          htmlFor="eventDate"
          labelText="Date"
          type="date"
          id="eventDate"
          name="eventDate"
          value={userInput.eventDate}
          onChange={handleInputChange}
          required
        />

        <div className="buttons-container">
          <button className="action-btn" type="submit">
            Submit
          </button>
          <button
            className="action-btn"
            onClick={handleCloseForm}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellTicket;
