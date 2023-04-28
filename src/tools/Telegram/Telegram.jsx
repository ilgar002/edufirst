import axios from "axios";
const token = "5952468225:AAHBpS9npw5PI2O4xdXihhuqhSQw7D8JKqI";
const chat_id = "1478484656";
const TELEGRAM_API_BASE_URL = `https://api.telegram.org/bot${token}/`;

export const sendMessage = (msg) => {
  const url = `${TELEGRAM_API_BASE_URL}sendMessage`;
  const data = { chat_id, text: msg };
  axios.post(url, data);
};
