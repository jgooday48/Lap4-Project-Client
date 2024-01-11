// import React, { useState, useEffect } from 'react';
// import GuideImage from '../GuideImage';
// import axios from 'axios';
// // Display information about a guide
// // Props: name, username, email, specialisation

// const GuidePanel = () => {
//     const [guides, setGuides] = useState([]);

//     useEffect(() => {
//       const fetchGuides = async () => {
//         try {
//           const { data } = await axios.get('http://localhost:5000/guides');  // Update the API endpoint
//           setGuides(data);
//         } catch (error) {
//           console.error('Error fetching guides:', error);
//           setGuides([]); // Set guides to an empty array in case of an error
//         }
//       };
  
//       fetchGuides();
//     }, []);


//   return (
//     <div>
//       {/* <h2>{name}</h2>
//       <p>Username: {username}</p>
//       <p>Email: {email}</p>
//       <p>Location: {location}</p>
//       <p>Specialisation: {specialisation}</p> */}
//         <GuideImage guides={guides} />

//     </div>
//   );
// }

// export default GuidePanel;
