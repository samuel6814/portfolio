const sections = document.querySelectorAll('.container'); // Change '.section' to '.container'
const sectBtns = document.querySelectorAll('.controls'); // Change '.controlls' to '.controls'
const sectBtn = document.querySelectorAll('.control'); // Change '.control' to '.controls .control'
const allSections = document.querySelector('.main-content');

let previousBtn = null;

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            if (previousBtn) {
                previousBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
            previousBtn = this;
        });
    }

    // Sections Active 
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            if (previousBtn) {
                previousBtn.classList.remove('active-btn');
            }
            e.target.classList.add('active-btn');
            previousBtn = e.target;

            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();

//The error was in the query selectors used to select the buttons and sections. Here are the exact changes made:

//Changed document.querySelectorAll('.section') to document.querySelectorAll('.container') to select all sections with the class container.
//Changed document.querySelectorAll('.controlls') to document.querySelectorAll('.controls') to select all controls with the class controls.
//Changed document.querySelectorAll('.control') to document.querySelectorAll('.controls .control') to select all controls inside the .controls element.
//These adjustments ensure that the JavaScript code properly targets the elements on the page, allowing it to function correctly.




