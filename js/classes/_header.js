const header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 1200) {
        const header = document.querySelector("header");
        const headerContainer = document.querySelector('.header_container');

        function updateHeaderClasses() {
            if (window.scrollY > 0) {
                header.classList.remove('basic-header');
                header.classList.add("fixed-header");
                
                if (header.classList.contains("fixed-header")) {
                    if (window.scrollY > 300) {
                        headerContainer.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; // Change background color to red
                        header.classList.add("fixed-header-active");
                    } else {
                        headerContainer.style.backgroundColor = "black"; // Reset background color
                        header.classList.remove("fixed-header-active");
                    }
                }
            } else {
                header.classList.add('basic-header');
                header.classList.remove("fixed-header");
                header.classList.remove("fixed-header-active");
                headerContainer.style.backgroundColor = ""; // Reset background color
            }
        }
        updateHeaderClasses();

        window.addEventListener("scroll", function () {
            updateHeaderClasses();
        });

        window.addEventListener("resize", function () {
            updateHeaderClasses();
        });
    } else {
        header.style.backgroundColor = "black"
    }
});



// HEADER MOBILE VS PC
const m_Header = document.querySelector('.m_header');
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
        m_Header.style.position = 'fixed';
    } else {
        mobileHeaderMenuBtnIcon.textContent = 'close';
        mobileHeaderMenu.style.display = 'flex';
        mobileMain.style.display = 'none';
        mobileFooter.style.display = 'none';
        m_Header.style.position = 'static';
        m_Header.style.width = '100%';
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




