let src = './media/';
let imageContainer = document.getElementById('image-container');
let leftButton = document.getElementById('left-arrow');
let rightButton = document.getElementById('right-arrow');
let imageArr = [];

let state = {
  photoId: 0,
};

function populateCarousel(args) {
  args.map((item, index) => {
    imageArr.push(item);
  });
}

const handleLeftClick = () => {
  state.photoId === 0 ? state.photoId++ : (state.photoId = imageArr.length);
  console.log(state.photoId);
  imageContainer.style.backgroundImage =
    'url(' + src + imageArr[state.photoId] + ')';
  console.log(imageContainer.style);
};

const handleRightClick = () => {
  state.photoId < imageArr.length ? state.photoId++ : (state.photoId = 0);
  imageContainer.style.backgroundImage =
    'url(' + src + imageArr[state.photoId] + ')';
      console.log(imageContainer.style.backgroundImage);
      console.log(state.photoId)
};

window.onload = function () {
  populateCarousel(['ump.jpg', 'ump1.jpg', 'mel.jpg', 'ivanka.jpg']);
  leftButton.addEventListener('click', handleLeftClick);
  rightButton.addEventListener('click', handleRightClick);
};

// create array of image srcs + ids
// set base case of state
// add 'onclick' functionality to each button
// update state according to id number of image
