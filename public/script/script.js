const home = document.getElementById('home');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const text = document.getElementsByClassName('navbar');
const language = document.getElementById('language');
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

const languageText = document.getElementById('language-text');
const idn = document.getElementById("idn");
const svgIdn = document.getElementById("flag-idn");
const eng = document.getElementById("eng");

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
    changeLanguage('eng');
});


idn.addEventListener('click', function () {
    languageText.innerText = 'IDN';
    svgIdn.setAttribute('src', '/public/assets/icon-idn.png');
    setLanguage('idn');
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

        hero: {
            title: 'Jelajahi Keindahan Alam Tanpa Batas',
            subtitle: 'Selamat Datang di Destinasi Wisata Tegal',
            button: 'Eksplorasi',
        },

        heroAbout: {
            title: 'Tentang',
        },

        about: {
            title: 'Kenali Tentang Tegal Lebih Dalam',
            subtitle: '- Tentang',
            paragraph: 'Keindahan Alam Tegal mengundang Anda untuk merasakan pesona yang unik dari daerah yang kaya akan budaya dan alam. Dengan sentuhan sejarah yang dalam dan keindahan alam yang menakjubkan, Tegal menawarkan pengalaman yang tak terlupakan bagi setiap pengunjung. Nikmati keindahan pantai yang menakjubkan, jelajahi warisan budaya yang kaya, dan rasakan keramahan penduduk lokal yang hangat. Dari destinasi religius hingga wisata alam yang menawan, Tegal memiliki segala sesuatu untuk memuaskan setiap jenis petualangan. Sambutlah keindahan dan keberagaman Tegal, dan biarkan diri Anda terpesona oleh pesona yang luar biasa dari kota ini.',
            button: 'Baca Selengkapnya',
        },

        explore: {
            title: 'Kenapa Harus Tegal?',
            paragraph: 'Eksplorasi keindahan wisata dari Tegal dan jadikan sebagai salah satu pengalaman terbaik Anda',
            subtitle: ['Destinasi Wisata yang Terjangkau', 'Keindahan Alam yang Menakjubkan', 'Kuliner yang Menggugah Selera'],
            desc: ['Tegal memiliki berbagai pilihan tempat wisata yang terjangkau dan beragam', 'Tegal menawarkan destinasi alam yang menakjubkan, dari pantai hingga pegunungan', 'Tegal menawarkan destinasi alam yang menakjubkan, dari pantai hingga pegunungan']
        },

        destination: {
            subtitle: '- Destinasi',
            title: 'Destinasi Populer',
            paragraph: 'Temukan destinasi wisata terbaik untuk pengalaman Anda',
            link: 'Jelajahi Sekarang',
            button: 'Lihat Semua',
        },

        faq: {
            paragraph: 'Beberapa pertanyaan seputar destinasi di Tegal yang mungkin bisa membantu Anda',
            question: ['Apa saja destinasi yang populer di Tegal?', 'Apa saja tips ketika akan berwisata di Tegal?', 'Adakah biaya masuk yang harus dibayar untuk masuk destinasi wisata di Tegal?', 'Apakah ada peta/petunjuk destinasi sehingga mempermudah untuk menuju kesana?', 'Apakah tersedia fasilitas seperti toilet, tempat makan, atau tempat parkir di destinasi wisata di Tegal?', 'Apakah destinasi wisata di Tegal cocok untuk dikunjungi oleh keluarga dengan anak-anak?'],
            answer: ['Destinasi populer yang ada di Tegal adalah Pemandian Air Panas Guci, Waduk Cacaban, dan Pantai Alam Indah', 'Pilih waktu yang tepat, persiapkan apa saja yang ingin dibawa, siapkan uang tunai, dan patuhi peraturan yang ada di destinasi wisata', 'Tentu saja ada. Jika ingin melihatnya, Anda dapat masuk ke bagian destinasi dan untuk harga yang tertera adalah harga masuk ke wisatanya. Untuk harga wahananya yang ada pada destinasi akan berbeda dengan harga masuknya', 'Ada, kami sudah menyediakan untuk semua destinasi memiliki peta, sehingga itu dapat memudahkan Anda mencari destinasi yang ada di Tegal', "Untuk melihat fasilitas yang tersedia, Anda dapat melihatnya pada bagian 'Fasilitas Destinasi' di halaman destinasi", 'Sangat cocok. Tetapi awasi keluarga Anda, jangan biarkan berkeliaran sendiri terutama anak - anak, karena banyak orang yang juga menikmati liburan bersama keluarganya']
        },

        history: {
            header: 'Tentang Tegal',
            title: 'Mengenal Sejarah Tegal',
            paragraph: 'Tegal, sebuah daerah di Jawa Tengah, memiliki asal-usul dari desa bernama TE-TEGAL. Pada sekitar tahun 1530, Ki Gede Sebayu, saudara Raden Benowo, memimpin perkembangan wilayah tersebut. Dengan memperluas lahan dan membangun saluran irigasi, ia berhasil meningkatkan hasil pertanian dan menjadi pemimpin yang dihormati oleh masyarakat setempat. Pada tahun 1580, Ki Gede Sebayu diangkat menjadi pemimpin resmi dalam sebuah perayaan tradisional. Tanggal ini kemudian ditetapkan sebagai Hari Jadi Kota Tegal pada tahun 1988. Kota ini berkembang pesat menjadi pusat perdagangan yang ramai dengan kedatangan pedagang dari berbagai suku bangsa. Budaya Islam menjadi pengaruh utama, meskipun kebudayaan lokal tetap dipertahankan. Ki Gede Sebayu dan Ki Gede Honggowono, putranya, berperan penting dalam perkembangan kota ini.',
            button: 'Pelajari Lebih Lanjut',
        },

        geografis: {
            title: 'Letak Geografis Tegal',
            paragraph: '',
            button: 'Buka Peta'
        },

        favorite: {
            header: 'Favorit',
            title: 'Destinasi Favorit',
            subtitle: 'Disini adalah tempat Anda menemukan semua destinasi yang menjadi favorit Anda dan keluarga Anda',
            link: 'Jelajahi Sekarang',
        },

        footer: {
            title: 'Tunggu Apa Lagi? Ayo Jelajahi dan Rasakan Pengalaman yang Tak Terlupakan',
            button: 'Jelajahi Destinasi',
            home: 'Beranda',
            about: 'Tentang',
            destination: 'Destinasi',
            favorite: "Favorit",
        }
    },
    eng: {
        nav: {
            home: 'Home',
            about: 'About',
            destination: 'Destination',
            favorite: "Favorite",
        },

        hero: {
            title: 'Explore The Boundless Neauty of Nature',
            subtitle: 'Welcome to Tegal Destinations',
            button: 'Explore',
        },

        heroAbout: {
            title: 'About Tegal',
        },

        about: {
            title: 'Get To Know Tegal More Deeply',
            subtitle: '- About',
            paragraph: "Tegal's natural beauty invites you to experience the unique charm of an area rich in culture and nature. With a touch of deep history and stunning natural beauty, Tegal offers an unforgettable experience for every visitor. Enjoy the stunning beauty of the beaches, explore the rich cultural heritage and experience the warm hospitality of the local people. From religious destinations to charming natural attractions, Tegal has everything to satisfy every type of adventure. Embrace the beauty and diversity of Tegal, and let yourself be enchanted by the extraordinary charm of this city.",
            button: 'Read More',
        },

        explore: {
            title: 'Why Must Tegal?',
            paragraph: 'Explore the tourist beauty of Tegal and make it one of your best experiences',
            subtitle: ['Affordable Tourist Destinations', 'Stunning Natural Beauty', 'Appetizing Culinary'],
            desc: ['Tegal has a wide choice of affordable and varied tourist attractions', 'Tegal offers amazing natural destinations, from beaches to mountains', "Tegal is known for its various delicious dishes, so don't miss trying them"]
        },

        destination: {
            subtitle: '- Destination',
            title: 'Popular Destinations',
            paragraph: 'Find the best tourist destination for your experience',
            link: 'Explore Now',
            button: 'See All',
        },

        faq: {
            paragraph: 'Some questions about destinations in Tegal that might help you',
            question: ['What are the popular destinations in Tegal?', 'What are some tips when traveling to Tegal?', 'Is there an entrance fee that must be paid to enter tourist destinations in Tegal?', 'Is there a map/directions to the destination to make it easier to get there?', 'Are there facilities such as toilets, places to eat or parking available at tourist destinations in Tegal?', 'Are tourist destinations in Tegal suitable for families with children to visit?'],
            answer: ['Popular destinations in Tegal are Pemandian Air Panas Guci, Waduk Cacaban, and Pantai Alam Indah', 'Choose the right time, prepare what you want to bring, prepare cash, and obey the regulations at the tourist destination', 'Of course there is. If you want to see it, you can go to the destination section and the price listed is the entrance price to the tour. The price of the rides at the destination will be different from the entry price', 'Yes, we have provided maps for all destinations, so it can make it easier for you to find destinations in Tegal', "To see the available facilities, you can see them in the 'Destination Facilities' section on the destination page", "Very suitable. But keep an eye on your family, don't let them wander around alone, especially children, because many people also enjoy holidays with their families"]
        },

        favorite: {
            header: 'Favorite',
            title: 'Favorite Destinations',
            subtitle: 'This is the place where you can find all the favorite destinations for you and your family',
            link: 'Explore Now',
        },

        footer: {
            title: 'What are you waiting for? Come explore and experience an unforgettable experience',
            button: 'Explore Destinations',
            home: 'Home',
            about: 'About',
            destination: 'Destination',
            favorite: "Favorite",
        }
    }
}

function setLanguage(language) {
    const selectedLang = lang[language];

    document.getElementById('nav-home').innerText = selectedLang.nav.home;
    document.getElementById('nav-about').innerText = selectedLang.nav.about;
    document.getElementById('nav-destination').innerText = selectedLang.nav.destination;
    document.getElementById('nav-favorite').innerText = selectedLang.nav.favorite;

    document.getElementById('hero-title').innerText = selectedLang.hero.title;
    document.getElementById('hero-subtitle').innerText = selectedLang.hero.subtitle;
    document.getElementById('hero-button').innerText = selectedLang.hero.button;

    document.getElementById('about-title').innerText = selectedLang.about.title;
    document.getElementById('about-subtitle').innerText = selectedLang.about.subtitle;
    document.getElementById('about-paragraph').innerText = selectedLang.about.paragraph;
    document.getElementById('about-button').innerText = selectedLang.about.button;

    document.getElementById('explore-title').innerText = selectedLang.explore.title;
    document.getElementById('explore-paragraph').innerText = selectedLang.explore.paragraph;
    document.getElementById('explore-subtitle-1').innerText = selectedLang.explore.subtitle[0];
    document.getElementById('explore-subtitle-2').innerText = selectedLang.explore.subtitle[1];
    document.getElementById('explore-subtitle-3').innerText = selectedLang.explore.subtitle[2];
    document.getElementById('explore-paragraph-1').innerText = selectedLang.explore.desc[0];
    document.getElementById('explore-paragraph-2').innerText = selectedLang.explore.desc[1];
    document.getElementById('explore-paragraph-3').innerText = selectedLang.explore.desc[2];

    document.getElementById('destination-title').innerText = selectedLang.destination.title;
    document.getElementById('destination-subtitle').innerText = selectedLang.destination.subtitle;
    document.getElementById('destination-paragraph').innerText = selectedLang.destination.paragraph;
    document.getElementById('link-button-1').innerText = selectedLang.destination.link;
    document.getElementById('link-button-2').innerText = selectedLang.destination.link;
    document.getElementById('link-button-3').innerText = selectedLang.destination.link;
    document.getElementById('destination-button').innerText = selectedLang.destination.button;

    document.getElementById('faq-paragraph').innerText = selectedLang.faq.paragraph;
    document.getElementById('question-1').innerText = selectedLang.faq.question[0];
    document.getElementById('question-2').innerText = selectedLang.faq.question[1];
    document.getElementById('question-3').innerText = selectedLang.faq.question[2];
    document.getElementById('question-4').innerText = selectedLang.faq.question[3];
    document.getElementById('question-5').innerText = selectedLang.faq.question[4];
    document.getElementById('question-6').innerText = selectedLang.faq.question[5];
    document.getElementById('answer-1').innerText = selectedLang.faq.answer[0];
    document.getElementById('answer-2').innerText = selectedLang.faq.answer[1];
    document.getElementById('answer-3').innerText = selectedLang.faq.answer[2];
    document.getElementById('answer-4').innerText = selectedLang.faq.answer[3];
    document.getElementById('answer-5').innerText = selectedLang.faq.answer[4];
    document.getElementById('answer-6').innerText = selectedLang.faq.answer[5];

    document.getElementById('footer-title').innerText = selectedLang.footer.title;
    document.getElementById('footer-button').innerText = selectedLang.footer.button;

    document.getElementById('footer-home').innerText = selectedLang.footer.home;
    document.getElementById('footer-about').innerText = selectedLang.footer.about;
    document.getElementById('footer-destination').innerText = selectedLang.footer.destination;
    document.getElementById('footer-favorite').innerText = selectedLang.footer.favorite;

    // document.getElementById('fav-header').innerText = selectedLang.favorite.header;
   

    localStorage.setItem('language', language);
}





