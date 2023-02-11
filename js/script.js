// відкриття і закриття модалки
let close1 = document.querySelector(".modal-close");
let popup = document.querySelector(".modal-learn");
let link = document.querySelector(".lesson_1");
let link2 = document.querySelector(".lesson_2");
let link3 = document.querySelector(".lesson_3");
let link4 = document.querySelector(".lesson_4");
let body = document.querySelector(".forNow");

link.addEventListener("click", function () {
    popup.classList.add("modal-show");
    body.classList.add('lock');
    next_text.disabled = false;
    prev_text.disabled = true;
    i = 0;
    x = 0;
    text.innerHTML = '';
    arrDays = ["понеділок", "вівторок", "середа", "четвер", "пятниця", "субота", "неділя",];//fix
    arrDays2 = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela",];//bug
});

link2.addEventListener("click", function () {
    popup.classList.add("modal-show");
    body.classList.add('lock');
    text.innerHTML = '';
    arrDays = ['один', 'два', 'три', 'чотири', "п'ять", 'шість', 'сім', 'вісім', "дев'ять", 'десять'];
    arrDays2 = ['jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć', 'dziesięć',];
    next_text.disabled = false;
    prev_text.disabled = true;
    i = 0;
    x = 0;
});

link3.addEventListener("click", function () {
    popup.classList.add("modal-show");
    body.classList.add('lock');
    text.innerHTML = '';
    arrDays = ['тест1', 'тест2', 'тест3', 'тест4', "тест5",];
    arrDays2 = ['test1', 'test2', 'test3', 'test4', 'test5',];
    next_text.disabled = false;
    prev_text.disabled = true;
    i = 0;
    x = 0;
});

link4.addEventListener("click", function () {
    alert('шанавні відвідувачі, наразі йде активна фаза розробки сайту, нові уроки появляться найближчим часом <3')
});


close1.addEventListener("click", function () {
    popup.classList.remove("modal-show");
    body.classList.remove('lock');
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        body.classList.remove('lock');
    }
});

//зміна кольору після уроку
let change = document.querySelectorAll(".four-block__item");
function showChange() {
    this.classList.add("item_1");
}
change.forEach(changeItem => {
    changeItem.addEventListener("click", showChange);
});

// модалка зміна тексту
// урок 1
let text = document.querySelector(".modal_text");
let next_text = document.querySelector(".modal-next");
let prev_text = document.querySelector(".modal-prev");


next_text.addEventListener("click", function () {
    text.innerHTML = (`${arrDays[++i] + '-' + arrDays2[++x]}`);
    if (text.innerHTML === arrDays[arrDays.length - 1] + '-' + arrDays2[arrDays2.length - 1]) {
        next_text.disabled = true;
    } else {
        next_text.disabled = false;
        prev_text.disabled = false;
    }
});

prev_text.addEventListener("click", function () {
    text.innerHTML = (`${arrDays[--i] + '-' + arrDays2[--x]}`);
    if (text.innerHTML === arrDays[0] + '-' + arrDays2[0]) {
        prev_text.disabled = true;
    } else {
        prev_text.disabled = false;
        next_text.disabled = false;
    }
});
// бургер тут використано jquery
let closeburger = document.querySelector(".header__menu, .header__menu");
$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


let w = document.querySelector(".header__burger");
let we = document.querySelector(".header__menu");

window.addEventListener("keydown", function (evts) {
    if (evts.keyCode === 27) {
        evts.preventDefault();
        if (we.classList.contains("active")) {
            we.classList.remove("active");
            w.classList.remove("active");
        }
    }
});


/* кнопка з хвилями */

let wrapper1 = document.querySelector(".wrapper2");
let wave_btn = document.querySelector(".wave-btn2");
let wave_btn__text = document.querySelector(".wave-btn__text2");
let wave_btn__waves = document.querySelector(".wave-btn__waves2");

window.onresize = function () {
    if (document.documentElement.clientWidth >= 767) {
        wrapper1.classList.add("wrapper1");
        wave_btn.classList.add("wave-btn");
        wave_btn__text.classList.add("wave-btn__text");
        wave_btn__waves.classList.add("wave-btn__waves");
    }
    else {
        wrapper1.classList.remove("wrapper1");
        wave_btn.classList.remove("wave-btn");
        wave_btn__text.classList.remove("wave-btn__text");
        wave_btn__waves.classList.remove("wave-btn__waves");

    }
}

window.onload = function () {
    if (document.documentElement.clientWidth >= 767) {
        wrapper1.classList.add("wrapper1");
        wave_btn.classList.add("wave-btn");
        wave_btn__text.classList.add("wave-btn__text");
        wave_btn__waves.classList.add("wave-btn__waves");
    }
}












