$(document).ready(function(){

  $("#getWeatherBtn").on("click",function(){
    
    //fade in and out effect jQuery
    $("html").fadeOut().fadeIn();

    //Making the URL

    var api = "https://api.openweathermap.org/data/2.5/weather?";
    var zip = "zip=" + $("#zipCode").val();
    var appid = "&appid=000c53231273df2ac9323e70eee830d4";
    var units = "&units=imperial";
    const reset_Value = "NA";

    var urlOWM = api + zip + appid + units;

    //Getting Data

    $.getJSON(urlOWM, function(result){

      var weatherInfo = result;
      var iconUrl = "https://openweathermap.org/img/wn/" + weatherInfo.weather[0].icon + "@2x.png";
      console.log(weatherInfo);                                   

      /* Changing all the information based on data */
//////////////////////////////////////////////////////////

      $("#locationName").text(weatherInfo.name + ", " + weatherInfo.sys.country);
      $("#condition").text(weatherInfo.weather[0].description);

      $("#currentTemp").text(Math.round(weatherInfo.main.temp));
      $("#minTemp").text(Math.round(weatherInfo.main.temp_min));
      $("#maxTemp").text(Math.round(weatherInfo.main.temp_max));

      $("#windSpeed").text(Math.round(weatherInfo.wind.speed));
      $("#humidity").text(weatherInfo.main.humidity);
      $("#pressure").text(weatherInfo.main.pressure);
      $("#weatherIcon").attr("src", iconUrl);
    })

//////////////////////////////////////////////////////////



    // alerts user ZIP CODE INVALID and resets weather
//////////////////////////////////////////////////////////

    .fail(function(err){
      alert("Invalid Zip Code");
      
      $("#locationName").text("Location: " + reset_Value)
      $("#condition").text("Condition: " + reset_Value);

      $("#currentTemp").text(reset_Value);
      $("#minTemp").text(reset_Value);
      $("#maxTemp").text(reset_Value);

      $("#windSpeed").text(reset_Value);
      $("#humidity").text(reset_Value);
      $("#pressure").text(reset_Value);
      $("#weatherIcon").attr("src", "naicon.png");
      })
      
//////////////////////////////////////////////////////////
    


    // clears Zip Code textbox
//////////////////////////////////////////////////////////
    
    .always(function(){
      $("#zipCode").val("");
      });

//////////////////////////////////////////////////////////
  });
  
});
