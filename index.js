document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    const svgElements = document.querySelectorAll('svg');
    const bgElements = document.querySelectorAll('.bg-color');
    let saveTheme = localStorage.getItem('data-bs-theme');

    switch (saveTheme) {
        case 'white':
            html.setAttribute('data-bs-theme', 'white');
            svgElements.forEach((sv) => sv.setAttribute('fill', 'dark'));
            bgElements.forEach((el) => el.classList.remove('bg-dark'));
            bgElements.forEach((el) => el.classList.add('bg-white'));
            break;

        case 'dark':
            html.setAttribute('data-bs-theme', 'dark');
            document.getElementById('flexSwitchCheckDefault').checked = true;
            svgElements.forEach((sv) => sv.setAttribute('fill', 'white'));
            bgElements.forEach((el) => el.classList.remove('bg-white'));
            bgElements.forEach((el) => el.classList.add('bg-dark'));
            break;
    }
});
const logoLink = document.getElementById("logo");
const houseLink = document.getElementById("house");
const histLink = document.getElementById("hist");
const achievLink = document.getElementById("achiev");
const attribLink = document.getElementById("attrib");
const stadLink = document.getElementById("stad");

logoLink.onclick = () => setActiveNavLink(houseLink);
houseLink.onclick = () => setActiveNavLink(houseLink);
histLink.onclick = () => setActiveNavLink(histLink);
achievLink.onclick = () => setActiveNavLink(achievLink);
attribLink.onclick = () => setActiveNavLink(attribLink);
stadLink.onclick = () => setActiveNavLink(stadLink);

function setActiveNavLink(link) {
    const navLinks = document.querySelectorAll('a');
    const activeClass = 'active';

    navLinks.forEach((navLink) => {
        if (navLink === link) {
            navLink.classList.add(activeClass);
        } else {
            navLink.classList.remove(activeClass);
        }
    });
}

function SkinToggler() {
    let changertext = document.querySelector('html');
    let theme = changertext.getAttribute('data-bs-theme') === 'white' ? 'dark' : 'white';
    localStorage.setItem('data-bs-theme', theme);
    changertext.setAttribute('data-bs-theme', theme);

    // Отримуємо всі елементи, на яких потрібно змінити колір фону або кольору іконок
    let svgs = document.querySelectorAll('svg');
    let bgEls = document.querySelectorAll('.bg-color');
    const bodyElements = document.querySelector('body');

    // Застосовуємо плавну зміну кольору
    if (theme === 'dark') {
        bodyElements.classList.add('bg-dark');
        bodyElements.classList.remove('bg-white');
        svgs.forEach((sv) => {
            sv.style.transition = 'fill 0.5s';
            sv.style.fill = 'white';
        });
        bgEls.forEach((el) => {
            el.style.transition = 'background-color 0.5s';
            el.classList.remove('bg-white');
            el.classList.add('bg-dark');
        });
    } else {
        bodyElements.classList.add('bg-white');
        bodyElements.classList.remove('bg-dark');
        svgs.forEach((sv) => {
            sv.style.transition = 'fill 0.5s';
            sv.style.fill = 'dark';
        });
        bgEls.forEach((el) => {
            el.style.transition = 'background-color 0.5s';
            el.classList.remove('bg-dark');
            el.classList.add('bg-white');
        });
    }
}


