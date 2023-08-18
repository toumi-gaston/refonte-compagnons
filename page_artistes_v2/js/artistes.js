const artistCards = document.querySelectorAll(".artist_card");


function showOverlay(event) {
    let overlay = event.currentTarget.querySelector(".artist_card_overlay");
    overlay.classList.add("artist_card_overlay_visible");
};

function hideOverlay(event) {
    let overlay = event.currentTarget.querySelector(".artist_card_overlay");
    overlay.classList.remove("artist_card_overlay_visible");

};

artistCards.forEach(card => {
    card.addEventListener('mouseover', showOverlay);
    card.addEventListener('mouseout', hideOverlay);
});

// carte artiste bouton calendrier

const calendarBtns = document.querySelectorAll('.artist_card_calendar');
const hideModalBtn = document.querySelector('.hide_modal_btn');
let artistModal = document.querySelector('.artist_modal_hidden');

console.log(document.body);



function showArtistModal(){
    artistModal.classList.add('artist_modal_visible');
    artistModal.classList.remove('artist_modal_hidden');
    document.body.classList.add('modal-open');
};

function hideArtistModal(){
    artistModal.classList.remove('artist_modal_visible');
    artistModal.classList.add('artist_modal_hidden');
    document.body.classList.remove('modal-open');
};

hideModalBtn.addEventListener('click', hideArtistModal);

calendarBtns.forEach(calendarBtn => {
    calendarBtn.addEventListener('click', showArtistModal);
});





// modal carousel

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");
    
const gap = 10;

next.addEventListener("click", e => {
    carousel.scrollBy(306 + gap, 0);
    if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + 400) {
    next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(306 + gap), 0);
    if (carousel.scrollLeft - 306 - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + 316) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));