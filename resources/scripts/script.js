let homeButton = document.getElementById('home-button');
let aboutButton = document.getElementById('about-button');
let projectsButton = document.getElementById('projects-button');
let skillsButton = document.getElementById('skills-button');

let home = document.getElementById('home');
let about = document.getElementById('about-me');
let projects = document.getElementById('projects');
let skills = document.getElementById('skills');

let aboutThings = document.getElementById('about-things');

let tracker = 1;
function actual(tracker) {
    switch(tracker) {
        case 1:
            home.style.display = 'none';
            break;
        case 2:
            about.style.display = 'none';
            break;
        case 3:
            projects.style.display = 'none';
            break;
        case 4:
            skills.style.display = 'none';
            break;
    }
}

function inject() {
    let names = ['Accessibility', 'Responsive', 'Semantic', 'Clean Code'];
    let obj = {};
    let delay = 1500;

    for (let i = 1; i <= 4; i++) {
        let li = `li_${i}`;
        obj[li] = document.createElement('li');
    }

    let counter = -1;

    for (let prop in obj) {
        counter++;
        obj[prop].innerHTML = names[counter];
        obj[prop].classList.add('animate__animated', 'animate__fadeInLeft');
    }

    setTimeout(() => {
        aboutThings.appendChild(obj.li_1);
    }, delay);

    setTimeout(() => {
        aboutThings.appendChild(obj.li_2);
    }, delay * 2);
    
    setTimeout(() => {
        aboutThings.appendChild(obj.li_3);
    }, delay * 3);

    setTimeout(() => {
        aboutThings.appendChild(obj.li_4);
    }, delay * 4);
}

function growItems() {
    let widths = {
        eightEight: document.querySelectorAll('.eight-eight'),
        eightThree: document.querySelectorAll('.eight-three'),
        eightFive: document.querySelectorAll('.eight-five'),
        eight: document.querySelectorAll('.eight'),
        seven: document.querySelectorAll('.seven'),
        five: document.querySelectorAll('.five')
    }

    for (let props in widths) {
        let divs = widths[props];
        switch(props) {
            case 'eightEight':
                for (let div of divs) {
                    div.style.width = '88%';
                }
                break;
            case 'eightThree':
                for (let div of divs) {
                    div.style.width = '83%';
                }
                break;
            case 'eightFive':
                for (let div of divs) {
                    div.style.width = '85%';
                }
                break;
            case 'eight':
                for (let div of divs) {
                    div.style.width = '80%';
                }
                break;
            case 'seven':
                for (let div of divs) {
                    div.style.width = '70%';
                }
                break;
            case 'five':
                for (let div of divs) {
                    div.style.width = '50%';
                }
                break;
        }
    }
}


// Events Listeners of the nav
aboutButton.addEventListener('click', inject);

homeButton.onclick = () => {
    if (tracker !== 1) {
        actual(tracker);
        home.classList.add('animate__animated', 'animate__fadeInLeft');
        home.style.display = 'block';
        tracker = 1;
    }
}
aboutButton.onclick = () => {
    if (tracker !== 2) {
        actual(tracker);
        about.classList.add('animate__animated', 'animate__fadeInLeft');
        about.style.display = 'block';
        tracker = 2;
        aboutButton.removeEventListener('click', inject);
    }
}
projectsButton.onclick = () => {
    if (tracker !== 3) {
        actual(tracker);
        projects.classList.add('animate__animated', 'animate__fadeInLeft');
        projects.style.display = 'grid';
        tracker = 3;
    }
}
skillsButton.onclick = () => {
    if (tracker !== 4) {
        actual(tracker);
        skills.classList.add('animate__animated', 'animate__fadeInLeft');
        skills.style.display = 'flex';
        tracker = 4;
        if(skills.style.display = 'flex') {
            setTimeout(growItems, 1500);
        }
    }
}



// Switch from day to night
let switcher = document.getElementById('switch');
let trackerSwitcher = 1;
switcher.onclick = () => {
    let ball = document.querySelector('.ball');
    let background = document.getElementById('background');
    let root = document.querySelector(':root');

    if (trackerSwitcher === 1) {
        // Ball effect
        ball.style.transition = '1s';
        ball.style.left = '30px';
        trackerSwitcher = 2;

        // Theme changer to day
        background.setAttribute('class', 'day_background');
        root.style.setProperty('--font-color', '#131313');
        root.style.setProperty('--invert', 'invert(0.4)');
        root.style.setProperty('--change-all', '#131313');
        root.style.setProperty('--shadow', '0px 0px 0px #000');
    } else if (trackerSwitcher === 2) {
        // Ball effect
        ball.style.transition = '1s';
        ball.style.left = '0';
        trackerSwitcher = 1;

        // Theme changer to night
        background.setAttribute('class', 'night_background');
        root.style.setProperty('--font-color', 'azure');
        root.style.setProperty('--invert', 'invert(1)');
        root.style.setProperty('--change-all', '#1d4bcc');
        root.style.setProperty('--shadow', '#000');
    }
};



// Typing effect
const typedTextSpan = document.querySelector('.typed-text')
const cursorSpan = document.querySelector('.cursor');

const words = ['Web Developer', 'Programmer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
const eraseWordDelay = 800;
let textArrayIndex = 0;
let charIndex = 0;

function typing() {
    if (charIndex < words[textArrayIndex].length) {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += words[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erasing, eraseWordDelay);
    }
}

function erasing() {
    if(charIndex > 0) {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = words[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex>=words.length) textArrayIndex = 0;
        setTimeout(typing, typingDelay + 1100);
    }
}

window.addEventListener('load', () => {
    if(words.length) setTimeout(typing, newTextDelay + 250);
})