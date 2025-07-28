import db from "../config/db.js";

export const ReminderModel = {
  async getAll() {
    try {
      const result = await db.query(
        "SELECT * FROM reminders ORDER BY created_at DESC"
      );
      // Asigură-te că returnezi întotdeauna un array
      return result.rows || [];
    } catch (error) {
      console.error("Error in getAll:", error);
      return [];
    }
  },

  async findById(id) {
    try {
      const result = await db.query("SELECT * FROM reminders WHERE id = $1", [
        id,
      ]);
      return result.rows[0] || null;
    } catch (error) {
      console.error("Error in findById:", error);
      return null;
    }
  },

  async create({ reminder, notes, userId }) {
    const result = await db.query(
      `
      INSERT INTO reminders (reminder, notes, user_id)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [reminder, notes, userId]
    );
    return result.rows[0];
  },

  async update(query, values) {
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async delete(reminderId) {
    const result = await db.query("DELETE FROM reminders WHERE id = $1", [
      reminderId,
    ]);
    return result.rowCount;
  },
};
