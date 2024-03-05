const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const humberger = document.getElementById('humberger');
const homeHeight = nav.clientHeight;

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
            title: 'Tentang Tegal',
        },

        about: {
            title: 'Kenali Tentang Tegal Lebih Dalam',
            paragraph: 'Keindahan Alam Tegal mengundang Anda untuk merasakan pesona yang unik dari daerah yang kaya akan budaya dan alam. Dengan sentuhan sejarah yang dalam dan keindahan alam yang menakjubkan, Tegal menawarkan pengalaman yang tak terlupakan bagi setiap pengunjung. Nikmati keindahan pantai yang menakjubkan, jelajahi warisan budaya yang kaya, dan rasakan keramahan penduduk lokal yang hangat. Dari destinasi religius hingga wisata alam yang menawan, Tegal memiliki segala sesuatu untuk memuaskan setiap jenis petualangan. Sambutlah keindahan dan keberagaman Tegal, dan biarkan diri Anda terpesona oleh pesona yang luar biasa dari kota ini.',
        },

        history: {
            title: 'Mengenal Sejarah Tegal',
            paragraph: 'Tegal, sebuah daerah di Jawa Tengah, memiliki asal-usul dari desa bernama TE-TEGAL. Pada sekitar tahun 1530, Ki Gede Sebayu, saudara Raden Benowo, memimpin perkembangan wilayah tersebut. Dengan memperluas lahan dan membangun saluran irigasi, ia berhasil meningkatkan hasil pertanian dan menjadi pemimpin yang dihormati oleh masyarakat setempat. Pada tahun 1580, Ki Gede Sebayu diangkat menjadi pemimpin resmi dalam sebuah perayaan tradisional. Tanggal ini kemudian ditetapkan sebagai Hari Jadi Kota Tegal pada tahun 1988. Kota ini berkembang pesat menjadi pusat perdagangan yang ramai dengan kedatangan pedagang dari berbagai suku bangsa. Budaya Islam menjadi pengaruh utama, meskipun kebudayaan lokal tetap dipertahankan. Ki Gede Sebayu dan Ki Gede Honggowono, putranya, berperan penting dalam perkembangan kota ini.',
            button: 'Pelajari Lebih Lanjut',
        },

        geografis: {
            title: 'Letak Geografis Tegal',
            paragraph: "Tegal terletak di pesisir utara Jawa Tengah. Kota Tegal dikelilingi oleh Kabupaten Tegal di selatan dan timur, Laut Jawa di utara, dan Brebes di barat. Kabupaten Tegal sendiri berbatasan dengan Brebes di barat, Pemalang di timur, Banyumas di selatan, dan Pemalang dan Pekalongan di tenggara. Untuk Kota Tegal terletak di 6°50'21' - 6°54'00' Lintang Selatan dan 109°08' - 109°10' Bujur Timur. Sedangkan Kabupaten Tegal terletak di 6°50'41' - 7°15'15'30' Lintang Selatan dan 108°57'6' - 109°21'30' Bujur Timur.",
            button: 'Buka Peta',
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
            title: 'About Tegal',
        },

        about: {
            title: 'Get To Know Tegal More Deeply',
            paragraph: "Tegal's natural beauty invites you to experience the unique charm of an area rich in culture and nature. With a touch of deep history and stunning natural beauty, Tegal offers an unforgettable experience for every visitor. Enjoy the stunning beauty of the beaches, explore the rich cultural heritage and experience the warm hospitality of the local people. From religious destinations to charming natural attractions, Tegal has everything to satisfy every type of adventure. Embrace the beauty and diversity of Tegal, and let yourself be enchanted by the extraordinary charm of this city.",
        },

        history: {
            title: 'Get to know the history of Tegal',
            paragraph: "Tegal, an area in Central Java, has its origins in a village called TE-TEGAL. Around 1530, Ki Gede Sebayu, Raden Benowo's brother, led the development of the area. By expanding land and building irrigation canals, he succeeded in increasing agricultural output and became a leader respected by the local community. In 1580, Ki Gede Sebayu was appointed official leader in a traditional celebration. This date was later designated as the Anniversary of Tegal City in 1988. This city developed rapidly into a busy trading center with the arrival of traders from various ethnic groups. Islamic culture is the main influence, although local culture is still maintained. Ki Gede Sebayu and Ki Gede Honggowono, his sons, played an important role in the development of this city.",
            button: 'Learn More',
        },

        geografis: {
            title: 'Geographical Location of Tegal',
            paragraph: "Tegal is located on the north coast of Central Java. Tegal City is surrounded by Tegal Regency to the south and east, the Java Sea to the north, and Brebes to the west. Tegal Regency itself borders Brebes to the west, Pemalang to the east, Banyumas to the south, and Pemalang and Pekalongan to the southeast. Tegal City is located at 6°50'21' - 6°54'00' South Latitude and 109°08' - 109°10' East Longitude. Meanwhile, Tegal Regency is located at 6°50'41' - 7°15'15'30' South Latitude and 108°57'6' - 109°21'30' East Longitude.",
            button: 'Open in Maps',
        },
    }
}

function setLanguage(language) {
    const selectedLang = lang[language];

    document.getElementById('nav-home').innerText = selectedLang.nav.home;
    document.getElementById('nav-about').innerText = selectedLang.nav.about;
    document.getElementById('nav-destination').innerText = selectedLang.nav.destination;
    document.getElementById('nav-favorite').innerText = selectedLang.nav.favorite;

    document.getElementById('hero-title-1').innerText = selectedLang.heroAbout.title;

    document.getElementById('about-title-1').innerText = selectedLang.history.title;
    document.getElementById('about-paragraph-1').innerText = selectedLang.history.paragraph;

    document.getElementById('history-title').innerText = selectedLang.history.title;
    document.getElementById('history-paragraph').innerText = selectedLang.history.paragraph;
    document.getElementById('history-btn').innerText = selectedLang.history.button;

    document.getElementById('geografis-title').innerText = selectedLang.geografis.title;
    document.getElementById('geografis-paragraph').innerText = selectedLang.geografis.paragraph;
    document.getElementById('geografis-button').innerText = selectedLang.geografis.button;

    document.getElementById('footer-home-1').innerText = selectedLang.nav.home;
    document.getElementById('footer-about-1').innerText = selectedLang.nav.about;
    document.getElementById('footer-destination-1').innerText = selectedLang.nav.destination;
    document.getElementById('footer-favorite-1').innerText = selectedLang.nav.favorite;

    localStorage.setItem('language', language);
}





