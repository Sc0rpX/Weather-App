import createCardSection from "./components/weatherCard.js";
import createHero from "./components/hero.js";
import getWeatherData from "./getWeatherData.js";
import getBgImage from "./getBackgroundImage.js";
import getErrorPage from "./components/errorPage.js";

export default async function loadContent(location, dataUnit) {
    const mainLayout = document.querySelector('.main-layout');
    const bgImg = document.querySelector('#bg-img');

    // Clear main layout
    mainLayout.textContent = "";

    try {
        const { heroMetrics, weatherMatrics } = await getWeatherData(location, dataUnit);
        bgImg.src = await getBgImage(heroMetrics.icon);
    
        const heroSection = createHero(heroMetrics);
        const detailsSection = createCardSection(weatherMatrics);
        
        mainLayout.appendChild(heroSection);
        mainLayout.appendChild(detailsSection);
    } catch(error) {
        console.log(error);
        
        const errorPage = getErrorPage();
        mainLayout.appendChild(errorPage);
    }

}


