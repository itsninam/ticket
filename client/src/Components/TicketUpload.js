import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";
import LoadingSpinner from "./LoadingSpinner";

const TicketUpload = () => {
  const {
    tickets,
    isLoading,
    statusMessage,
    handleRemoveUploadedTicket,
    handleEditUploadedTicket,
  } = useContext(SellTicketContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <p>{statusMessage}</p>
      <ul>
        {tickets.map((ticket) => {
          return (
            <li key={ticket._id}>
              {ticket.eventName}
              <button onClick={() => handleRemoveUploadedTicket(ticket)}>
                delete
              </button>
              <button onClick={() => handleEditUploadedTicket(ticket)}>
                edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TicketUpload;
