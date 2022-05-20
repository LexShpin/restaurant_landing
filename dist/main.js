/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

    content.appendChild(header);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9sYW5kaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVQYWdlID0gKCgpID0+IHtcclxuICAgIC8qXHJcbiAgICAgICAgaGVhZGVyXHJcbiAgICAgICAgICAgIGgxXHJcbiAgICAgICAgICAgIG1haW4oYSlcclxuICAgICAgICAgICAgbWVudShhKVxyXG4gICAgICAgICAgICBjb250YWN0IHVzKGEpXHJcbiAgICAgICAgbWFpbiBwYWdlIC0+IHNlcGFyYXRlIGZpbGVcclxuICAgICAgICBtZW51IHBhZ2UgIC0+IHNlcGFyYXRlIGZpbGVcclxuICAgICAgICBjb250YWN0IHVzIHBhZ2UgLT4gc2VwYXJhdGUgZmlsZVxyXG4gICAgICAgIGZvb3RlclxyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlckJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIGNvbnN0IG1haW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGNvbnRhY3RVc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTsgXHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1N0YXIgV2FycyBDYWZmZWUnO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgXHJcbiAgICBoZWFkZXJCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XHJcbiAgICBtYWluQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fYnRuJyk7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fYnRuJyk7XHJcbiAgICBjb250YWN0VXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19idG4nKTtcclxuXHJcbiAgICBtYWluQnV0dG9uLnRleHRDb250ZW50ID0gJ01haW4nO1xyXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIGNvbnRhY3RVc0J1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcclxuXHJcbiAgICBoZWFkZXJCdXR0b25zLmFwcGVuZENoaWxkKG1haW5CdXR0b24pO1xyXG4gICAgaGVhZGVyQnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICAgIGhlYWRlckJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGFjdFVzQnV0dG9uKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25zKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9