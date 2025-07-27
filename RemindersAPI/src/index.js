import express from "express";
import remindersRoutes from "./routes/remindersRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/reminders", remindersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
