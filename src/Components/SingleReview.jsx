import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../Utils/api";

function SingleReview() {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const {
    title,
    category,
    cover_img,
    release_date,
    review_intro,
    review_body,
    upvotes,
    downvotes,
    rating,
    comment_count,
  } = currentReview;

  useEffect(() => {
    getSingleReview(review_id).then((reviewFromAPI) => {
      setCurrentReview(reviewFromAPI);
    });
  }, []);

  console.log(review_id);
  console.log(currentReview);

  return (
    <section className="SingleReview">
      <p>Placeholder for Single Review. We should have a:</p>
      <p>{`TITLE: ${title}`}</p>
      <p>{`CATEGORY: ${category}`}</p>
      <p>{`COVER IMAGE:`}</p>
      <img src={cover_img}></img>
      <p>{`RELEASE DATE: ${release_date}`}</p>
      <p>{`REVIEW INTRO: ${review_intro}`}</p>
      <p>{`REVIEW BODY: ${review_body}`}</p>
      <p>{`RATING: ${rating}`}</p>
      <p>{`UPVOTES: ${upvotes}`}</p>
      <p>{`DOWNVOTES: ${downvotes}`}</p>
      <p>{`COMMENT COUNT: ${comment_count}`}</p>
    </section>
  );
}

export default SingleReview;
