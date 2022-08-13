// const { fetchMyIP } = require('./iss_callback_hell');
// const { fetchCoordsByIP } = require('./iss_callback_hell');
// const { fetchISSFlyOverTimes } = require('./iss_callback_hell');
const { nextISSTimesForMyLocation } = require('./iss_callback_hell');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   };

//   console.log('It worked! Returned IP:' , ip);
// });

//----------------------------------------------------------------------
// fetchCoordsByIP('138.94.57.254', (error, coordinates) => {
//   if (error) {
//     console.log("The Geo-search didn't work!", error);
//     return;
//   };

//   console.log("It worked! Returned coordinates!", coordinates);
// });

// //----------------------------------------------------------------------
// const exampleCoords = { latitude: 9.8638091, longitude: -83.9161935 };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   };

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

//----------------------------------------------------------------------

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);
});