import { useEffect, useState } from "react";
import { getAllReviews } from "../Utils/api";
import ReviewCard from "./ReviewCard";
import "../Css/Reviews.css";
import Loader from "./Loader";

function Reviews() {
  const [reviewsList, setReviewsList] = useState([]);
  const [isloding, setIsLodaing] = useState(true);

  useEffect(() => {
    setIsLodaing(true);
    getAllReviews().then((reviewsFromApi) => {
      console.log(reviewsFromApi);
      setReviewsList(reviewsFromApi);
      setIsLodaing(false);
    });
  }, []);

  console.log(reviewsList);
  return (
    <section className="Reviews">
      {isloding ? (
        <Loader />
      ) : (
        reviewsList.map(
          ({
            review_id,
            title,
            category,
            release_date,
            cover_img,
            review_intro,
          }) => {
            return (
              <ReviewCard
                key={review_id}
                title={title}
                category={category}
                release_date={release_date}
                cover_img={cover_img}
                review_intro={review_intro}
              />
            );
          }
        )
      )}
    </section>
  );
}

export default Reviews;
// forcing push
