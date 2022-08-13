// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

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

// const exampleCoords = { latitude: 9.8638091, longitude: -83.9161935 };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   };

//   console.log('It worked! Returned flyover times:' , passTimes);
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  console.log(passTimes);
});