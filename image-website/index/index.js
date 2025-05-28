document.getElementById('heading').addEventListener('dblclick', () => {
    window.location.href = "admin";
})
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.round(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        }

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        }, { threshold: 0.1 });

        observer.observe(counter);
    });
}

animateCounters();
