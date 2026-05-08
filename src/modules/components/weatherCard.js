function createCard(data) {
    // 1. Create the container
    const card = document.createElement('div');
    card.classList.add('glass-card');

    // 2. Create the Header (Icon + Title)
    const header = document.createElement('div');
    header.classList.add('card-header');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('material-symbols-outlined');
    iconSpan.textContent = data.icon;

    const titleText = document.createTextNode(` ${data.title}`);
    
    header.appendChild(iconSpan);
    header.appendChild(titleText);

    // 3. Create the Content (Value + Unit)
    const contentDiv = document.createElement('div');
    
    const valueP = document.createElement('p');
    valueP.classList.add('card-value');
    valueP.textContent = data.value;

    if (data.unit) {
        const unitSpan = document.createElement('span');
        unitSpan.classList.add('card-unit');
        unitSpan.textContent = ` ${data.unit}`;
        valueP.appendChild(unitSpan);
    }

    // 4. Create the Description
    const descP = document.createElement('p');
    descP.classList.add('card-description');
    descP.textContent = data.description || '';

    // Assemble everything
    contentDiv.appendChild(valueP);
    contentDiv.appendChild(descP);
    card.appendChild(header);
    card.appendChild(contentDiv);

    return card;
}


export default function createCardSection(weatherMatrics) {
    const detailsGrid = document.createElement('section');
    detailsGrid.className = "details-grid";

    for(const key in weatherMatrics) {
        const card = createCard(weatherMatrics[key]);
        detailsGrid.appendChild(card);
    }

    return detailsGrid;
}