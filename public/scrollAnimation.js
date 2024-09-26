document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on page load
});
