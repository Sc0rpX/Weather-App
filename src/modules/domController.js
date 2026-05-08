import createCardSection from "./components/weatherCard.js";
import createHero from "./components/hero.js";
import getWeatherData from "./getWeatherData.js";

export default async function loadContent() {
    const { heroMetrics, weatherMatrics } = await getWeatherData();

    const mainLayout = document.querySelector('.main-layout');
    
    const heroSection = createHero(heroMetrics);
    const detailsSection = createCardSection(weatherMatrics);
    
    mainLayout.appendChild(heroSection);
    mainLayout.appendChild(detailsSection);
}


