

document.addEventListener('DOMContentLoaded', function() {
    
    const apiKey = "d2a3eceae5f22124641f4b4f818ce36e";
    const elements = {
        searchBox: document.querySelector(".search-box"),
        searchButton: document.querySelector(".btn"),
        dash: document.querySelector(".dash"),
        cityName: document.querySelector(".city-name"),
        temperature: document.querySelector(".temperature"),
        minTemp: document.querySelector(".min-temp"),
        maxTemp: document.querySelector(".max-temp"),
        loading: document.querySelector(".loading"),
        errorMessage: document.querySelector(".error-message"),
        box2: document.querySelector(".box2"),
        box3: document.querySelector(".box3")
    };

    const fetchWeather = async (city) => {
    
        elements.loading.style.display = "block";
        elements.box2.style.display = "none";
        elements.box3.style.display = "none";
        elements.errorMessage.style.display = "none";

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === 200) {
                
                elements.dash.textContent = data.weather[0].description.toUpperCase();
                elements.cityName.textContent = data.name;
                elements.temperature.innerHTML = `Temp: ${Math.round(data.main.temp)}<sup>°</sup>C`;
                elements.minTemp.innerHTML = `Min Temp: ${Math.round(data.main.temp_min)}<sup>°</sup>C`;
                elements.maxTemp.innerHTML = `Max Temp: ${Math.round(data.main.temp_max)}<sup>°</sup>C`;
                
                
                elements.box2.style.display = "block";
                elements.box3.style.display = "block";
            } else {
                throw new Error(data.message || "City not found");
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
            elements.errorMessage.textContent = `Error: ${error.message}`;
            elements.errorMessage.style.display = "block";
        } finally {
            elements.loading.style.display = "none";
        }
    };

    const handleSearch = () => {
        const city = elements.searchBox.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            elements.errorMessage.textContent = "Please enter a city name!";
            elements.errorMessage.style.display = "block";
        }
    };

    
    elements.searchButton.addEventListener("click", handleSearch);
    elements.searchBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
});