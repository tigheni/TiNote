export default function toggleActive(card) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.classList.remove("active");
    });

    card.classList.toggle("active");
}
