const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const humberger = document.getElementById('humberger');
const homeHeight = nav.clientHeight;

const btnFav = document.getElementsByClassName('btn-fav');
const love = document.getElementsByClassName('love');
const check = document.getElementsByClassName('check');
// // const card = document.querySelectorAll('.card');

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
            loveLg.classList.remove('fa-regular', 'text-slate-700');
        } else {
            localStorage.removeItem(`isFavorited_${cardId}`);
            loveLg.classList.add('fa-regular', 'text-slate-700');
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
        love[i].classList.remove('fa-regular', 'text-slate-700');
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
        loveLg[i].classList.remove('fa-regular', 'text-slate-700');
    } else {
        loveLg[i].classList.add('fa-regular', 'text-slate-700');
        loveLg[i].classList.remove('fa-solid', 'text-red-700');
    }
}

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

        btn: {
            title: 'Favorit',
        },

        about: {
            title: 'Tentang Destinasi',
            paragraph: 'Waduk Cacaban adalah sebuah bendungan yang terletak di Desa Penujah, Kecamatan Kedungbanteng, Kabupaten Tegal, Jawa Tengah. Dibangun pada tahun 1982, waduk ini memiliki fungsi utama sebagai irigasi untuk mengairi sawah di wilayah Tegal dan Brebes. Waduk ini juga digunakan untuk memenuhi kebutuhan air dari Pabrik Gula Pangkah. Selain itu, Waduk Cacaban juga menjadi destinasi wisata yang menarik dengan berbagai pesonanya. Waduk Cacaban menawarkan panorama alam yang indah dengan hamparan air luas dan perbukitan hijau di sekitarnya. Pemandangan sunrise dan sunset di waduk ini sangatlah memukau dan menjadi daya tarik utama bagi para pengunjung. Pengunjung Waduk Cacaban bisa mampir ke area hutan yang dapat dimanfaatkan sebagai spot berfoto. Jika membawa anak, orangtua juga bisa mengajak mereka bermain di playground alias tempat bermain anak. Selain itu, pengunjung juga bisa melakukan aktivitas lainnya di sejumlah area lain, seperti dermaga apung, jogging track, gardu pandang, kulineran di pujasera, atau keliling naik perahu wisata.',
            info: 'Papan Informasi Destinasi Wisata',
            tooltip: 'Biaya tiket masuk dapat berubah sewaktu-waktu',
            time: 'Jam Operasional',
            price: 'Biaya Tiket Masuk',
            age: ['Dewasa', 'Anak - anak'],
            day: ['Rp4.000 (Senin - Jumat)', 'Rp3.000 (Akhir Pekan)'],
            week: ['Rp5.000 (Senin - Jumat)', 'Rp4.000 (Akhir Pekan)']
        },

        text: {
            title: 'Fasilitas Destinasi',
            subtitle: 'Beberapa fasilitas ini yang akan Anda temukan disana',
        },

        facilitys: {
            card: ['Warung Wisata', 'Spot Foto', 'Musholla', 'Toilet', 'Souvenir', 'Area Parkir', 'Area Camping', 'Sewa Kuda', 'Penjual Kelinci', 'Playground'],
        },

        caro: {
            title: 'Ada Apa Saja Disana',
            subtitle: 'Jelajahi beberapa tempat yang ada dan temukan pengalaman yang tak terlupakan',
        },

        maps: {
            title: 'Halo! Cek Juga Lewat Peta',
            subtitle: 'Buka peta untuk memudahkan Anda menuju destinasi'
        },

        view: {
            title: 'Lihat Destinasi Lainnya',
            link: 'Jelajahi Sekarang'
        }

    },

    eng: {
        nav: {
            home: 'Home',
            about: 'About',
            destination: 'Destination',
            favorite: "Favorite",
        },

        btn: {
            title: 'Favorite',
        },

        about: {
            title: 'About Destination',
            paragraph: "Cacaban Reservoir is a dam located in Penujah Village, Kedungbanteng District, Tegal Regency, Central Java. Built in 1982, this reservoir has the main function as irrigation to irrigate rice fields in the Tegal and Brebes areas. This reservoir is also used to meet the water needs of the Pangkah Sugar Factory. Apart from that, Cacaban Reservoir is also an attractive tourist destination with its various charms. Cacaban Reservoir offers a beautiful natural panorama with a wide expanse of water and green hills around it. The sunrise and sunset views at this reservoir are very stunning and are the main attraction for visitors. Visitors to the Cacaban Reservoir can stop by the forest area which can be used as a photo spot. If you bring children, parents can also invite them to play in the playground, aka children's play area. Apart from that, visitors can also do other activities in a number of other areas, such as a floating pier, jogging track, viewing post, culinary delights at the food court, or going around on a tourist boat.",
            info: "Information boards Tourist Destinations",
            tooltip: "Entrance ticket fees may change at any time",
            time: 'Operating Hours',
            price: 'Enterance Ticket Fee',
            age: ['Adult', 'Children'],
            day: ['Rp4.000 (Monday - Friday)', 'Rp3.000 (Weekend)'],
            week: ['Rp5.000 (Monday - Friday)', 'Rp4.000 (Weekend)']
        },

        text: {
            title: 'Destinations Facilities',
            subtitle: 'You will find some of these facilities there'
        },

        facilitys: {
            card: ['Restaurant', 'Photography', 'Shrine', 'Toilet', 'Souvenir', 'Parking Area', 'Camping Area', 'Horse Rental', 'Rabbit Seller', 'Playground']
        },

        caro: {
            title: "There's Anything There",
            subtitle: 'Explore several existing places and find an unforgettable experience',

        },

        maps: {
            title: 'Hello! Also check via map',
            subtitle: 'Open the map to make it easier for you to get to your destination'
        },

        view: {
            title: 'See Other Destinations',
            link: 'Explore Now'
        }
    }
}

function setLanguage(language) {
    const selectedLang = lang[language];

    document.getElementById('nav-home').innerText = selectedLang.nav.home;
    document.getElementById('nav-about').innerText = selectedLang.nav.about;
    document.getElementById('nav-destination').innerText = selectedLang.nav.destination;
    document.getElementById('nav-favorite').innerText = selectedLang.nav.favorite;

    document.getElementById('btn-fav-1').innerText = selectedLang.btn.title;

    document.getElementById('about-destination').innerText = selectedLang.about.title;
    document.getElementById('paragraph-destination').innerText = selectedLang.about.paragraph;

    document.getElementById('info-destination').innerText = selectedLang.about.info;
    document.getElementById('tt-destination').innerText = selectedLang.about.tooltip;
    document.getElementById('time-destination').innerText = selectedLang.about.time;
    document.getElementById('ticket-destination').innerText = selectedLang.about.price;
    document.getElementById('adult-destination').innerText = selectedLang.about.age[0];
    document.getElementById('child-destination').innerText = selectedLang.about.age[1];
    document.getElementById('day-price-adult').innerText = selectedLang.about.day[0];
    document.getElementById('week-price-adult').innerText = selectedLang.about.day[1];
    document.getElementById('day-price-child').innerText = selectedLang.about.day[0];
    document.getElementById('week-price-child').innerText = selectedLang.about.day[1];

    document.getElementById('facility-destination').innerText = selectedLang.text.title;
    document.getElementById('sub-facility-destination').innerText = selectedLang.text.subtitle;

    document.getElementById('1').innerText = selectedLang.facilitys.card[0];
    document.getElementById('2').innerText = selectedLang.facilitys.card[1];
    document.getElementById('3').innerText = selectedLang.facilitys.card[2];
    document.getElementById('4').innerText = selectedLang.facilitys.card[3];
    document.getElementById('5').innerText = selectedLang.facilitys.card[4];
    document.getElementById('6').innerText = selectedLang.facilitys.card[5];
    document.getElementById('7').innerText = selectedLang.facilitys.card[6];
    document.getElementById('8').innerText = selectedLang.facilitys.card[7];
    document.getElementById('9').innerText = selectedLang.facilitys.card[8];
    document.getElementById('10').innerText = selectedLang.facilitys.card[9];

    document.getElementById('caro-title').innerText = selectedLang.caro.title;
    document.getElementById('caro-subtitle').innerText = selectedLang.caro.subtitle;

    document.getElementById('maps-title').innerText = selectedLang.maps.title;
    document.getElementById('maps-subtitle').innerText = selectedLang.maps.subtitle;

    document.getElementById('view').innerText = selectedLang.view.title;

    document.getElementById('link-btn-1').innerText = selectedLang.view.link;
    document.getElementById('link-btn-2').innerText = selectedLang.view.link;
    document.getElementById('link-btn-3').innerText = selectedLang.view.link;
    document.getElementById('link-btn-4').innerText = selectedLang.view.link;
    document.getElementById('link-btn-5').innerText = selectedLang.view.link;

    document.getElementById('footer-home-4').innerText = selectedLang.nav.home;
    document.getElementById('footer-about-4').innerText = selectedLang.nav.about;
    document.getElementById('footer-destination-4').innerText = selectedLang.nav.destination;
    document.getElementById('footer-favorite-4').innerText = selectedLang.nav.favorite;

    localStorage.setItem('language', language);
}





