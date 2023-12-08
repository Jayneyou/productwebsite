/*****global header&footer*****/
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar('navbarContainer', 'toggle-button', 'nav-links');
    loadFooter('footerContainer')
});

/*****function*****/
function loadNavbar(navbarContainerId, toggleButtonClass, navLinksClass) {
    //fetch navbar content from html
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navbar content into the specified container
            document.getElementById(navbarContainerId).innerHTML = data;
            const toggleButton = document.getElementsByClassName(toggleButtonClass)[0];
            const navLinks = document.getElementsByClassName(navLinksClass)[0];

            //check element
            if (toggleButton && navLinks) {
                toggleButton.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            } else {
                console.error('Toggle button or nav links not found.');
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function loadFooter(footerContainerId) {
    // Fetch the footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Insert the footer content into the specified container
            document.getElementById(footerContainerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

/*****gallery*****/
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
});//once click, scroll left

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
});//scroll back