const heart = document.querySelector('.heart');
let scale = 1;
let increment = 0.02;

function animateHeart() {
  scale += increment;
  heart.style.transform = 'scale(' + scale + ')';
  if (scale > 1.4 || scale < 1) {
    increment = -increment;
  }
  requestAnimationFrame(animateHeart);
}

animateHeart();
