class WeatherApp {
    constructor() {
        //API Key
        this.apiKey = document.getElementById('apiKeyInput');

         //Text Input
         this.cityInput = document.getElementById('cityInput');
         this.getWeatherBtn = document.getElementById('WeatherBtn');

         //Geolocation Input
        this.getLocationBtn = document.getElementById('LocationBtn');
        
        //Weather Card
        this.weatherCard = document.getElementById('weatherCard');
    }
}