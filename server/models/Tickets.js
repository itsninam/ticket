const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventCity: {
    type: String,
    required: true,
  },
  eventCountry: {
    type: String,
    required: true,
  },
  eventPrice: {
    type: Number,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
});

const TicketModel = mongoose.model("tickets", TicketSchema);
module.exports = TicketModel;
