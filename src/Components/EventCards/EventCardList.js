import { forwardRef } from "react";

const EventCardList = forwardRef(({ children }, ref) => {
  return (
    <ul ref={ref} className="current-events-list">
      {children}
    </ul>
  );
});

export default EventCardList;
