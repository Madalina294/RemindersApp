import { DataBase } from "../config/dataBase.js";

export const ReminderModel = {
  async getAll() {
    const result = await DataBase.query(
      "SELECT * FROM reminders ORDER BY createdAt DESC"
    );
    return result.rows;
  },
  async findById(id) {
    const result = await DataBase.query(
      "SELECT * FROM reminders WHERE id = $1",
      [id]
    );
    return result.rows[0];
  },
  async create({ reminder, notes, userId }) {
    const result = await DataBase.query(
      `
            INSERT INTO reminders (reminder, notes, userId)
            VALUES ($1, $2, $3) RETURNING *`,
      [reminder, notes, userId]
    );
    return result.rows[0];
  },
  async delete(id) {
    const result = await DataBase.query("DELETE FROM reminders WHERE id = $1", [
      id,
    ]);
    return result.rowCount;
  },
  async update() {
    //Later
  },
};
