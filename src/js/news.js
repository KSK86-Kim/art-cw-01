

const refs = {
    newsBtn: document.querySelector("[data-news-button]"),
    newsCtn: document.querySelector("[data-news-container]"),
}
console.log(refs.newsBtn, refs.newsCtn)


refs.newsBtn.addEventListener("click", newsHidden)

function newsHidden () {
        // const expanded = refs.newsBtn.getAttribute("aria-expanded") === "true" || false;
        refs.newsBtn.classList.toggle("is-open");
        // refs.newsBtn.setAttribute("aria-expanded", !expanded);
        refs.newsCtn.classList.toggle("is-open")
}


// refs.newsBtn.addEventListener("click", () => {
//     if (refs.newsCtn.style.height === "0px") {
//         refs.newsCtn.style.height = `${ refs.newsCtn.scrollHeight }px`
        
//     }
//     else {
//         refs.newsCtn.style.height = `${ refs.newsCtn.scrollHeight }px`;
//         window.getComputedStyle(refs.newsCtn, null).getPropertyValue("height");
//         refs.newsCtn.style.height = "0";
//     }
// });

// refs.newsCtn.addEventListener("transitionend", () => {
//     if (refs.newsCtn.style.height !== "0px") {
//         refs.newsCtn.style.height = "auto"
//     }
// });
// console.log(refs.newsCtn.scrollHeight)