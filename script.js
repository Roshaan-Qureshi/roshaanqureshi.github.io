/* =====================================================
   ROSHAAN IMRAN QURESHI — PORTFOLIO JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       SCROLL REVEAL
       ================================================= */

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project-card, .education-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =================================================
       NAVBAR SCROLL EFFECT
       ================================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 9, 17, 0.96)";

        } else {

            navbar.style.background =
                "rgba(7, 11, 20, 0.85)";

        }

    });


    /* =================================================
       ACTIVE NAVIGATION
       ================================================= */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(
        ".navbar nav a"
    );

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =================================================
       PROJECT CARD TILT EFFECT
       ================================================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* =================================================
       SMOOTH SCROLL
       ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((anchor) => {

        anchor.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    /* =================================================
       TYPING EFFECT
       ================================================= */

    const typingElement =
        document.querySelector(".hero h2");

    if (typingElement) {

        const originalText =
            typingElement.textContent.trim();

        typingElement.textContent = "";

        let index = 0;

        function typeText() {

            if (index < originalText.length) {

                typingElement.textContent +=
                    originalText.charAt(index);

                index++;

                setTimeout(typeText, 45);

            }

        }

        setTimeout(typeText, 700);

    }


    /* =================================================
       YEAR AUTOMATICALLY UPDATES
       ================================================= */

    const footerText =
        document.querySelector("footer p");

    if (footerText) {

        const currentYear =
            new Date().getFullYear();

        footerText.innerHTML =
            `© ${currentYear} Roshaan Imran Qureshi.
             Built with HTML, CSS & JavaScript.`;

    }

});
