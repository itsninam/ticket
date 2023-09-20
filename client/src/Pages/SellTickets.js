import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

import SellTicketForm from "../Components/SellTicketForm";
import TicketUpload from "../Components/TicketUpload";
import SellTicketCardList from "../Components/SellTicketInfo/SellTicketCardList";
import UploadTicketBtn from "../Components/UploadTicketBtn";

const SellTickets = () => {
  const { isFormOpen } = useContext(SellTicketContext);

  return (
    <section className="sell-ticket-section">
      <SellTicketCardList />
      {isFormOpen && <SellTicketForm />}
      <UploadTicketBtn />
      <TicketUpload />
    </section>
  );
};

export default SellTickets;
