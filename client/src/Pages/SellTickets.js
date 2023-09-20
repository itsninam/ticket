import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

import SellTicketForm from "../Components/SellTicketForm";
import TicketUpload from "../Components/TicketUpload";
import SellTicketCardList from "../Components/SellTicketInfo/SellTicketCardList";
import UploadTicket from "../Components/UploadTicket";

const SellTickets = () => {
  const { isFormOpen } = useContext(SellTicketContext);

  return (
    <section className="sell-ticket-section">
      <SellTicketCardList />
      {isFormOpen && <SellTicketForm />}
      <UploadTicket />
      <TicketUpload />
    </section>
  );
};

export default SellTickets;
