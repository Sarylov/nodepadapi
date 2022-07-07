const db = require("../db");
const moment = require("moment");

// отдает все посты разбивая на 2 массива: избранные и не избранные
module.exports.getAllRecords = async (req, res) => {
  const favorites = await db.query(
    "SELECT id, title, time, favorites FROM records WHERE favorites=true ORDER BY time DESC;"
  );

  const noFavorites = await db.query(
    "SELECT id, title, time, favorites FROM records WHERE favorites=false ORDER BY time DESC;"
  );

  try {
    res.status(200).json([favorites.rows, noFavorites.rows]);
  } catch (error) {
    console.log("getAllPosts: " + error);
  }
};

// отдает определeнный пост по id
module.exports.getRecord = async (req, res) => {
  const { id } = req.params;
  const record = await db.query("SELECT * FROM records where id = $1", [id]);

  try {
    res.status(200).json(record.rows[0]);
  } catch (error) {
    console.log("getPost: " + error);
  }
};

// добавляет пост
module.exports.addRecord = async (req, res) => {
  const { text, title } = req.body;
  let isFavorites = req.body.favorites ? true : false;

  try {
    const newRecord = await db.query(
      "INSERT INTO records (text, title, favorites) values ($1, $2, $3) RETURNING *",
      [text, title, isFavorites]
    );
    res.status(201).json(newRecord.rows[0]);
  } catch (error) {
    console.log("newRecord: " + error);
  }
};

// обновление данных в записи
module.exports.updateRecord = async (req, res) => {
  const { text, title, favorites } = req.body;
  const { id } = req.params;

  try {
    await db.query(
      "UPDATE records SET text = $2, title = $3, favorites = $4, time = CURRENT_TIMESTAMP  WHERE id = $1",
      [id, text, title, favorites]
    );
    res.status(200).json({ message: "данные обновлены" });
  } catch (error) {
    console.log(error);
  }
};

// убрать добавить избранное
module.exports.updateFavorites = async (req, res) => {
  const { favorites } = req.body;
  const { id } = req.params;

  try {
    await db.query("UPDATE records SET favorites = $2 WHERE id = $1", [
      id,
      favorites,
    ]);
    res.status(200).json({ message: "данные обновлены" });
  } catch (error) {
    console.log(error);
  }
};

// Удаляет определенной пост по id
module.exports.removeRecord = async (req, res) => {
  const { id } = req.body;
  try {
    await db.query("DELETE FROM records where id = $1", [id]);
    res.status(200).json({
      message: `запись ${id} был удален`,
    });
  } catch (error) {
    console.log(error);
  }
};
