import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/reminders", (req, res) => {
    res.send("Get all reminders");
});

app.get("/:id", (req, res) => {
    res.send("Get reminder by id");
});

app.post("/reminders", (req, res) => {
    res.send("Create newreminder");
});

app.patch("/reminders/:id", (req, res) => {
    res.send("Update reminder by id");
});

app.delete("/reminders/:id", (req, res) => {
    res.send("Delete reminder by id");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
