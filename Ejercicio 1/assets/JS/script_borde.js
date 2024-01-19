const image = document.querySelector('img');
let isBorderVisible = false;

image.addEventListener('click', () => {
  if (isBorderVisible) {
    image.style.border = 'none';
    isBorderVisible = false;
  } else {
    image.style.border = '2px solid red';
    image.style.borderRadius = '0px';
    isBorderVisible = true;
  }
});

