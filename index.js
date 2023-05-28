//Перемикання теми//

function toggleTheme() {
    const html = document.querySelector('html');
    const svgElements = document.querySelectorAll('svg');
    const bgElements = document.querySelectorAll('.bg-color');
    const currentTheme = html.getAttribute('data-bs-theme');
    const theme = currentTheme === 'white' ? 'dark' : 'white';

    localStorage.setItem('data-bs-theme', theme);
    html.setAttribute('data-bs-theme', theme);

    svgElements.forEach((svg) => {
        svg.style.transition = 'fill 0.5s';
        svg.setAttribute('fill', theme === 'dark' ? 'white' : 'dark');
    });

    bgElements.forEach((el) => {
        el.style.transition = 'background-color 0.5s';
        el.classList.remove(theme === 'dark' ? 'bg-white' : 'bg-dark');
        el.classList.add(theme === 'dark' ? 'bg-dark' : 'bg-white');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    const svgElements = document.querySelectorAll('svg');
    const bgElements = document.querySelectorAll('.bg-color');
    const savedTheme = localStorage.getItem('data-bs-theme');

    if (savedTheme) {
        html.setAttribute('data-bs-theme', savedTheme);

        if (savedTheme === 'dark') {
            document.getElementById('flexSwitchCheckDefault').checked = true;
            svgElements.forEach((svg) => svg.setAttribute('fill', 'white'));
            bgElements.forEach((el) => {
                el.classList.remove('bg-white');
                el.classList.add('bg-dark');
            });
        } else {
            svgElements.forEach((svg) => svg.setAttribute('fill', 'dark'));
            bgElements.forEach((el) => {
                el.classList.remove('bg-dark');
                el.classList.add('bg-white');
            });
        }
    }
});

document.getElementById('flexSwitchCheckDefault').addEventListener('click', toggleTheme);


// Активний якір //

const logoLink = document.getElementById("logo");
const abtLink = document.getElementById("abt");
const histLink = document.getElementById("hist");
const achievLink = document.getElementById("achiev");
const attribLink = document.getElementById("attrib");
const stadLink = document.getElementById("stad");

logoLink.onclick = () => setActiveNavLink(abtLink);
abtLink.onclick = () => setActiveNavLink(abtLink);
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

// Форма //

const form = document.querySelector('.needs-validation');

form.addEventListener('submit', function (event) {
    // Перевіряємо, чи пройшла форма валідацію
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault();

        // Перевіряємо доступність інтернету
        if (navigator.onLine) {
            // Створюємо об'єкт FormData для збору даних форми
            const formData = new FormData(form);

            // Надсилаємо дані на сервер за допомогою Fetch API
            fetch(form.action, {
                method: form.method,
                body: formData
            })
                .then(function (response) {
                    if (response.ok) {
                        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                        successModal.show();
                        form.reset();
                    } else {
                        var unsuccessModal = new bootstrap.Modal(document.getElementById('unsuccessModal'));
                        unsuccessModal.show();
                    }
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        } else {
            // Якщо немає доступу до інтернету, обробляємо відправлення форми за замовчуванням
            form.submit();
        }
    }

    form.classList.add('was-validated');
});