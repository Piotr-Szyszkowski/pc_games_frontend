import axios from "axios";

const pcGamesApi = axios.create({
  baseURL: `https://pc-games-api.onrender.com/api`,
});

export const getAllReviews = async () => {
  const allReviewsRawData = await pcGamesApi.get(`/reviews`);
  const allReviewsArray = allReviewsRawData.data.reviews;
  return allReviewsArray;
};
