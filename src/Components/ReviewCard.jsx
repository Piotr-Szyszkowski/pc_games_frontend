import { Link } from "react-router-dom";
import "../Css/ReviewCard.css";

function ReviewCard({
  id,
  title,
  category,
  release_date,
  cover_img,
  review_intro,
}) {
  //   const { title, category, release_date, cover_img, review_intro } = reviewObj;
  // console.log(reviewObj);
  console.log(id);
  console.log(title);
  return (
    <section className="ReviewCard">
      <Link to={`/review/${id}`}>
        <div className="cover_image-container">
          <img
            className="cover_image"
            alt={`Cover for ${title}`}
            src={cover_img}
          />
          {/* </div> */}
        </div>
        {/* <div className="upper"> */}
        {/* <div className="upper-left"> */}
        <div className="content">
          <h1 className="title">{title}</h1>
          <div>
            <h2 className="category">{category}</h2>
            <h2 className="release_date">{release_date}</h2>
          </div>
          {/* </div> */}
          {/* <div className="lower"> */}
          <p className="review_intro">{review_intro}</p>
          {/* </div> */}
        </div>
      </Link>
    </section>
  );
}

export default ReviewCard;
