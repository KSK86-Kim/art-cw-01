
import cardsNewsTemplate from '../templates/cardEvent.hbs';
import cardsNews from '../json/news.json';

const refs = {
    eventBtn: document.querySelector("[data-event-button]"),
    eventGallery: document.querySelector("[data-event-list]"),
}


const markup = cardsNewsTemplate(cardsNews);
refs.eventGallery.insertAdjacentHTML('afterbegin', markup);


function eventHidden () {
    // const expanded = refs.newsBtn.getAttribute("aria-expanded") === "true" || false;
    refs.eventBtn.classList.toggle("is-open");
    // refs.newsBtn.setAttribute("aria-expanded", !expanded);
    refs.eventGallery.classList.toggle("is-open")
}

refs.eventBtn.addEventListener("click", eventHidden)