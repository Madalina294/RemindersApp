export const ReminderController = {
  async getAllReminders(req, res) {
    res.send("Get all reminders");
  },

  async getReminderById(req, res) {
    res.send("Get reminder by id");
  },

  async createReminder(req, res) {
    res.send("Create new reminder");
  },
  async updateReminder(req, res) {
    res.send("Update reminder by id");
  },
  async deleteReminder(req, res) {
    res.send("Delete reminder by id");
  },
};
