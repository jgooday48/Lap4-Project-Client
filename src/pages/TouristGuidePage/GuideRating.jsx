import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import Stars from '../../components/Stars'

const GuideRating = ({ id }) => {
          const [reviews, setReviews] = useState([])
    const [totalReviews, setTotalReviews] = useState(0);
  const [ratingDictionary, setRatingDictionary] = useState({});

    
    const fetchGuideReviews = async () => {
        try {
            const res = await axios.get(`${baseApi}reviews/guideId:${id}`);
            const reviewData = res.data;
            setReviews(reviewData);
            setTotalReviews(reviewData.length);

            const ratingDict = {};
            reviewData.forEach(review => {
                const rating = review.rating;

                if (ratingDict[rating]) {
                    ratingDict[rating]++;
                } else {
                    ratingDict[rating] = 1;
                }
            });

            setRatingDictionary(ratingDict);
        } catch (error) {
            console.error(error);
        }
    };


    const averageRating = reviews.length > 0
        ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(2)
        : 0;
    useEffect(() => {
        fetchGuideReviews()
    }, [id])
  return (
    <div><Stars num={averageRating} /></div>
  )
}

export default GuideRating