import createCardSection from "./components/weatherCard.js";
import createHero from "./components/hero.js";
import getWeatherData from "./getWeatherData.js";

export default async function loadContent(location, dataUnit) {
    const mainLayout = document.querySelector('.main-layout');
    mainLayout.textContent = "";

    const { heroMetrics, weatherMatrics } = await getWeatherData(location, dataUnit);
    
    const heroSection = createHero(heroMetrics);
    const detailsSection = createCardSection(weatherMatrics);
    
    mainLayout.appendChild(heroSection);
    mainLayout.appendChild(detailsSection);
}


