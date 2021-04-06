window.onload = () => {
    let body = document.querySelector(`html > head + body`);
    body.style.backgroundColor = `pink`;

    let h1 = document.querySelector(`main .highlight`);
    h1.textContent = `Yes, querySelector`;

    let firstParagraph = document.querySelector(`#first-paragraph`);
    firstParagraph.textContent = `Selected via querySelector`;
};
