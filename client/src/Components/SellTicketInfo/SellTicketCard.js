import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SellTicketCard = ({ headerTitle, icon, description }) => {
  return (
    <li className="sell-tickets-card">
      <h4>{headerTitle}</h4>
      <FontAwesomeIcon icon={icon} className="icon" />
      <p>{description}</p>
    </li>
  );
};

export default SellTicketCard;
