import mongoose, { Mongoose } from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1/admin-api");
    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
