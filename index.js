const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  // console.log(ip);
  if (error) {
    console.log("It didn't work!", error);
    return;
  };

  console.log('It worked! Returned IP:' , ip);
  return;
});







// $ curl https://api.ipify.org?format=json