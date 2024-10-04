let menuBar = document.querySelector('.bar');
let menuTray = document.querySelector('.menu');
let roiBtn = document.querySelector('#roi');
let card = document.querySelector('.card');
let cnlBtn = document.querySelector('#cnl');

let eligibility = document.querySelector('#status');
let cancel = document.querySelector('.cancel');
let opay = document.querySelector('.opay');

let switchTheme = document.getElementById('switch');


menuBar.addEventListener('click', () => {
  if (menuTray.style.display == 'block') {
    menuTray.style.display = 'none';
  } else {
    menuTray.style.display = 'block';
  }
});

roiBtn.addEventListener('click', () => {
  if (card.style.display == 'block') {
    card.style.display = 'none'
  } else {
    card.style.display = 'block';
    menuTray.style.display = 'none';
  }
})

cnlBtn.addEventListener('click', () => {
  card.style.display = 'none';
})

eligibility.addEventListener('click', () => {
  if (opay.style.display == 'flex') {
    opay.style.display = 'none'
  } else {
    opay.style.display = 'flex';
    menuTray.style.display = 'none';
  }
})

cancel.addEventListener('click', () => {
  opay.style.display = 'none';
})

switchTheme.addEventListener('click', () => {
  if (switchTheme.checked) {
    console.log('Switch is ON');
    document.body.style.background = 'var(--blue)';
  } else {
    console.log('Switch is OFF');
    document.body.style.background = 'var(--dark)';
  }
})
