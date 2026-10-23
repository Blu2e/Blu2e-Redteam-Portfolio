const navLinks = document.querySelectorAll(".navigation a");

const aboutLink = document.querySelector('.navigation a[href="#about"]');
const projectLink = document.querySelector('.navigation a[href="#project"]');
const studyLink = document.querySelector('.navigation a[href="#study"]');
const retrospectiveLink = document.querySelector('.navigation a[href="#retrospective"]');

// 각 메뉴가 대표하는 화면 영역
const sections = [
    { element: document.querySelector("#hero"), link: aboutLink },
    { element: document.querySelector("#about"), link: aboutLink },
    { element: document.querySelector("#project"), link: projectLink },
    { element: document.querySelector("#project-details"), link: projectLink },
    { element: document.querySelector("#study"), link: studyLink },
    { element: document.querySelector("#retrospective"), link: retrospectiveLink }
].filter(section => section.element && section.link);

// 선택된 메뉴의 표시 변경
function setActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

// 메뉴를 클릭하면 해당 메뉴 강조
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        setActiveLink(link);
    });
});

// 스크롤 위치에 따라 현재 메뉴 갱신
function updateActiveLink() {
    const marker = window.scrollY + 160;
    let currentSection = sections[0];

    sections.forEach(section => {
        const sectionTop =
            section.element.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= marker) {
            currentSection = section;
        }
    });

    if (currentSection) {
        setActiveLink(currentSection.link);
    }
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", updateActiveLink);

updateActiveLink();