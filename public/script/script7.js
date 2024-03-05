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
            paragraph: 'Pantai Alam Indah atau yang lebih dikenal dengan singkatan PAI merupakan salah satu objek wisata bahari yang berada di Kota Tegal Jawa Tengah. Pantai di Kota Tegal ini juga dilengkapi dengan sarana bermain anak dan terdapat bermacam bangunan. Bibir pantai cukup luas sehingga dapat digunakan sebagai tempat untuk bermain, seperti bermain pasir khususnya untuk anak-anak maupun jalan-jalan disekitar pantai pada saat sore hari. Kawasan pantai juga terdapat museum bahari yang menyimpan senjata berat militer. Museum tersebut dapat menjadi sarana edukasi anak-anak untuk mengenal TNI Angkatan Laut. Jangan khawatir jika perut mulai lapar. Ada banyak jajaran tempat makan yang dikelola oleh UMKM setempat. Pengunjung bisa menikmati kuliner tepi pantai yang beragam sembari menikmati pemandangan pantai.',
            info: 'Papan Informasi Destinasi Wisata',
            tooltip: 'Biaya tiket masuk dapat berubah sewaktu-waktu',
            time: 'Jam Operasional',
            hour: '24 Jam (Setiap hari)',
            price: 'Biaya Tiket Masuk',
            age: ['Dewasa : Rp3.000', 'Anak - anak : Rp1.000'],
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
            paragraph: "Alam Indah Beach or better known by the abbreviation PAI is one of the marine tourism attractions in Tegal City, Central Java. The beach in Tegal City is also equipped with children's play facilities and there are various buildings. The beach is wide enough so it can be used as a place to play, such as playing in the sand, especially for children, or walking around the beach in the afternoon. The beach area also has a maritime museum which stores heavy military weapons. The museum can be an educational means for children to get to know the Indonesian Navy. Don't worry if your stomach starts to get hungry. There are many places to eat that are managed by local MSMEs. Visitors can enjoy a variety of beachside culinary delights while enjoying the beach views.",
            info: "Information boards Tourist Destinations",
            tooltip: "Entrance ticket fees may change at any time",
            time: 'Operating Hours',
            hour: '24 Hours (Everyday)',
            price: 'Enterance Ticket Fee',
            age: ['Adult : Rp3.000', 'Children : Rp1.000'],
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
    document.getElementById('day-price-adult').innerText = selectedLang.about.age[0];
    document.getElementById('day-price-child').innerText = selectedLang.about.age[1];

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





