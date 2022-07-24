import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const newGalleryItem = galleryItems.map((galleryItems) => `<a class="gallery__item" href="${galleryItems.original}" >
<img
  class="gallery__image"
  src="${galleryItems.preview}"
  alt="${galleryItems.description}"
  title="${galleryItems.description}"
/>
</a>`).join("");

gallery.insertAdjacentHTML("afterbegin", newGalleryItem);

new SimpleLightbox(".gallery a", { captionDelay: 250 });

// DONE