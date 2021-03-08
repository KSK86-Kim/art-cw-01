import cardsNewsTemplate from '../templates/cardsNews.hbs';
import cardsNews from '../json/news.json';


const refs = {
    newsGallery: document.querySelector(".js-news"),
}

const markup = cardsNewsTemplate(cardsNews);
refs.newsGallery.insertAdjacentHTML('afterbegin', markup);
