import SellTicketForm from "../Components/SellTicketForm";
import TicketUpload from "../Components/TicketUpload";
import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

const SellTickets = () => {
  const { isFormOpen, handleFormOpen } = useContext(SellTicketContext);
  return (
    <section className="sell-ticket-section">
      {isFormOpen && <SellTicketForm />}
      <TicketUpload />
      <button onClick={handleFormOpen}>Upload Ticket</button>
    </section>
  );
};

export default SellTickets;
