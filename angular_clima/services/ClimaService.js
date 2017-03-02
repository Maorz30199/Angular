app.factory("clima", function($http){

  var URLWEATHER = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22CIUDAD%2C%20PAIS%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  var temp;
  var description;

  var loadWeather = function(ciudad, pais){
    var url = URLWEATHER.replace("CIUDAD", ciudad);
    url = url.replace("PAIS", pais);

    $http.get(url).success(function(data){
        service.temp=data.query.results.channel
          .item.condition.temp;
        service.description=data.query.results.channel
          .item.condition.text;
    });

  };

  var service = {temp:temp
  , description: description
  , loadWeather: loadWeather};

  return service;

});
