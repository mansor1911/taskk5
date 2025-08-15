

document.getElementById("i1").addEventListener("click", function() {
    const themeLink = document.querySelector("[href*='style']");
    
    if (themeLink.getAttribute("href") === "style.css") {
        themeLink.setAttribute("href", "styledark.css");
        this.classList.remove("fa-toggle-off");
        this.classList.add("fa-toggle-on");
    } else {
        themeLink.setAttribute("href", "style.css");
        this.classList.remove("fa-toggle-on");
        this.classList.add("fa-toggle-off");
    }
});



const toggleBtn = document.getElementById('toggleBtn');
const sidePanel = document.getElementById('sidePanel');

toggleBtn.addEventListener('click', () => {
    sidePanel.classList.toggle('open');
});


cancelBtn.addEventListener('click', () => {
    sidePanel.classList.remove('open');
});

const savedColor = localStorage.getItem('bgColor');
if (savedColor) {
    document.getElementById("headd").style.backgroundColor= savedColor;
}

document.getElementById("change-color").addEventListener("click", function () {
    
    var newcolor = document.getElementById("headd").style.backgroundColor="orange";

    localStorage.setItem('bgColor', newcolor);



});


const sidebar = document.getElementById("sidebar1");
const exitbar = document.getElementById("exitbar");

document.getElementById("bars").addEventListener("click", function () {
    
    sidebar.classList.toggle('open');
});

exitbar.addEventListener('click', function () {
    
    sidebar.classList.remove('open');
});

