// const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   };

//   console.log('It worked! Returned IP:' , ip);
// });



// fetchCoordsByIP('138.94.57.254', (error, coordinates) => {
//   if (error) {
//     console.log("The Geo-search didn't work!", error);
//     return;
//   };

//   console.log("It worked! Returned coordinates!", coordinates);
// });