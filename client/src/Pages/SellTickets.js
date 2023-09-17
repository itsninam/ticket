import SellTicketForm from "../Components/SellTicketForm";
import TicketUpload from "../Components/TicketUpload";

const SellTickets = () => {
  return (
    <section className="sell-ticket-section">
      <SellTicketForm />
      <TicketUpload />
    </section>
  );
};

export default SellTickets;
