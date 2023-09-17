import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

import SellTicketForm from "../Components/SellTicketForm";
import TicketUpload from "../Components/TicketUpload";

const SellTickets = () => {
  const { isFormOpen, handleOpenForm } = useContext(SellTicketContext);
  return (
    <section className="sell-ticket-section">
      {isFormOpen && <SellTicketForm />}
      <TicketUpload />
      <button onClick={handleOpenForm}>Upload Ticket</button>
    </section>
  );
};

export default SellTickets;
