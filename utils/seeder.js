const Room = require("../models/room.model");
const rooms = require("../data/rooms");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:ambetsa3270@main-booking-app.g2a1m.mongodb.net/BOOKIT-DB?retryWrites=true&w=majority"
);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("all the initial rooms deleted");

    await Room.insertMany(rooms)
      .then(() => {
        console.log("all the rooms inserted successfully");
        process.exit();
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error.message);
  }
};

seedRooms();
