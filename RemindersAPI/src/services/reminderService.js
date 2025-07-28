import { ReminderModel } from "../models/reminderModel.js";

export const ReminderService = {
  async getAllReminders() {
    return ReminderModel.getAll();
  },
  async getReminderById(id) {
    const reminder = await ReminderModel.findById(id);
    if (!reminder) {
      throw new Error("Reminder not found");
    }
    return reminder;
  },

  async createReminder(newReminder) {
    const { reminder, notes, user_id } = newReminder;
    const sanitizedReminder = {
      reminder: reminder?.trim(),
      notes: notes?.trim(),
      user_id,
    };
    const createdReminder = await ReminderModel.create(sanitizedReminder);
    return createdReminder;
  },

  async updateReminder(id, newValues) {
    const { reminder, notes, completed } = newValues;
    const fields = Object.keys(newValues);
    const setClause = fields.map((key, index) => `${key} = $${index + 1}`);
    const values = Object.values(newValues);
    values.push(id); // Add the id to the end of the values array for the WHERE clause

    const query = `
      UPDATE reminders
      SET ${setClause.join(", ")}
      WHERE id = $${values[values.length - 1]}
      RETURNING *;`;
    console.log(query);
    const updatedReminder = await ReminderModel.update(query, values);
    if (!updatedReminder) {
      throw new Error("Reminder not found");
    }
    return updatedReminder;
  },

  async deleteReminder(id) {
    const authenticatedUser = 1;
    const reminder = await ReminderModel.findById(id);

    if (!reminder) {
      throw new Error("Reminder not found");
    }
    if (reminder.user_id !== authenticatedUser) {
      throw new Error("You are not authorized to delete this reminder");
    }
    const rowCount = await ReminderModel.delete(id);
    if (rowCount === 0) {
      throw new Error("Failed to delete reminder");
    }
    return { message: "Reminder deleted successfully" };
  },
};
