// მოცემული ფუნქცია უზრუნველყოფს კითხაზე პასუხების გამოჩენა-დამალვას

import { question1, question2, question3 } from "./constants.js";


function toggleAnswerVisibility(clickedButton ,answerNumber) {
    const answer = document.getElementById(answerNumber); 
    const button = document.getElementById(clickedButton);

    if (answer.classList.contains('none')) {
        answer.classList.remove('none');
        button.classList.replace('button', 'rotate');
    } else {
        answer.classList.add('none');
        button.classList.replace('rotate', 'button');
    }
}

question1.addEventListener('click', function() {
    toggleAnswerVisibility('button1', 'answer1');
});

question2.addEventListener('click', function() {
    toggleAnswerVisibility('button2', 'answer2');
});

question3.addEventListener('click', function() {
    toggleAnswerVisibility('button3', 'answer3');
});