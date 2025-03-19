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
 particlesJS('particles-js', {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#0066cc'
            },
            shape: {
                type: 'edge',
                stroke: {
                    width: 2,
                    color: '#0066cc'
                }
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.2,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'right',
                random: true,
                straight: true,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'repulse'
                },
                onclick: {
                    enable: false,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
