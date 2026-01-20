// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Initial check
revealOnScroll();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Parallax effect for hero and Navbar shrink
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero');
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo-img');

  hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';

  if (scrolled > 50) {
    nav.style.padding = '0.5rem 5rem';
    nav.style.top = '0';
    nav.style.width = '100%';
    nav.style.borderRadius = '0';
    nav.style.background = 'rgba(5, 5, 8, 0.95)';
    logo.style.height = '100px';
  } else {
    nav.style.padding = '0.1rem 5rem';
    nav.style.top = '65px';
    nav.style.width = '96%';
    nav.style.borderRadius = '20px';
    nav.style.background = 'rgba(10, 10, 12, 0.7)';
    logo.style.height = '200px';
  }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');

    // Close other items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
