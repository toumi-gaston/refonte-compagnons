const compagnonsBanner = document.querySelector(".filiere_banner_compagnons");
const compagnonsBannerFilter = document.querySelector(".compagnons_filiere_filter");
const forgeBanner = document.querySelector(".filiere_banner_forge");
const forgeBannerFilter = document.querySelector(".forge_filiere_filter");
const rdvBanner = document.querySelector(".filiere_banner_rdv");
const rdvBannerFilter = document.querySelector(".rdv_filiere_filter");
const ventsBanner = document.querySelector(".filiere_banner_vents");
const ventsBannerFilter = document.querySelector(".vents_filiere_filter");

/* --- Banniere filiere compagnons --- */

function compagnonsBannerHover () {
    compagnonsBanner.classList.add("filiere_banner_compagnons_hover");
    compagnonsBanner.classList.remove("filiere_banner_compagnons_out");
    compagnonsBannerFilter.classList.remove("compagnons_filiere_filter_out");
    compagnonsBannerFilter.classList.add("compagnons_filiere_filter_hover");
};

function compagnonsBannerOut (){
    compagnonsBanner.classList.remove("filiere_banner_compagnons_hover");
    compagnonsBanner.classList.add("filiere_banner_compagnons_out");
    compagnonsBannerFilter.classList.remove("compagnons_filiere_filter_hover");
    compagnonsBannerFilter.classList.add("compagnons_filiere_filter_out");
}

compagnonsBanner.addEventListener('mouseover', compagnonsBannerHover);
compagnonsBanner.addEventListener('mouseout', compagnonsBannerOut);

/* ---- Banniere filiere forge --- */

function forgeBannerHover () {
    forgeBanner.classList.add("filiere_banner_forge_hover");
    forgeBanner.classList.remove("filiere_banner_forge_out");
    forgeBannerFilter.classList.remove("forge_filiere_filter_out");
    forgeBannerFilter.classList.add("forge_filiere_filter_hover");
};

function forgeBannerOut (){
    forgeBanner.classList.remove("filiere_banner_forge_hover");
    forgeBanner.classList.add("filiere_banner_forge_out");
    forgeBannerFilter.classList.remove("forge_filiere_filter_hover");
    forgeBannerFilter.classList.add("forge_filiere_filter_out");
};

forgeBanner.addEventListener('mouseover', forgeBannerHover);
forgeBanner.addEventListener('mouseout', forgeBannerOut);


/* ---- Banniere RDV forge --- */

function rdvBannerHover () {
    rdvBanner.classList.add("filiere_banner_rdv_hover");
    rdvBanner.classList.remove("filiere_banner_rdv_out");
    rdvBannerFilter.classList.remove("rdv_filiere_filter_out");
    rdvBannerFilter.classList.add("rdv_filiere_filter_hover");
};

function rdvBannerOut (){
    rdvBanner.classList.remove("filiere_banner_rdv_hover");
    rdvBanner.classList.add("filiere_banner_rdv_out");
    rdvBannerFilter.classList.remove("rdv_filiere_filter_hover");
    rdvBannerFilter.classList.add("rdv_filiere_filter_out");
};

rdvBanner.addEventListener('mouseover', rdvBannerHover);
rdvBanner.addEventListener('mouseout', rdvBannerOut);


/* ---- Banniere vents forge --- */

function ventsBannerHover () {
    ventsBanner.classList.add("filiere_banner_vents_hover");
    ventsBanner.classList.remove("filiere_banner_vents_out");
    ventsBannerFilter.classList.remove("vents_filiere_filter_out");
    ventsBannerFilter.classList.add("vents_filiere_filter_hover");
};

function ventsBannerOut (){
    ventsBanner.classList.remove("filiere_banner_vents_hover");
    ventsBanner.classList.add("filiere_banner_vents_out");
    ventsBannerFilter.classList.remove("vents_filiere_filter_hover");
    ventsBannerFilter.classList.add("vents_filiere_filter_out");
};

ventsBanner.addEventListener('mouseover', ventsBannerHover);
ventsBanner.addEventListener('mouseout', ventsBannerOut);


