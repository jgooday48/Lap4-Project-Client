import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import './GuideReviews.css'
import Stars from '../../components/Stars'


const GuideReviews = ({ id }) => {
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


    const calculatePercentage = (count) => {
        return (count / totalReviews) * 100;
    };


    return (
        <div className="guide-reviews-container">
            <div className="guide-total-reviews">
            <Stars num={averageRating} /> <b>{averageRating} out of 5</b>
                <div className="rating-chart">
                {[...Array(5).keys()].map((rating, index) => {
                    const currentRating = 5 - rating;
                    return (
                        <div key={index} className="rating-bar">
                            <div className="bar" style={{ width: `${calculatePercentage(ratingDictionary[currentRating])}%`, fontSize:'small' }}>
                                {currentRating}
                            </div>
                            <p className="rating-stars">{currentRating} stars</p>.
                            <div className="percentage" >
                                {calculatePercentage(ratingDictionary[currentRating]).toFixed(2)}%
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
           
            <div className="guide-reviews-block">
            {reviews.map(r => (
                <div className="guide-reviews-card" key={r.review_id}>
                    <div >
                        <div className="guide-review-title">
                        <Stars num={r.rating} /> &nbsp;&nbsp;
                            <b>{r.title}</b>
                        </div>
                        <div style={{fontSize:'smaller'}}>Reviewed on {new Date(r.timestamp).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                  
                    <p style={{ marginTop: '1em' }}>{r.comment}</p>
                
                </div>
            ))}
             </div>
        </div>
    )
}

export default GuideReviews


    // useEffect(() => {
//   // Create a chart once ratingDictionary is updated
//   const ctx = document.getElementsByClassName('ratingChart')

//   // Destroy the existing chart if it exists
//   if (chartInstance) {
//     chartInstance.destroy();
//   }

//   if (ctx) {
//     const chartData = {
//       labels: Object.keys(ratingDictionary),
//       datasets: [{
//         data: Object.values(ratingDictionary),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.5)',
//           'rgba(255, 205, 86, 0.5)',
//           'rgba(75, 192, 192, 0.5)',
//           'rgba(54, 162, 235, 0.5)',
//           'rgba(153, 102, 255, 0.5)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(255, 205, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(153, 102, 255, 1)',
//         ],
//         borderWidth: 1,
//       }],
//     };

//     const config = {
//       type: 'bar',
//       data: chartData,
//       options: {
//            scales: {
//       y: {
//         type: 'linear',
//         beginAtZero: true,
//         max: 5.5,
//         ticks: {
//           fontSize: 100, // Set the font size for the y-axis labels
//         },
//       },
//       x: {
//         ticks: {
//           fontSize: 100, // Set the font size for the x-axis labels
//         },
//       },
//     },
//     responsive: true,
//       },
//     };

//     // Create the new chart and store its instance
//     chartInstance = new Chart(ctx, config);
//   }
// }, [ratingDictionary, totalReviews]);
