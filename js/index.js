const galleryItems = [
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
     description: 'Hokkaido Flower',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
     description: 'Container Haulage Freight',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
     description: 'Aerial Beach View',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
     description: 'Flower Blooms',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
     description: 'Alpine Mountains',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
     description: 'Mountain Lake Sailing',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
     description: 'Alpine Spring Meadows',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
     description: 'Nature Landscape',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
     description: 'Lighthouse Coast Sea',
   },
 ];

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const closeBtn = document.querySelector('.lightbox__button');


const imgMarkup = createGalleryImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

function createGalleryImgMarkup(items) {
   return items
      .map(({ preview, original, description }) => {
         return `
      <li class="gallery__item">
         <a class="gallery__link" href="${original}">
          <img
               loading='lazy'
               class="gallery__image"
               src="${preview}" 
               data-source="${original}"
               alt="${description}"               
          />
         </a>
      </li>`;
      })
      .join('');
}

 function openModal(event) {
    event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  lightbox.classList.add('is-open');
  galleryItems.forEach(item => {
    if (event.target.getAttribute('src') === item.preview) {
      lightboxImg.setAttribute('src', item.original);
      lightboxImg.setAttribute('alt', item.description);
    }
  })
}

function closeModal(event) { 
  if (event.target.classList.contains('lightbox__button') || event.target.classList.contains('lightbox__overlay') || event.key === 'Escape' ) {
      lightbox.classList.remove('is-open');
      galleryItems.forEach(item => {lightboxImg.removeAttribute('src')})
    }
}

galleryContainer.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal); 
overlay.addEventListener('click', closeModal);