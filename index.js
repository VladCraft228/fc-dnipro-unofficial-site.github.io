document.addEventListener('DOMContentLoaded', () => {
    let savetheme = localStorage.getItem('data-bs-theme')
    switch (savetheme) {
        case 'white': {
            document.querySelector('html').setAttribute('data-bs-theme', 'white')
            document.querySelectorAll('svg').forEach((sv) => sv.setAttribute('fill', 'dark'))
            document.querySelectorAll('.bg-color').forEach((el) => el.classList.remove('bg-dark'))
            document.querySelectorAll('.bg-color').forEach((el) => el.classList.add('bg-white'))
            break
        }
        case 'dark': {
            document.querySelector('html').setAttribute('data-bs-theme', 'dark')
            document.getElementById('flexSwitchCheckDefault').checked = true
            document.querySelectorAll('svg').forEach((sv) => sv.setAttribute('fill', 'white'))
            document.querySelectorAll('.bg-color').forEach((el) => el.classList.remove('bg-white'))
            document.querySelectorAll('.bg-color').forEach((el) => el.classList.add('bg-dark'))
            break
        }
    }
})

document.getElementById("house").onclick = function () {
    document.getElementById("house").classList.add('active')
    document.getElementById("hist").classList.remove('active')
    document.getElementById("achiev").classList.remove('active')
    document.getElementById("attrib").classList.remove('active')
    document.getElementById("stad").classList.remove('active')
}

document.getElementById("hist").onclick = function () {
    document.querySelector("a").classList.remove('active')
    document.getElementById("house").classList.remove('active')
    document.getElementById("hist").classList.add('active')
    document.getElementById("achiev").classList.remove('active')
    document.getElementById("attrib").classList.remove('active')
    document.getElementById("stad").classList.remove('active')
}


document.getElementById("achiev").onclick = function () {
    document.querySelector("a").classList.remove('active')
    document.getElementById("house").classList.remove('active')
    document.getElementById("hist").classList.remove('active')
    document.getElementById("achiev").classList.add('active')
    document.getElementById("attrib").classList.remove('active')
    document.getElementById("stad").classList.remove('active')
}

document.getElementById("attrib").onclick = function () {
    document.querySelector("a").classList.remove('active')
    document.getElementById("house").classList.remove('active')
    document.getElementById("hist").classList.remove('active')
    document.getElementById("achiev").classList.remove('active')
    document.getElementById("attrib").classList.add('active')
    document.getElementById("stad").classList.remove('active')
}

document.getElementById("stad").onclick = function () {
    document.querySelector("a").classList.remove('active')
    document.getElementById("house").classList.remove('active')
    document.getElementById("hist").classList.remove('active')
    document.getElementById("achiev").classList.remove('active')
    document.getElementById("attrib").classList.remove('active')
    document.getElementById("stad").classList.add('active')
}

function SkinToggler() {
    let changertext = document.querySelector('html')
    switch (changertext.getAttribute('data-bs-theme')) {
        case "white":
            {
                localStorage.setItem('data-bs-theme', 'dark')
                changertext.setAttribute('data-bs-theme', 'dark')
                document.querySelectorAll('svg').forEach((sv) => sv.setAttribute('fill', 'white'))
                document.querySelectorAll('.bg-color').forEach((el) => el.classList.remove('bg-white'))
                document.querySelectorAll('.bg-color').forEach((el) => el.classList.add('bg-dark'))
                break
            }
        case "dark":
            {
                localStorage.setItem('data-bs-theme', 'white')
                changertext.setAttribute('data-bs-theme', 'white')
                document.querySelectorAll('svg').forEach((sv) => sv.setAttribute('fill', 'dark'))
                document.querySelectorAll('.bg-color').forEach((el) => el.classList.remove('bg-dark'))
                document.querySelectorAll('.bg-color').forEach((el) => el.classList.add('bg-white'))
                break
            }
    }
}