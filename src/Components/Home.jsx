
import { useState } from "react";
import { getAllReviews } from "../Utils/api";

const Home = () => {
    const [reviewsList, setReviewsList] = useState([])
    const updateReviews = () => {
        getAllReviews().then((reviewsFromApi) => { setReviewsList(reviewsFromApi) })

    }
    console.log(reviewsList);
    return (
        <section>
            <button onClick={updateReviews}>Change reviewsList</button>
            <p>Home placeholder</p>
            {reviewsList.map((reviewObject) => {
                return (
                    <div>
                        <h1 key={reviewObject.review_id}>{reviewObject.title}</h1>
                        <img src={reviewObject.cover_img} alt="Cover" />
                    </div>
                )
            })}
        </section>
    )


}

export default Home;