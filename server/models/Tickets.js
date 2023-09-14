const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: Object,
    city: {
      type: String,
    },
    country: {
      type: String,
    },
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
