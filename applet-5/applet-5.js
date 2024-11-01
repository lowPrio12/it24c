class WeatherApp {
    constructor() {
        //API Key
        this.apiKey = document.getElementById('apiKeyInput');

         //Text Input
         this.cityInput = document.getElementById('cityInput');
         this.WeatherBtn = document.getElementById('WeatherBtn');

         //Geolocation Input
        this.LocationBtn = document.getElementById('LocationBtn');
        
        //Weather Card
        this.weatherCard = document.getElementById('weatherCard');
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.description = document.getElementById('description');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');

         //Event Listener
         this.WeatherBtn.addEventListener('click', () => this.fetchWeather());
         this.LocationBtn.addEventListener('click', () => this.fetchWeatherByLocation());
    }
}