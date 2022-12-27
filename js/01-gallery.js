import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const fotoEl = galleryItems
  .map((item) => {
    return `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image " src="${item.preview}" alt="${item.description}" width="340px"></img></a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", fotoEl);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log("click");
  instance.show()
}
