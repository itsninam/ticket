import { createContext, useState, useEffect } from "react";
import axios from "axios";

const SellTicketContext = createContext();

const SellTicketProvider = ({ children }) => {
  const userInputInitialValues = {
    eventName: "",
    eventCity: "",
    eventCountry: "",
    eventPrice: "",
    eventDate: "",
  };

  const [tickets, setTickets] = useState([]);
  const [userInput, setUserInput] = useState(userInputInitialValues);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/getTickets").then((response) => {
      console.log(response.data);
      setTickets(response.data);
    });
  }, []);

  const handleAddTicketSubmit = (event) => {
    event.preventDefault();

    const newTicket = {
      eventName: userInput.eventName,
      eventCity: userInput.eventCity,
      eventCountry: userInput.eventCountry,
      eventPrice: userInput.eventPrice,
      eventDate: userInput.eventDate,
    };

    axios
      .post("http://localhost:3001/createTicket", newTicket)
      .then((response) => {
        console.log("User created");
        setTickets([...tickets, newTicket]);
        setUserInput({ ...userInputInitialValues });
      });

    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <SellTicketContext.Provider
      value={{
        userInput,
        setUserInput,
        handleAddTicketSubmit,
        handleInputChange,
        tickets,
        handleFormOpen,
        isFormOpen,
      }}
    >
      {children}
    </SellTicketContext.Provider>
  );
};

export { SellTicketContext, SellTicketProvider };
