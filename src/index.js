import './styles/style.css';
import getWeatherData from './modules/getWeatherData.js';
import loadContent from './modules/domController.js';

// Location and Unit
let currentLocation = "San fransisco";
let currentUnit = "metric"
loadContent(currentLocation, currentUnit);

// Search functionality
const search = document.querySelector(".search-input");
search.addEventListener("keydown", (event) => {
    if(event.key === 'Enter') {
        event.preventDefault();

        if(!search.value.trim()) {
            return;
        }

        currentLocation = search.value;
        loadContent(currentLocation, currentUnit);
    }
})

// Unit Toggling
const toggleButton = document.querySelector('.toggle-group');
toggleButton.addEventListener("click", (e) => {
    const activeBtn = toggleButton.querySelector('.active');
    const inactiveBtn = toggleButton.querySelector('.inactive');

    activeBtn.classList.replace("active", "inactive");
    inactiveBtn.classList.replace("inactive", "active");

    currentUnit = currentUnit === "metric" ? "us" : "metric";
    loadContent(currentLocation, currentUnit)
})

