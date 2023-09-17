import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

const TicketUpload = () => {
  const { tickets } = useContext(SellTicketContext);
  return (
    <ul>
      {tickets.map((ticket) => {
        return <li key={ticket._id}>{ticket.eventName}</li>;
      })}
    </ul>
  );
};

export default TicketUpload;
