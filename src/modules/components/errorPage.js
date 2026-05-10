import '../../styles/errorPage.css';

export default function getErrorPage() {
    // 1. Create the main section container
    const errorSection = document.createElement('section');
    errorSection.className = 'error-section';

    // 2. Create the icon span
    const iconSpan = document.createElement('span');
    iconSpan.className = 'material-symbols-outlined error-icon';
    iconSpan.textContent = 'cloud_off';

    // 3. Create the heading
    const heading = document.createElement('h1');
    heading.className = 'error-title';
    heading.textContent = 'Location not found';

    // 4. Create the description paragraph
    const description = document.createElement('p');
    description.className = 'error-text';
    description.textContent = "We couldn't find that city. Please check the spelling or try searching for a different location.";

    // 5. Assemble the elements
    errorSection.appendChild(iconSpan);
    errorSection.appendChild(heading);
    errorSection.appendChild(description);

    return errorSection;
}