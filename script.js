const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const toggleIcons = document.querySelectorAll('.icon');

answers[0].classList.add('active');
toggleIcons[0].classList.add('change-icon');

questions.forEach((question, i) => {
    question.addEventListener('click', () => {
        answers[i].classList.toggle('active');
        toggleIcons[i].classList.toggle('change-icon');
    })
})