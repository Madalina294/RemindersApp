import { ReminderService } from "../services/reminderService.js";
export const ReminderController = {
  async getAllReminders(req, res) {
    try {
      const reminders = await ReminderService.getAllReminders();
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async getReminderById(req, res) {
    try {
      const reminderId = parseInt(req.params.id, 10);
      const reminder = ReminderService.getReminderById(reminderId);
      res.status(200).json(reminder);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async createReminder(req, res) {
    try {
      const reminder = ReminderService.createReminder(req.body);
      res.status(201).json(reminder);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  async updateReminder(req, res) {
    try {
      const reminderId = parseInt(req.params.id, 10);
      const reminder = ReminderService.updateReminder(reminderId, req.body);
      res.status(200).json(reminder);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  async deleteReminder(req, res) {
    try {
      const reminderId = parseInt(req.params.id, 10);
      const reminder = ReminderService.deleteReminder(reminderId);
      res.status(200).json(reminder);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
