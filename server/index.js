const express = require("express");
const app = express();
const mongoose = require("mongoose");
const TicketModel = require("./models/Tickets");

app.use(express.json());

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

app.listen(3001, () => {
  console.log("Server running");
});
