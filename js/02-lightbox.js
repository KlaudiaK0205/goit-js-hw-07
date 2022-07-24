import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const newGalleryItem = galleryItems.map((galleryItems) => `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItems.original}" >
    <img
        class="gallery__image"
        src="${galleryItems.preview}"
        data-source="${galleryItems.original}"
        alt="${galleryItems.description}"/>
    </a></div>`).join("");

gallery.innerHTML = newGalleryItem;

new SimpleLightbox(".gallery a", { captionDelay: 250 });


{/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */}