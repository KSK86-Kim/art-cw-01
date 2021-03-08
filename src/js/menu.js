

const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    menuCtn: document.querySelector("[data-menu-container]"),
}


refs.menuBtn.addEventListener("click", menuHidden)

function menuHidden () {
        const expanded = refs.menuBtn.getAttribute("aria-expanded") === "true" || false;
        refs.menuBtn.classList.toggle("is-open");
        refs.menuBtn.setAttribute("aria-expanded", !expanded);
        refs.menuCtn.classList.toggle("is-open")
}