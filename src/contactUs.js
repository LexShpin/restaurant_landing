const contactUs = () => {
    const contactUsContent = document.createElement('div');
    const contactUsHeading = document.createElement('h1');

    contactUsHeading.textContent = 'Contact us';
    contactUsHeading.classList.add('content__heading');

    contactUsContent.classList.add('contact-us-content');
    contactUsContent.appendChild(contactUsHeading);

    const contactUsImg = document.createElement('img');
    const contactUsText = document.createElement('p');

    contactUsImg.classList.add('contact-us-img');
    contactUsText.classList.add('contact-us-text');

    contactUsImg.src = 'https://s1.1zoom.me/big0/695/430539-Kycb.jpg';
    contactUsText.textContent = 'We are located on Coruscant, st.42 3rd floor. Come visit us and taste our delicious bakery!';

    contactUsContent.appendChild(contactUsImg);
    contactUsContent.appendChild(contactUsText);

    return contactUsContent;
}

export default contactUs;