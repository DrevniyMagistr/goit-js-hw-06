const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const galleryItemMarkup = images
  .map(
    ({ url, alt }) =>
      `<li class = "gallery__item"><img class = "gallery__img" src = '${url}' alt= '${alt}'></li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkup);

// * 2й варіант

// const makeGalleryCard = ({ url, alt }) => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('gallery__item');

//   const galleryImg = document.createElement('img');
//   galleryImg.classList.add('gallery__img');
//   galleryImg.src = url;
//   galleryImg.alt = alt;

//   galleryItemEl.append(galleryImg);
//   galleryEl.append(galleryItemEl);

//   return galleryItemEl;
// };

// const makeGalleryEl = images.map(makeGalleryCard);
