const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('about__card-animation');
    }
  });
});

const cards = document.querySelectorAll('.about__card');
cards.forEach(card => {
  observer.observe(card);
});