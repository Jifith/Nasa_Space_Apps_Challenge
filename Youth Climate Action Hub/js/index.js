function toggleCardContent(cardId) {
    var card = document.getElementById(cardId);
    card.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the card and popup modal elements
    const card = document.getElementById('nasa-card');
    const popupModal = document.getElementById('popup-modal');
    const closeBtn = document.querySelector('.close-btn');

    // When the card is clicked, show the popup modal
    if (card) {
        card.addEventListener('click', function() {
            popupModal.style.display = 'block';
        });
    }

    // When the close button is clicked, hide the popup modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popupModal.style.display = 'none';
        });
    }

    // Close the popup if the user clicks outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == popupModal) {
            popupModal.style.display = 'none';
        }
    });
});
