// Animate name, birthday, and personality on load
window.addEventListener('DOMContentLoaded', function() {
  const nameEl = document.getElementById('myName');
  const birthdayEl = document.getElementById('myBirthday');
  const personalityEl = document.getElementById('myPersonality');

  // Example data (replace with your own)
  nameEl.textContent = 'Farrrreeell';
  birthdayEl.textContent = 'March 22nd';
  personalityEl.textContent = 'ISFP(maybe), e6w7 269 sp/sx';

  // Animate in
  [nameEl, birthdayEl, personalityEl].forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s';
      el.style.opacity = 1;
    }, 400 + i * 250);
  });
});

// Parallax scrolling for wave backgrounds
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const topWave = document.querySelector('.wave-top');
  const bottomWave = document.querySelector('.wave-bottom');
  if (topWave) {
    topWave.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
  if (bottomWave) {
    bottomWave.style.transform = `translateY(${-scrollY * 0.2}px)`;
  }
});

// Section transitions on scroll
function revealSections() {
  const sections = document.querySelectorAll('.section-border');
  const trigger = window.innerHeight * 0.92;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
