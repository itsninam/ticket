import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";
import LoadingSpinner from "./LoadingSpinner";

const TicketUpload = () => {
  const {
    tickets,
    isLoading,
    statusMessage,
    handleRemoveUploadedTicket,
    handleEditUploadForm,
  } = useContext(SellTicketContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!tickets.length) {
    return <p>{statusMessage}</p>;
  }

  return (
    <>
      <ul>
        {tickets.map((ticket) => {
          return (
            <li key={ticket._id}>
              {ticket.eventName}
              <button onClick={() => handleRemoveUploadedTicket(ticket)}>
                delete
              </button>
              <button onClick={() => handleEditUploadForm(ticket)}>edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TicketUpload;
