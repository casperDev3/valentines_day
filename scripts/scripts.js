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

// on click add and remove class
heart.addEventListener('click', function() {
  heart.classList.add('hide');
  document.querySelector('.container').classList.add('show');
  document.querySelector('.showheart').classList.add('show');
});

// on click remove class
document.querySelector('.showheart').addEventListener('click', function() {
  heart.classList.remove('hide');
  document.querySelector('.container').classList.remove('show');
  document.querySelector('.showheart').classList.remove('show');
});
