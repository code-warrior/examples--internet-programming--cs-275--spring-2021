window.onload = () => {
    let paragraphs = document.getElementsByTagName(`p`);

    paragraphs[0].textContent = `This is the first paragraph`;
    paragraphs[1].textContent = `This is the second paragraph`;
    paragraphs[2].textContent = `This is the third paragraph`;

    let body = document.getElementsByTagName(`body`)[0];
    body.style.color = `red`;
};
