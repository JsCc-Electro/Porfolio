document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.portfolio-section');
    const firstSection = sections[0];

    if (firstSection) {
        firstSection.classList.add('revealed');
    }

    sections.forEach((section, index) => {
        if (index === 0) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove('revealed')
                }
            });
        }, {
            threshold: 0.2,
        });
        observer.observe(section);
    });
});
