export default function toggleActive(cardo) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.classList.remove('active');
    });

    cardo.classList.toggle('active');
}
