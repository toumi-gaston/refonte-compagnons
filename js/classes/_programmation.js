// SECTION PROGRAMMATION
if (window.innerWidth >= 900) {
    const eventCards = document.querySelectorAll(".eventCard");

    eventCards.forEach((eventCard) => {
        const eventCardInfoBox = eventCard.querySelector(".eventCard_infoBox");
        const eventCardInfoBoxContent = eventCard.querySelector(".eventCard_infoBox_info");

        eventCard.addEventListener("mouseenter", () => {
            eventCardInfoBoxContent.style.display = "flex";
            eventCardInfoBoxContent.style.opacity = "100";
            eventCardInfoBox.style.backgroundColor = "rgba(0, 0, 0, 0.787)";
        });

        eventCard.addEventListener("mouseleave", () => {
            eventCardInfoBoxContent.style.display = "none";
            eventCardInfoBoxContent.style.opacity = "0";
            eventCardInfoBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
        });
    });
}




// INPUTS 
// SEARCH
const searchBox = document.querySelector('.programmation_filters_search');
const searchInput = document.querySelector('.programmation_filters_search_searchBox');
const searchInputIcon = document.querySelector('.programmation_filters_search_icon > .material-symbols-outlined');

searchInput.addEventListener('focusin', () => {
    searchBox.style.borderColor = "black";
    searchBox.style.padding = "12px";
    searchInput.style.color = "black";
    searchInputIcon.style.color = "black";
    searchInputIcon.style.marginRight = "10px";

    searchBox.style.transition = "border-bottom 0.3s ease-in-out, padding 0.3s ease-in-out";
    searchInput.style.transition = "color 0.3s ease-in-out";
    searchInputIcon.style.transition = "color 0.3s ease-in-out, margin-right 0.3s ease-in-out";
});

searchInput.addEventListener('focusout', () => {
    searchInput.style.color = "rgba(0, 0, 0, 0.75)";
    searchInputIcon.style.color = "rgba(0, 0, 0, 0.75)";
    searchInputIcon.style.marginRight = "0px";
    searchBox.style.padding = "0px";
    searchBox.style.borderColor = "rgba(0, 0, 0, 0.75)";

    searchBox.style.transition = "border-bottom 0.3s ease-in-out, , padding 0.3s ease-in-out";
    searchInput.style.transition = "color 0.3s ease-in-out";
    searchInputIcon.style.transition = "color 0.3s ease-in-out, margin-right 0.3s ease-in-out";
});

// DATE 
const dateBox = document.querySelector('.');