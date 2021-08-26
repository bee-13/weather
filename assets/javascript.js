//-------------city search functoin--------------//
function searchCity(cityName) {
    var queryURL ="" + cityName + "";
    var queryURLforcast ="" + cityName + "";

    $.ajax({
        url : queryURL,
        method: "GET"
    }).then(function(response) {
        $(".city-display").empty();
        var currentDate = " (" + moment().format("MM/DD/YYYY") + ") ";

        var currentInfoDiv = $("<div>");

        var cityNameH = $("<h2>").text(response.name);
        var displayDate = cityNameH.append(" " + currentDate);
        var temp = $("<p>").text("Tempraturer: " + response.main.temp);
        var hum = $("<p>").text("Humidity: " + response.main.humidity);
        var wind = $("<p>").text("Wind Speed: " + response.wind.speed);
        var currentweather = response.weather[0].main;
        
    }
    )
}