window.onload = () => {
    let paragraphs = document.querySelectorAll(`p`);

    paragraphs[0].textContent = `This is the first paragraph`;
    paragraphs[1].textContent = `This is the second paragraph`;
    paragraphs[2].textContent = `This is the third paragraph`;

    let highlights = document.querySelectorAll(`.highlight`);

    for( let i = 0; i < highlights.length; i++ ) {
        highlights[i].style.backgroundColor = `yellow`;
    }
};
