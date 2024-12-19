var time = 1000;

window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.querySelector('.splash-screen');
      if (splash) {
        splash.style.display = 'none';
      }
  }, time);
});