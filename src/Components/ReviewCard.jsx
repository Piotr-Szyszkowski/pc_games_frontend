function ReviewCard(reviewObj) {
  //   const { title, category, release_date, cover_img, review_intro } = reviewObj;
  console.log(reviewObj);
  return (
    <section>
      <h1>Title: {reviewObj.reviewObj.title}</h1>
    </section>
  );
}

export default ReviewCard;
