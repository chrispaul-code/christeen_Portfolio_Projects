const express  = require ("express");
const https = require("https");

const app = express();


app.get("/",function(req,res){

   const url   ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=2c9755d7a3a2016ce1d5e202a219d6ea&units=metric"
   
   https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data",  function(data){
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const discription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = " https://openweathermap.org/img/wn/"+ icon + "@2x.png"
        res.write("<p>The weathercis currently " + discription + "<p>");
        res.write(" <h1> The temperature in London is " + temp + " degrees Celcius .</h1>  ");
        res.write ("<img src="+imageURL+ ">");
        res.send()
    })
   }) 
  
   
})


 


app.listen(3000 , function(){
 console.log("Server is running innport 3000");
})