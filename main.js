let src = './media/';
let imageContainer = document.getElementById('image-container');
let leftButton = document.getElementById('left-arrow');
let rightButton = document.getElementById('right-arrow');
let imageArr = [];

let state = {
  photoId: 0,
};

const populateCarousel = (args) => {
  args.map((item, index) => {
    imageArr.push(item);
  });
}

const handleLeftClick = () => {
  state.photoId === 0 ? state.photoId = imageArr.length - 1 : state.photoId--;
  imageContainer.style.backgroundImage =
    'url(' + src + imageArr[state.photoId] + ')';
};

const handleRightClick = () => {
  state.photoId < imageArr.length - 1 ? state.photoId++ : state.photoId = 0;
  imageContainer.style.backgroundImage =
    'url(' + src + imageArr[state.photoId] + ')';
};

window.onload = function () {
  populateCarousel(['ump.jpg', 'ump1.jpg', 'mel.jpg', 'ivanka.jpg']);
  leftButton.addEventListener('click', handleLeftClick);
  rightButton.addEventListener('click', handleRightClick);
};
