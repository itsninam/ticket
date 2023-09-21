import { Routes, Route } from "react-router";
import { CurrentEventsProvider } from "./Contexts/CurrentEventsContext";
import { SearchEventsProvider } from "./Contexts/SearchEventsContext";
import { SellTicketProvider } from "./Contexts/SellTicketContext";

import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import SellTickets from "./Pages/SellTickets";
import Support from "./Pages/Support";
import Account from "./Pages/Account";
import SearchResults from "./Pages/SearchResults";
import EventDetails from "./Pages/EventDetails";

function App() {
  return (
    <div className="wrapper">
      <SearchEventsProvider>
        <NavBar />
        <SellTicketProvider>
          <CurrentEventsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="sell-tickets" element={<SellTickets />} />
              <Route path="support" element={<Support />} />
              <Route path="account" element={<Account />} />
              <Route path="results" element={<SearchResults />} />
              <Route path="event-details/:id" element={<EventDetails />} />
            </Routes>
          </CurrentEventsProvider>
        </SellTicketProvider>
      </SearchEventsProvider>
    </div>
  );
}

export default App;
