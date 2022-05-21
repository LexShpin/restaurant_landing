const menu = () => {
    /*
        dark side cookies
        grogu shake
        chewie cake
    */

    const menuContent = document.createElement('div');
    const menuContentHeading = document.createElement('h1');

    menuContentHeading.textContent = 'Menu';
    menuContent.classList.add('menu-content');
    menuContentHeading.classList.add('content__heading');

    menuContent.appendChild(menuContentHeading);
    
    const menuItems = document.createElement('div');
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');

    menuItems.classList.add('menu__items');
    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');
    menuItem3.classList.add('menu-item');

    const menuItem1Img = document.createElement('img');
    const menuItem1Text = document.createElement('p');

    menuItem1Img.classList.add('menu-item__img');
    menuItem1Text.classList.add('menu-item__text');

    menuItem1Img.src = 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2020/08/Small-Batch-Chocolate-Chip-Cookies.jpg?w=745&ssl=1';
    menuItem1Text.textContent = 'Dark Side Cookies';

    menuItem1.appendChild(menuItem1Img);
    menuItem1.appendChild(menuItem1Text);
    menuContent.appendChild(menuItem1);

    const menuItem2Img = document.createElement('img');
    const menuItem2Text = document.createElement('p');

    menuItem2Img.classList.add('menu-item__img');
    menuItem2Text.classList.add('menu-item__text');

    menuItem2Img.src = 'https://scontent.fisj1-1.fna.fbcdn.net/v/t1.6435-9/84631964_861352107655231_8538340541442555904_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=65de_ZK2Ap8AX8yDs-3&_nc_ht=scontent.fisj1-1.fna&oh=00_AT-FT3PfngxHU2OPwicYtS8afA9-Dfk8LEKujGT0eGhj0g&oe=62AF5ECF';
    menuItem2Text.textContent = 'Grogu Shake';

    menuItem2.appendChild(menuItem2Img);
    menuItem2.appendChild(menuItem2Text);
    menuContent.appendChild(menuItem2);

    const menuItem3Img = document.createElement('img');
    const menuItem3Text = document.createElement('p');

    menuItem3Img.classList.add('menu-item__img');
    menuItem3Text.classList.add('menu-item__text');

    return menuContent;
}

export default menu;