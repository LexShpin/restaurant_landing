const content = document.querySelector('#content');


const generatePage = () => {
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
    const main = document.createElement('div');
    const menu = document.createElement('div');
    const contactUs = document.createElement('div');
    const footer = document.createElement('footer'); 

    header.classList.add('header');
    heading.classList.add('heading');

    heading.textContent = 'Hogsmeade';

    header.appendChild(heading);

    content.appendChild(header);
}

generatePage();