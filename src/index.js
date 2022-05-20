const content = document.querySelector('#content');

const generatePage = (() => {
    /*
        header
            h1
            main(a)
            menu(a)
            contact us(a)
        main page -> separate file
        menu page  -> separate file
        contact us page -> separate file
        footer
    */

    const header = document.createElement('header');
    const heading = document.createElement('h1');

    const headerButtons = document.createElement('nav');
    const mainButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactUsButton = document.createElement('button');

    const main = document.createElement('div');
    const menu = document.createElement('div');
    const contactUs = document.createElement('div');
    
    const footer = document.createElement('footer'); 

    // header and buttons to switch between tabs
    header.classList.add('header');
    heading.classList.add('heading');
    heading.textContent = 'Star Wars Caffee';
    header.appendChild(heading);
    
    headerButtons.classList.add('header-buttons');
    mainButton.classList.add('header__btn');
    menuButton.classList.add('header__btn');
    contactUsButton.classList.add('header__btn');

    mainButton.textContent = 'Main';
    menuButton.textContent = 'Menu';
    contactUsButton.textContent = 'Contact Us';

    headerButtons.appendChild(mainButton);
    headerButtons.appendChild(menuButton);
    headerButtons.appendChild(contactUsButton);
    header.appendChild(headerButtons);

    // Displaying main content
    

    content.appendChild(header);
})();