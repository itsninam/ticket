import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

import SellTicketForm from "../Components/SellTicketForm";
import TicketUpload from "../Components/TicketUpload";
import SellTicketCardList from "../Components/SellTicketInfo/SellTicketCardList";
import ActionBtn from "../Components/ActionBtn";

const SellTickets = () => {
  const { isFormOpen, handleOpenForm } = useContext(SellTicketContext);

  return (
    <section className="sell-ticket-section">
      <SellTicketCardList />
      {isFormOpen && <SellTicketForm />}
      <ActionBtn buttonText="Upload Ticket" onClick={handleOpenForm} />

      <TicketUpload />
    </section>
  );
};

export default SellTickets;
