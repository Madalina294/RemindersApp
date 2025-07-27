export const ReminderController = {
  async getAllReminders(req, res) {
    res.send("Get all reminders");
  },

  async getReminderById(req, res) {
    const reminderId = parseInt(req.params.id, 10);
    res.send(`Get reminder by id: ${reminderId}`);
  },

  async createReminder(req, res) {
    const reminder = req.body.reminder;
    res.send("Create new reminder: " + reminder);
  },
  async updateReminder(req, res) {
    const reminderId = parseInt(req.params.id, 10);
    res.send(`Update reminder by id: ${reminderId}`);
  },
  async deleteReminder(req, res) {
    const reminderId = parseInt(req.params.id, 10);
    res.send(`Delete reminder by id: ${reminderId}`);
  },
};
