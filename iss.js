const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', function (error, response, body) {

    if (error) {
      callback(`Error: IP couldn't be obtained`);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);

    if (data) {
      callback(null, data);
    } else {
      callback("IP not found");
    }

});
}

module.exports = { fetchMyIP };