import createCardSection from "./components/weatherCard.js";
import createHero from "./components/hero.js";
import getWeatherData from "./getWeatherData.js";
import getBgImage from "./getBackgroundImage.js";

export default async function loadContent(location, dataUnit) {
    const mainLayout = document.querySelector('.main-layout');
    const bgImg = document.querySelector('#bg-img');
    mainLayout.textContent = "";

    const { heroMetrics, weatherMatrics } = await getWeatherData(location, dataUnit);
    bgImg.src = await getBgImage(heroMetrics.status);
    
    const heroSection = createHero(heroMetrics);
    const detailsSection = createCardSection(weatherMatrics);
    
    mainLayout.appendChild(heroSection);
    mainLayout.appendChild(detailsSection);

}


