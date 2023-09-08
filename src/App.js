import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

import { Routes, Route } from "react-router";
import SellTickets from "./Pages/SellTickets";
import Support from "./Pages/Support";
import Account from "./Pages/Account";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sell-tickets" element={<SellTickets />} />
        <Route path="support" element={<Support />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
