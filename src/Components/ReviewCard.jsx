import "../Css/ReviewCard.css";

function ReviewCard({
  title,
  category,
  release_date,
  cover_img,
  review_intro,
}) {
  //   const { title, category, release_date, cover_img, review_intro } = reviewObj;
  // console.log(reviewObj);
  return (
    <section className="ReviewCard">
      <div className="upper">
        <div className="upper-left">
          <h1 className="title">{title}</h1>
          <div>
            <h2 className="category">{category}</h2>
            <h2 className="release_date">{release_date}</h2>
          </div>
        </div>
        <div className="cover_image-container">
          <img
            className="cover_image"
            alt={`Cover for ${title}`}
            src={cover_img}
          />
        </div>
      </div>
      <div className="lower">
        <p className="review_intro">{review_intro}</p>
      </div>
    </section>
  );
}

export default ReviewCard;
