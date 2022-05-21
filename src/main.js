const main = () => {
    const mainContent = document.createElement('div');
    const mainContentHeading = document.createElement('h2');
    const mainContentText = document.createElement('p');

    mainContent.classList.add('main-content');
    mainContentHeading.classList.add('content__heading');
    mainContentText.classList.add('content__text');

    mainContentHeading.textContent = 'About';
    mainContentText.textContent = 'A long time ago in a galaxy far, far away, we opened an amazing coffee shop! Come to the Dark side and try our cookies - they are amazing!';

    mainContent.appendChild(mainContentHeading);
    mainContent.appendChild(mainContentText);

    return mainContent;
}

export default main;