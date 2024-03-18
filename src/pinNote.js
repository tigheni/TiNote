import { Elements } from "./index.js";

export default function PinNote() {
    const initialize = (e) => {
        e.preventDefault();
        const handlePinToggleClick = () => {
            const cards = document.querySelectorAll(".card");
            const cardArr = Array.from(cards);
            const activeCard = cardArr.filter((card) =>
                card.classList.contains("active")
            );
        };
        Elements.pinToggle.addEventListener("click", handlePinToggleClick);
    };
    document.addEventListener("DOMContentLoaded", initialize);
}
