import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const fotoEl = galleryItems
  .map((item) => {
    return `<a class="gallery__link" href="${item.original}" >
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", fotoEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
