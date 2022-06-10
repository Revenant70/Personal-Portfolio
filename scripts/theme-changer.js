// This js file changes the color-theme of the website

const themeBtn = document.querySelector(".theme-change-btn");
const themeCss = document.querySelector("#theme-css");


themeBtn.addEventListener("click", function() {
    themeCss.classList.toggle("dark-mode");
    if(themeCss.classList.contains("dark-mode")) {
        themeCss.href = "/css/dark-mode-theme.css"
    }
    else {
        themeCss.href = "/css/light-mode-theme.css"
    }
})