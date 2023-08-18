const mobileHeaderBtns = document.querySelectorAll('.m_header_container_button_primary');
const mobileHeaderBtnsLists = document.querySelectorAll('.m_header_container_button_secondary');
const mobileHeaderMenu = document.querySelector('.m_header_container');
const mobileHeaderMenuBtn = document.querySelector('.m_header_top_hamburger');
const mobileHeaderMenuBtnIcon = document.querySelector('.m_header_top_hamburger_icon');
const mobileMain = document.querySelector('main');
const mobileFooter = document.querySelector('footer');

mobileHeaderMenuBtn.addEventListener('click', () => {
    if (mobileHeaderMenuBtnIcon.textContent === 'close') {
        mobileHeaderMenuBtnIcon.textContent = 'menu';
        mobileHeaderMenu.style.display = 'none';
        mobileMain.style.display = 'block';
        mobileFooter.style.display = 'block';
    } else {
        mobileHeaderMenuBtnIcon.textContent = 'close';
        mobileHeaderMenu.style.display = 'flex';
        mobileMain.style.display = 'none';
        mobileFooter.style.display = 'none';
    }
})

mobileHeaderBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        const isHidden = mobileHeaderBtnsLists[index].style.display === 'none' || mobileHeaderBtnsLists[index].style.display === '';

        if (isHidden) {
            mobileHeaderBtnsLists[index].style.display = 'flex';
            button.querySelector('.m_header_container_button_primary_right .material-symbols-outlined').textContent = 'expand_less';
        } else {
            mobileHeaderBtnsLists[index].style.display = 'none';
            button.querySelector('.m_header_container_button_primary_right .material-symbols-outlined').textContent = 'expand_more';
        }
    });
});

// ACCORDION //

const accordion = document.querySelector('.simpliquer_menterie_accordion');
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
