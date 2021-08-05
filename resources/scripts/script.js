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
    }, 1500);

    setTimeout(() => {
        aboutThings.appendChild(obj.li_2);
    }, 3000);
    
    setTimeout(() => {
        aboutThings.appendChild(obj.li_3);
    }, 4500);

    setTimeout(() => {
        aboutThings.appendChild(obj.li_4);
    }, 6000);
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
        projects.style.display = 'block';
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

        // Theme changer
        background.setAttribute('class', 'background_1');
        root.style.setProperty('--font-color', 'azure');
    } else if (trackerSwitcher === 2) {
        // Ball effect
        ball.style.transition = '1s';
        ball.style.left = '0';
        trackerSwitcher = 1;

        // Theme changer
        background.setAttribute('class', 'background');
        root.style.setProperty('--font-color', 'rgb(32, 63, 148)');
    }
};