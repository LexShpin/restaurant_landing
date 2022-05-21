const menu = () => {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'hello';

    menuContent.classList.add('menu-content');

    return menuContent;
}

export default menu;