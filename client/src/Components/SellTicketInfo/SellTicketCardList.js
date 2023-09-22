import sellTickets from "./sellTickets";
import SellTicketCard from "./SellTicketCard";

const SellTicketCardList = () => {
  return (
    <ul className="sell-tickets-card-list">
      {sellTickets.map((info) => {
        return (
          <SellTicketCard
            key={info.id}
            headerTitle={info.headerTitle}
            icon={info.icon}
            description={info.description}
          />
        );
      })}
    </ul>
  );
};

export default SellTicketCardList;
