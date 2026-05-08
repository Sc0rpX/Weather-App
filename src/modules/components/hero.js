export default function createHero(data) {
    const hero = document.createElement('section');
    hero.className = 'hero-section';

    const icon = document.createElement('span');
    icon.classList.add("material-symbols-outlined", "hero-icon");
    icon.textContent = data.icon;

    const temp = document.createElement('h1');
    temp.className = 'temp-display';

    const tempIcon = document.createElement('span');
    tempIcon.className = "temp-symbol";
    tempIcon.textContent = '°';
    
    temp.textContent = `${data.temp}${tempIcon}`;

    const cityStatusWrapper = document.createElement('div');
    cityStatusWrapper.className = 'city-status-wrapper';

    const cityName = document.createElement('h2');
    cityName.className = 'city-name';
    cityName.textContent = data.city;

    const status = document.createElement('div');
    const statusBadge = document.createElement('span');
    statusBadge.className = 'status-badge';
    statusBadge.textContent = data.status;
    
    status.appendChild(statusBadge);

    cityStatusWrapper.appendChild(cityName);
    cityStatusWrapper.appendChild(status);

    hero.appendChild(icon);
    hero.appendChild(temp);
    hero.appendChild(cityStatusWrapper);

    return hero;
}