function changeImageBasedOnScreen() {
  const imageElement = document.querySelector('.image1');
  const screenWidth = window.innerWidth;
  
  if (screenWidth <= 768) {
    imageElement.src = '/images/background-pattern-mobile.svg';
    imageElement.alt = 'mobile img';
  } else {
    imageElement.src = '/images/background-pattern-desktop.svg';
    imageElement.alt ='desktop img';
  }
}

window.addEventListener('load', changeImageBasedOnScreen);

window.addEventListener('resize', changeImageBasedOnScreen);