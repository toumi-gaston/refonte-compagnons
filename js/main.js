// ACCORDION //
const accordion = document.querySelector('.simpliquer_menterie_accordion');

if (accordion) {
    const panel = document.querySelector('.simpliquer_menterie_accordion_panel');
    const icon = document.querySelector('.material-symbols-outlined');
    const chevronUp = "expand_less";
    const chevronDown = "expand_more";
    let currentIcon = chevronUp;


    accordion.addEventListener('click', () =>{
    if (panel.style.display === "block" && currentIcon === chevronUp){
        panel.style.display = "none";
        icon.innerHTML = currentIcon;
        currentIcon = chevronDown;
    } else{
        panel.style.display = "block";
        icon.innerHTML = currentIcon;
        currentIcon = chevronUp;
    }
})
}


