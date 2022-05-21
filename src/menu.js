const menu = () => {
    const menuContent = document.createElement('div');
    const menuContentHeading = document.createElement('h1');
    menuContentHeading.textContent = 'Menu';

    menuContent.classList.add('menu-content');
    menuContentHeading.classList.add('content__heading');

    menuContent.appendChild(menuContentHeading);

    return menuContent;
}

export default menu;