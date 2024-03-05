const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const humberger = document.getElementById('humberger');
const homeHeight = nav.clientHeight;

const btnFav = document.getElementsByClassName('btn-fav');
const love = document.getElementsByClassName('love');
const check = document.getElementsByClassName('check');
const card = document.querySelectorAll('.card');

const btnFavLg = document.getElementsByClassName('btn-fav-lg');
const loveLg = document.getElementsByClassName('love-lg');
const textLg = document.getElementsByClassName('btn-text');
const checkLg = document.getElementsByClassName('check-lg');

const language = document.getElementById('language');
const languageText = document.getElementById('language-text');
const idn = document.getElementById("idn");
const svgIdn = document.getElementById("flag-idn");
const eng = document.getElementById("eng");

const navActive = document.getElementsByClassName('nav-active')[0];

window.addEventListener('scroll', function () {
    const scrollPosition = this.scrollY;
    const isScrolled = scrollPosition > homeHeight;
    const screenWidth = window.innerWidth;

    nav.style.backgroundColor = isScrolled ? 'white' : 'transparent';
    logo.style.color = isScrolled ? 'black' : 'white';

    nav.style.boxShadow = isScrolled ? '0px 4px 10px -2px rgba(0,0,0,0.1)' : 'none';

    if (screenWidth < 768) {
        navActive.style.color = isScrolled ? 'white' : 'white';
        language.style.color = isScrolled ? 'black' : 'white';
        humberger.style.color = isScrolled ? 'black' : 'white';
    } else {
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = isScrolled ? 'black' : 'white';

            text[i].addEventListener('mouseenter', function (e) {
                navActive.style.color = isScrolled ? '#0558D4' : '#0558D4';
                text[i].style.color = isScrolled ? '#0558D4' : '#0558D4';
            })

            text[i].addEventListener('mouseleave', function (e) {
                navActive.style.color = isScrolled ? '#0558D4' : '#0558D4';
                text[i].style.color = isScrolled ? 'black' : 'white';
            })
        }

        // navActive.style.color = isScrolled ? 'blue' : 'blue';
        language.style.color = isScrolled ? 'black' : 'white';
        humberger.style.color = isScrolled ? 'black' : 'white';
    }

    language.addEventListener('mouseenter', function (e) {
        // navActive.style.color = isScrolled ? 'blue' : 'blue';
        language.style.color = isScrolled ? 'black' : 'white';
    });

    language.addEventListener('mouseleave', function (e) {
        // navActive.style.color = isScrolled ? 'blue' : 'blue';
        language.style.color = isScrolled ? 'black' : 'white';
    });
});

function handleFavClick(btnFav, love, check, cardId) {
    btnFav.addEventListener('click', function () {
        if (check.checked) {
            localStorage.setItem(`isFavorited_${cardId}`, "true");
            love.classList.add('fa-solid', 'text-red-700');
            love.classList.remove('fa-regular', 'text-slate-600');
        } else {
            localStorage.removeItem(`isFavorited_${cardId}`);
            love.classList.add('fa-regular', 'text-slate-600');
            love.classList.remove('fa-solid', 'text-red-700');
        }
    });
}

function handleFavClick(btnFavLg, loveLg, checkLg, cardId) {
    btnFavLg.addEventListener('click', function () {
        if (checkLg.checked) {
            localStorage.setItem(`isFavorited_${cardId}`, "true");
            loveLg.classList.add('fa-solid', 'text-red-700');
            loveLg.classList.remove('fa-regular', 'text-slate-600');
        } else {
            localStorage.removeItem(`isFavorited_${cardId}`);
            loveLg.classList.add('fa-regular', 'text-slate-600');
            loveLg.classList.remove('fa-solid', 'text-red-700');
        }
    });
}

Array.from(btnFav).forEach((button, index) => {
    const cardId = button.closest('.card').dataset.id;
    handleFavClick(button, love[index], check[index], cardId);
});

Array.from(btnFavLg).forEach((button, index) => {
    const cardId = button.closest('.btn-fav-lg').dataset.id;
    handleFavClick(button, loveLg[index], checkLg[index], cardId);
});

for (let i = 0; i < btnFav.length; i++) {
    const cardId = btnFav[i].closest('.card').dataset.id;
    const isFavorited = localStorage.getItem(`isFavorited_${cardId}`);

    if (isFavorited === "true") {
        check[i].checked = true;
    }

    if (check[i].checked) {
        love[i].classList.add('fa-solid', 'text-red-700');
        love[i].classList.remove('fa-regular', 'text-slate-600');
    } else {
        love[i].classList.remove('fa-solid', 'text-red-700');
    }
}

for (let i = 0; i < btnFavLg.length; i++) {
    const cardId = btnFavLg[i].closest('.btn-fav-lg').dataset.id;
    const isFavorited = localStorage.getItem(`isFavorited_${cardId}`);
    if (isFavorited === "true") {
        checkLg[i].checked = true;
    }

    if (checkLg[i].checked) {
        loveLg[i].classList.add('fa-solid', 'text-red-700');
        loveLg[i].classList.remove('fa-regular', 'text-slate-600');
    } else {
        loveLg[i].classList.remove('fa-solid', 'text-red-700');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const empty = document.getElementById('content-section');
    const destination = document.getElementById('destination-section');

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        const cardId = parseInt(card.getAttribute('data-id'));
        const storageKey = `isFavorited_${cardId}`;
        const isFavorited = localStorage.getItem(storageKey);

        if (isFavorited === 'true') {
            destination.classList.remove("hidden");
            card.classList.remove("hidden");
            empty.classList.add("hidden");
        } else if (isFavorited === 'false') {
            empty.classList.remove("hidden");
            destination.classList.add("hidden");
        }
    });
});

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    window.location.reload();
}

window.addEventListener('load', function () {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'eng') {
        setLanguage(savedLanguage);
        languageText.innerText = 'ENG';
        svgIdn.setAttribute('src', '/public/assets/icon-eng.png');
        localStorage.setItem('language', 'eng');
    } else if (savedLanguage === 'idn') {
        setLanguage(savedLanguage);
        languageText.innerText = 'IDN';
        svgIdn.setAttribute('src', '/public/assets/icon-idn.png');
        localStorage.setItem('language', 'idn');
    }
});

eng.addEventListener('click', function () {
    languageText.innerText = 'ENG';
    svgIdn.setAttribute('src', '/public/assets/icon-eng.png');
    setLanguage('eng');
    localStorage.removeItem('language');
    changeLanguage('eng');
});

idn.addEventListener('click', function () {
    languageText.innerText = 'IDN';
    svgIdn.setAttribute('src', '/public/assets/icon-idn.png');
    setLanguage('idn');
    localStorage.removeItem('language');
    changeLanguage('idn');
});

const lang = {
    idn: {
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            destination: 'Destinasi',
            favorite: "Favorit",
        },

        heroAbout: {
            title: 'Favorit',
        },

        favorite: {
            title: 'Destinasi Favorit',
            subtitle: 'Disini adalah tempat Anda menemukan semua destinasi yang menjadi favorit Anda dan keluarga Anda',
            link: 'Jelajahi Sekarang',
        },
    },
    eng: {
        nav: {
            home: 'Home',
            about: 'About',
            destination: 'Destination',
            favorite: "Favorite",
        },

        heroAbout: {
            title: 'Favorite',
        },

        favorite: {
            title: 'Favorite Destinations',
            subtitle: 'This is the place where you can find all the favorite destinations for you and your family',
            link: 'Explore Now',
        },
    }
}

function setLanguage(language) {
    const selectedLang = lang[language];

    document.getElementById('nav-home').innerText = selectedLang.nav.home;
    document.getElementById('nav-about').innerText = selectedLang.nav.about;
    document.getElementById('nav-destination').innerText = selectedLang.nav.destination;
    document.getElementById('nav-favorite').innerText = selectedLang.nav.favorite;

    document.getElementById('hero-title-3').innerText = selectedLang.heroAbout.title;
    document.getElementById('fav-title').innerText = selectedLang.favorite.title;
    document.getElementById('fav-subtitle').innerText = selectedLang.favorite.subtitle;

    document.getElementById('fav-link-1').innerText = selectedLang.favorite.link;
    document.getElementById('fav-link-2').innerText = selectedLang.favorite.link;
    document.getElementById('fav-link-3').innerText = selectedLang.favorite.link;
    document.getElementById('fav-link-4').innerText = selectedLang.favorite.link;
    document.getElementById('fav-link-5').innerText = selectedLang.favorite.link;
    document.getElementById('fav-link-6').innerText = selectedLang.favorite.link;

    document.getElementById('footer-home-3').innerText = selectedLang.nav.home;
    document.getElementById('footer-about-3').innerText = selectedLang.nav.about;
    document.getElementById('footer-destination-3').innerText = selectedLang.nav.destination;
    document.getElementById('footer-favorite-3').innerText = selectedLang.nav.favorite;

    localStorage.setItem('language', language);
}





