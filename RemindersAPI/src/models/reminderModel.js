import db from "../config/db.js";

export const ReminderModel = {
  async getAll() {
    const result = await db.query(
      "SELECT * FROM reminders ORDER BY created_at DESC"
    );
    return result.rows;
  },
  async findById(id) {
    const result = await db.query("SELECT * FROM reminders WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  },

  async create({ reminder, notes, user_id }) {
    const result = await db.query(
      `
            INSERT INTO reminders (reminder, notes, user_id)
            VALUES ($1, $2, $3) RETURNING *`,
      [reminder, notes, user_id]
    );
    return result.rows[0];
  },
  async delete(id) {
    const result = await db.query("DELETE FROM reminders WHERE id = $1", [id]);
    return result.rowCount;
  },
  async update(query, values) {
    const result = await db.query(query, values);
    return result.rows[0];
  },
};
