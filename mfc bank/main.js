window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.querySelector('.splash-screen');
      if (splash) {
        splash.style.display = 'none';
      }
  }, 2000);
});