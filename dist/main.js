/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X2xhbmRpbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5cclxuY29uc3QgZ2VuZXJhdGVQYWdlID0gKCkgPT4ge1xyXG4gICAgLypcclxuICAgICAgICBoZWFkZXJcclxuICAgICAgICAgICAgaDFcclxuICAgICAgICAgICAgbWFpbihhKVxyXG4gICAgICAgICAgICBtZW51KGEpXHJcbiAgICAgICAgICAgIGNvbnRhY3QgdXMoYSlcclxuICAgICAgICBtYWluIHBhZ2UgLT4gc2VwYXJhdGUgZmlsZVxyXG4gICAgICAgIG1lbnUgcGFnZSAgLT4gc2VwYXJhdGUgZmlsZVxyXG4gICAgICAgIGNvbnRhY3QgdXMgcGFnZSAtPiBzZXBhcmF0ZSBmaWxlXHJcbiAgICAgICAgZm9vdGVyXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpOyBcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcclxuXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0hvZ3NtZWFkZSc7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5cclxuZ2VuZXJhdGVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9