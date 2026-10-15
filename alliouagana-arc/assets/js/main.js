const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');
const surveyModal = document.getElementById('survey-modal');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute(
        'aria-label',
        isExpanded ? 'Open navigation menu' : 'Close navigation menu'
    );
    mainMenu.dataset.open = String(!isExpanded);
});

mainMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mainMenu.dataset.open = 'false';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
    });
});

function openSurvey(event) {
    event.preventDefault();
    surveyModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeSurvey() {
    surveyModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

document.addEventListener('click', (event) => {
    if (event.target.closest('[data-open-survey]')) openSurvey(event);
    if (event.target.closest('[data-close-survey]')) closeSurvey();
});

surveyModal.addEventListener('click', (event) => {
    if (event.target === surveyModal) closeSurvey();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSurvey();
});
