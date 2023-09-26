const express = require("express");
const app = express();
const mongoose = require("mongoose");
const TicketModel = require("./models/Tickets");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://moancea:pass123@cluster0.rqwd12p.mongodb.net/TicketWonder?retryWrites=true&w=majority"
);

app.get("/getTickets", async (req, res) => {
  try {
    const tickets = await TicketModel.find({});
    res.send(tickets);
    console.log(tickets);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

app.post("/createTicket", async (req, res) => {
  const ticket = req.body;
  const newTicket = new TicketModel(ticket);
  await newTicket.save();

  res.json(ticket);
});

app.delete("/deleteTicket/:id", async (req, res) => {
  try {
    const ticketId = req.params.id;
    const deletedTicket = await TicketModel.findByIdAndDelete(ticketId);

    if (!deletedTicket) {
      return res.status(404).json("Ticket not found");
    }

    res.json("Ticket deleted");
  } catch (err) {
    res.status(500).json("Internal error");
  }
});

app.listen(3001, () => {
  console.log("Server running");
});
