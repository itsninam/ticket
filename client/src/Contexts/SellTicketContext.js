import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

const SellTicketContext = createContext();

const SellTicketProvider = ({ children }) => {
  const userInputInitialValues = useMemo(
    () => ({
      eventName: "",
      eventCity: "",
      eventCountry: "",
      eventPrice: "",
      eventDate: "",
    }),
    []
  );

  const [tickets, setTickets] = useState([]);
  const [userInput, setUserInput] = useState(userInputInitialValues);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [ticketAdded, setTicketAdded] = useState(false);

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

        if (!tickets.length) {
          setIsLoading(true);
        }

        if (response.status === 200) {
          // setTickets([...tickets, newTicket]);
          setUserInput({ ...userInputInitialValues });
          setStatusMessage("");
          setTicketAdded(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setStatusMessage("Something went wrong with adding events");
      });

    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getTickets")
      .then((response) => {
        console.log(response.statusText);
        setIsLoading(true);

        if (response.status === 200) {
          setTickets(response.data);
          setIsLoading(false);

          if (!response.data.length) {
            setStatusMessage("Your events will appear here");
          }
        }
      })
      .catch((error) => {
        console.log(error);

        setStatusMessage("Something went wrong with finding events");
        setIsLoading(false);
      });
  }, [ticketAdded]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleRemoveUploadedTicket = (selectedTicket) => {
    axios
      .delete(`http://localhost:3001/deleteTicket/${selectedTicket._id}`)
      .then((response) => {
        setTickets(
          tickets.filter((ticket) => ticket._id !== selectedTicket._id)
        );
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleEditUploadedTicket = (selectedTicket) => {};

  return (
    <SellTicketContext.Provider
      value={{
        userInput,
        setUserInput,
        handleAddTicketSubmit,
        handleInputChange,
        tickets,
        handleOpenForm,
        handleCloseForm,
        isFormOpen,
        isLoading,
        statusMessage,
        handleRemoveUploadedTicket,
        handleEditUploadedTicket,
      }}
    >
      {children}
    </SellTicketContext.Provider>
  );
};

export { SellTicketContext, SellTicketProvider };
