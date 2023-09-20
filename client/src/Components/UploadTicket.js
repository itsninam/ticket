import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

const UploadTicket = () => {
  const { handleOpenForm } = useContext(SellTicketContext);

  return <button onClick={handleOpenForm}>Upload Ticket</button>;
};

export default UploadTicket;
