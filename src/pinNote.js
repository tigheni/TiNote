import { Elements } from "./index.js";

export default function PinNote() {
    window.addEventListener("DOMContentLoaded", (e) => {
        e.preventDefault();
        Elements.pinToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const cards = document.querySelectorAll(".card");
            const cardArr = Array.from(cards);
            const activeCard = cardArr.filter((card) =>
                card.classList.contains("active")
            );
        });
    });
}
