// Constants and variables
const port = 8000;
const apiKey = "8xQ92qgIbjcIu7Yhys6PnGCVlH6BYbGb"


// Default Values
var userCity = "Bangalore";
var cityCode = 206671;

var cityQuery_url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+ apiKey +"&q="+ userCity;
var forecast_url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/"+ cityCode +"?apikey="+ apiKey +"&details=false&metric=true";
const chennaiKey = 206671;





// Initiatives
const express = require("express");
const app = express();

const http = require("http");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));






// Functions







// APP CODE

app.get("/", function(req, res){

    res.sendFile(`${__dirname}/index.html`);
    
});





app.post("/", function(req, res){

    userCity = req.body.cityName;
    console.log(req.body.cityName);

    // Handling the Locator API
    var cityQuery_url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+ apiKey +"&q="+ userCity;

    http.get(cityQuery_url, function(response){
        console.log("Status code: " + response.statusCode);

        response.on("data", function(data){
            console.log(data);
            var searchData = JSON.parse(data[0]);
            console.log(searchData);

        });
    });

    res.send("Thank you");
});





app.listen(port, function(){

    console.log(`Server is up and running on port ${port}`);

});









// http.get(forecast_url, function(response){
//     console.log(response.statusCode);

//     response.on("data", function(data){
//         const weather_data = JSON.parse(data);
//         console.log(weather_data.DailyForecasts[0].Temperature.Minimum.Value);

//         res.send(`<h1>The minimum temp of Chennai is: ${weather_data.DailyForecasts[0].Temperature.Minimum.Value} Celsius</h1><br>The weather is currently ${weather_data.Headline.Text}`);
//     });
// });

// API CALL for searching city:
// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=8xQ92qgIbjcIu7Yhys6PnGCVlH6BYbGb&q={your city}&language=en-us&details=false&offset=5 HTTP/1.1

// API CALL FOR WEATHER: 
// http://dataservice.accuweather.com/forecasts/v1/daily/1day/206671?apikey=8xQ92qgIbjcIu7Yhys6PnGCVlH6BYbGb&metric=true%20HTTP/1.1



