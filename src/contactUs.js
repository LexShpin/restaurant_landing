const contactUs = () => {
    const contactUsContent = document.createElement('div');
    const contactUsHeading = document.createElement('h1');

    contactUsHeading.textContent = 'Contact us';
    contactUsHeading.classList.add('content__heading');

    contactUsContent.classList.add('contact-us-content');
    contactUsContent.appendChild(contactUsHeading);

    return contactUsContent;
}

export default contactUs;