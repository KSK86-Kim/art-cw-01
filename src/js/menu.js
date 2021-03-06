

const ref = {
    menuBtn: document.querySelector("[data-menu-button]"),
    menuCtn: document.querySelector("[data-menu-container]"),
}


ref.menuBtn.addEventListener("click", menuHidden)

function menuHidden () {
        const expanded = ref.menuBtn.getAttribute("aria-expanded") === "true" || false;
        ref.menuBtn.classList.toggle("is-open");
        ref.menuBtn.setAttribute("aria-expanded", !expanded);
        ref.menuCtn.classList.toggle("is-open")
}