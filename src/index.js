import './styles/style.css';
import getWeatherData from './modules/getWeatherData.js';
import loadContent from './modules/domController.js';

const search = document.querySelector(".search-input");

search.addEventListener("keydown", (event) => {
    if(event.key === 'Enter') {
        event.preventDefault();

        if(!search.value.trim()) {
            return;
        }

        loadContent(search.value);
    }
})

loadContent();