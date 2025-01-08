let portfolioContainer = document.querySelector('.portfolio-container');
let scrollAmount = 0;
const scrollStep = 320; // Change this value for more or less scroll

function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount > portfolioContainer.scrollWidth - portfolioContainer.clientWidth) {
        scrollAmount = 0; // Reset to the beginning if end is reached
    }
    portfolioContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Auto scroll every 3 seconds
setInterval(autoScroll, 3000);
