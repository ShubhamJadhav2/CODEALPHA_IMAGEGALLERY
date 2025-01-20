
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const closeModal = modal.querySelector('.close');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        modal.style.display = 'flex';
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
