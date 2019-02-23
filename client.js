const axios = require('axios');
const fs = require('mz/fs');
const ip = 'localhost';
setInterval(function () {
    let temp = parseInt(fs.readFileSync('/sys/bus/w1/devices/28-0317021921ff/w1_slave').toString().split('=')[2]) / 1000;
    //let temp = 22;
    axios.post(`http://${ip}:5000/info`, {
            temperature: temp.toString(),
	    date: Date.now()
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}, 1000);
