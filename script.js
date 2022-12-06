$(document).ready(function(){
    $("#btn").click(function(){
        var country = $("#input").val()
        var URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=b5166d7f045db123ba11e0c56eb8eec1`
        fetch(URL, {method: "GET"})
        .then((response) => response.json())
        .then((response) => {
        $("#ctr").text(response.name)
        $("#tmp").text(response.main.temp - 273)
        $("#sunrise").text(new Date(response.sys.sunrise).toUTCString())
        $("#sunset").text(new Date(response.sys.sunset).toTimeString())
        $("#desc").text(response.weather[0].description)

        })
        .catch((response) => console.log(err))
    })
    
})