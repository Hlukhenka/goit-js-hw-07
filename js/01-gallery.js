import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const fotoEl = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}" >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", fotoEl);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const img = e.target;
  if (img.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<div >
      <img src="${img.dataset.source}" width="800px" alt="${img.alt}"> </img>
     </div>`
  );

  modal.show();

  window.addEventListener(
    "keydown",
    (e) => {
      if (e.code === "Escape") {
        modal.close();
        console.log("click Escape");
      }
    },
    { once: true }
  );
}
