const request = require('request');
// var url = `https://maps.googleapis.com/maps/api/timezone/json?location=28.7041,77.1025&timestamp=1331161200&key=AIzaSyCoUIbd2b_irrDS-u8h6ihWvA8cp2Clc78`;

function getLocalTime(positionAndTimeStamp){
    // console.log(Math.floor(positionAndTimeStamp.timeStamp/1000));
    var timeStamp = Math.floor(positionAndTimeStamp.timeStamp/1000);
    var url =  `https://maps.googleapis.com/maps/api/timezone/json?location=${positionAndTimeStamp.latitude},${positionAndTimeStamp.longitude}&timestamp=${timeStamp}&key=AIzaSyCoUIbd2b_irrDS-u8h6ihWvA8cp2Clc78`;

    request(url, (error, response, body)=>{
        if(JSON.parse(body).status === "OK"){
            console.log(timeStamp + JSON.parse(body).dstOffset + JSON.parse(body).rawOffset)    
        }
        // console.log(JSON.parse(body));
        // console.log(JSON.parse(body.status))
        // console.log(JSON.parse(body).status)
        
        // console.log(timeStamp + body.dstOffset + body.rawOffset)
    })
}

module.exports = {getLocalTime};