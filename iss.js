const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;

    if (ip) {
      callback(null, ip);
    } else {
      callback("IP not found");
    }

});
}

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
  
    if (error) {
      callback(error, null);
      return;
    }

    const geo = JSON.parse(body);

    if (!geo.success) {
      const message = `Success status was ${geo.success}. Server message says: ${geo.message} when fetching for IP ${geo.ip}`;
      callback(Error(message), null);
      return;

    }
    
    const { latitude, longitude } = geo;

    callback(null, {latitude, longitude});
  });
};


const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};

const nextISSTimesForMyLocation = function(callback) {

};


// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };
// module.exports = { fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };