const axios = require('axios');
const fs = require('mz/fs');

setInterval(function () {
    let temp = parseInt(fs.readFileSync('/sys/bus/w1/devices/28-0317021921ff/w1_slave').toString().split('=')[2]) / 1000
    console.log(temp);
    axios.post("http://192.168.1.100:5000/info", {
            temperature: temp.toString()
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}, 1000)
