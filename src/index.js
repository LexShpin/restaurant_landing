import main from './main';
import menu from './menu';
import contactUs from './contactUs';
import './style.css';

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
    
    const footer = document.createElement('footer'); 

    // header and buttons to switch between tabs
    header.classList.add('header');
    heading.classList.add('heading');
    heading.textContent = 'The Dark Side Caffee';
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

    content.appendChild(header);

    // Displaying main content by default
    const mainContent = main();
    const menuContent = menu();
    const contactUsContent = contactUs();
    
    mainButton.classList.add('active');
    
    content.appendChild(mainContent);
    content.appendChild(menuContent);
    content.appendChild(contactUsContent);

     const switchTabs = () => {
         if (mainButton.classList.contains('active')) {
             mainContent.style.display = 'block';
             menuContent.style.display = 'none';
             contactUsContent.style.display = 'none';
         } else if (menuButton.classList.contains('active')) {
             mainContent.style.display = 'none';
             menuContent.style.display = 'block';
             contactUsContent.style.display = 'none';
         } else if (contactUsButton.classList.contains('active')) {
             mainContent.style.display = 'none';
             menuContent.style.display = 'none';
             contactUsContent.style.display = 'block';
         }
     }

    // Switching tabs
    mainButton.addEventListener('click', () => {
        mainButton.classList.add('active');
        menuButton.classList.remove('active');
        contactUsButton.classList.remove('active');
        switchTabs();
    });

    menuButton.addEventListener('click', () => {
        mainButton.classList.remove('active');
        menuButton.classList.add('active');
        contactUsButton.classList.remove('active');
        switchTabs();
    });

    contactUsButton.addEventListener('click', () => {
        mainButton.classList.remove('active');
        menuButton.classList.remove('active');
        contactUsButton.classList.add('active');
        switchTabs();
    });
    
})();

export default content;