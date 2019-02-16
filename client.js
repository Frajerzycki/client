const axios = require('axios');
axios.get('http://192.168.1.109:5000').then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
