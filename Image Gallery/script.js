const galleryContainer = document.getElementById('galleryContainer');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModalButton = document.getElementById('closeModal');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');

let currentIndex = 0;
let currentGallery = [];

const imageCategories = {
    laptops: [
        "images/img1.avif",
        "images/img2.avif",
        "images/img3.avif",
        "images/img4.avif",
        "images/img5.avif",
        "images/img6.avif",
        "images/img7.avif",
        "images/img8.avif",
        "images/img9.avif",
        "images/img10.avif",
        "images/img11.avif",
        "images/img12.avif"
    ],
    mobiles: [
        "images/mob1.jpeg",
        "images/mob2.webp",
        "images/mob3.webp",
        "images/mob4.webp",
        "images/mob5.webp",
        "images/mob6.webp",
        "images/mob7.webp",
        "images/mob8.webp",
        "images/mob9.webp",
        "images/mob10.webp",
        "images/mob11.jpeg",
        "images/mob12.webp"
    ],
    cars: [
        "images/car1.jpg",
        "images/car2.jpeg",
        "images/car3.jpeg",
        "images/car4.jpeg",
        "images/car5.jpeg",
        "images/car6.jpeg",
        "images/car7.jpeg",
        "images/car8.jpeg",
        "images/car9.jpeg",
        "images/car10.jpeg",
        "images/car11.jpeg",
        "images/car12.jpeg",
    ]
};

function openModal(index) {
    modal.style.display = 'flex';
    modalImage.src = currentGallery[index];
    currentIndex = index;
}

function closeModalWindow() {
    modal.style.display = 'none';
}

function nextImageSlide() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    modalImage.src = currentGallery[currentIndex];
}

function prevImageSlide() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImage.src = currentGallery[currentIndex];
}

function loadImages(category) {
    galleryContainer.innerHTML = '';

    const images = imageCategories[category];

    images.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Image ${index + 1}`;
        img.addEventListener('click', () => openModal(index));
        galleryContainer.appendChild(img);
    });

    currentGallery = images;

    galleryContainer.style.display = 'flex';
}

document.getElementById('laptopBtn').addEventListener('click', () => {
    galleryContainer.style.display = 'none'; 
    loadImages('laptops');
});
document.getElementById('mobilesBtn').addEventListener('click', () => {
    galleryContainer.style.display = 'none'; 
    loadImages('mobiles');
});
document.getElementById('carsBtn').addEventListener('click', () => {
    galleryContainer.style.display = 'none'; 
    loadImages('cars');
});

closeModalButton.addEventListener('click', (event) => {
    event.stopPropagation();
    closeModalWindow();
});

nextImage.addEventListener('click', nextImageSlide);
prevImage.addEventListener('click', prevImageSlide);

modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModalWindow();
});
