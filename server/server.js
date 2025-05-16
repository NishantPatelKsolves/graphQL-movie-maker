import "dotenv/config";
import app from "./app.js";
import mongoose from "mongoose";
const PORT = process.env.PORT || 8000;

async function run() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Successfully connected to db.`);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.listen(PORT, () => {
      console.log(`Server active at: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Error connecting DB", err);
  }
}
run().catch(console.dir);
