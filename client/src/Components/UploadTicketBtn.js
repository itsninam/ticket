import { useContext } from "react";
import { SellTicketContext } from "../Contexts/SellTicketContext";

const UploadTicketBtn = () => {
  const { handleOpenForm } = useContext(SellTicketContext);

  return (
    <button onClick={handleOpenForm} className="upload-btn">
      Upload Ticket
    </button>
  );
};

export default UploadTicketBtn;
