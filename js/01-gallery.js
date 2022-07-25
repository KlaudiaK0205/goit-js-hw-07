import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const newGalleryItem = galleryItems.map((galleryItems) => `<div class='gallery__item'>
    <a class='gallery__link' href='${galleryItems.original}' >
    <img
        class='gallery__image'
        src='${galleryItems.preview}'
        data-source='${galleryItems.original}'
        alt='${galleryItems.description}'/>
    </a></div>`).join(' ');

    gallery.innerHTML = newGalleryItem;

// DONE

// OPCJONALNE ZADANIE

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const dataImg = event.target.getAttribute('data-source');
    
    const instance = basicLightbox.create(`<img src='${dataImg}' />`, {
    
    onShow: (instance) => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') instance.close();
        })
    }
});

instance.show();

});

// DONE