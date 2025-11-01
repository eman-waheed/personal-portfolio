// Typing animation
const text = document.querySelector('.typing-text');
if (text) {
  const fullText = text.textContent;
  text.textContent = '';
  let i = 0;
  function type() {
    if (i < fullText.length) {
      text.textContent += fullText.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}

// Fade-up scroll animation
const faders = document.querySelectorAll('.fade-up');
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
faders.forEach(fader => appearOnScroll.observe(fader));
