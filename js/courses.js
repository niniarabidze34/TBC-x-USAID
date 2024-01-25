const photoSource = [
    'img/1.webp','img/2.webp','img/3.webp','img/4.webp','img/5.webp','img/6.webp','img/7.webp','img/8.webp','img/9.webp',
];

const textSource = [
    'iOS Development', 'React', 'Intro to Python', 'Advanced Python', 'Advanced Cybersecurity Course', 'ToT - Training of Trainers', 'Blockchain', 'DevOps', 'Information Security Governance'
];

const gridContainer = document.getElementById('gridContainer') 


for (let i = 0; i < photoSource.length; i++) {

    const box = document.createElement('div');
    box.className = 'box';

    const pic = document.createElement('div');
    pic.className = 'pic';
    const img = document.createElement('img');
    img.src = photoSource[i];
    img.alt = textSource[i]; 
    pic.appendChild(img);

    const info = document.createElement('div');
    info.className = 'info';
    const textParagraph = document.createElement('p');
    textParagraph.textContent = textSource[i];
    const registrationParagraph = document.createElement('p');
    registrationParagraph.textContent = 'რეგისტრაცია დასრულებულია';
    const detailsParagraph = document.createElement('p');
    detailsParagraph.textContent = '➔ კურსის დეტალები';

    // Append paragraphs to the info div
    info.appendChild(textParagraph);
    info.appendChild(registrationParagraph);
    info.appendChild(detailsParagraph);

    // Append pic and info divs to the main container div
    box.appendChild(pic);
    box.appendChild(info);

    // Append the main container div to the body (or another container of your choice)
    gridContainer.appendChild(box);
}