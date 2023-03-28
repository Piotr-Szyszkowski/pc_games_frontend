import { useEffect, useState } from "react";
import { getAllReviews } from "../Utils/api";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    getAllReviews().then((reviewsFromApi) => {
      setReviewsList(reviewsFromApi);
    });
  }, []);

  // console.log(reviewsList);
  return (
    <section>
      {reviewsList.map((reviewObj) => {
        return <ReviewCard key={reviewObj.review_id} reviewObj={reviewObj} />;
      })}
    </section>
  );
}

export default Reviews;
