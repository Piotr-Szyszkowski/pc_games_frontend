
import { useState } from "react";
import { getAllReviews } from "./Utils/api";

const Home = ()=>{
    const [reviewsList, setReviewsList] = useState(["Some fake test stuff"])
   const updateReviews = () =>{
    getAllReviews().then((reviewsFromApi)=>{setReviewsList(reviewsFromApi)})
   
   }
    console.log(reviewsList);
    return (
        <section>
            <button onClick={updateReviews}>Change reviewsList</button>
            <p>Home placeholder</p>
        </section>
    )
      
    
}

export default Home;