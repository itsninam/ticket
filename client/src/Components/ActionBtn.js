const ActionBtn = ({ buttonText, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="action-btn">
      {buttonText}
    </button>
  );
};

export default ActionBtn;
