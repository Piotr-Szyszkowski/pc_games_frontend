import axios from "axios";

const pcGamesApi = axios.create({
  baseURL: `https://pc-games-api.onrender.com/api`,
});

export const getAllReviews = async () => {
  const allReviews = await pcGamesApi.get(`/reviews`);
  return allReviews;
};
