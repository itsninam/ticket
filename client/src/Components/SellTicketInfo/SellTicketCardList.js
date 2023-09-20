import { useState } from "react";
import sellTickets from "./sellTickets";
import SellTicketCard from "./SellTicketCard";

const SellTicketCardList = () => {
  const [ticketInfo, setTicketInfo] = useState(sellTickets);

  return (
    <ul className="sell-tickets-card-list">
      {ticketInfo.map((info) => {
        return (
          <SellTicketCard
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
