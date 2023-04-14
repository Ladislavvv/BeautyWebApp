const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

function openPopup() {
  popup.classList.add('active');
  overlay.classList.add('active');
}

function closePopup() {
  popup.classList.remove('active');
  overlay.classList.remove('active');
}
