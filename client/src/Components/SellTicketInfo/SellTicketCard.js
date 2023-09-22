import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SellTicketCard = ({ headerTitle, icon, description }) => {
  return (
    <li className="sell-tickets-card">
      <h2>{headerTitle}</h2>
      <FontAwesomeIcon icon={icon} className="icon" />
      <p>{description}</p>
    </li>
  );
};

export default SellTicketCard;
