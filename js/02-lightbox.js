import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const createGalerry = document.querySelector('.gallery');

const allGalleryEl = galleryItems.map(
 item =>
        `<a class="gallery__item" href=""${item.original}"">
  <img class="gallery__image"
   src="${item.preview}"
   alt=="${item.description}"/>
</a>`
)
    .join('');



createGalerry.insertAdjacentHTML('beforeend', allGalleryEl);

let img = '';
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (e) {
    img = `<div class="modal">
  <img src="${e.target.dataset.source}">
</div>`;
    captionData: 'alt';
        captionDelay: 250;
});