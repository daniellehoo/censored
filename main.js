let src = './media/';
let image = document.getElementById('image');
let leftButton = document.getElementById('left-arrow');
let rightButton = document.getElementById('right-arrow');
let imageArr = [];
let circles = document.getElementsByClassName('circle-container')[0];
let state = {
  photoId: 0,
};

const init = (args) => {
  args.map((item, index) => {
    let circle = document.createElement('div');
    circle.id = index;
    circle.classList.add('circle');
    circles.append(circle);
    imageArr.push(item);
  });
  leftButton.addEventListener('click', handleLeftClick);
  rightButton.addEventListener('click', handleRightClick);
  toggleCircles();
};

const toggleCircles = () => {
  let circleCollection = document.getElementsByClassName('circle');
  let circleArr = [...circleCollection];
  if (circleArr.length > 0) {
    circleArr.map((item, index) => {
      state.photoId === index
        ? circleArr[index].classList.add('active')
        : circleArr[index].classList.remove('active');
      item.addEventListener('click', () => {
        state.photoId = index;
        image.src = src + imageArr[state.photoId];
        toggleCircles();
      });
    });
  }
};

const handleLeftClick = () => {
  state.photoId === 0 ? (state.photoId = imageArr.length - 1) : state.photoId--;
  image.src = src + imageArr[state.photoId];
  toggleCircles();
};

const handleRightClick = () => {
  state.photoId < imageArr.length - 1 ? state.photoId++ : (state.photoId = 0);
  image.src = src + imageArr[state.photoId];
  toggleCircles();
};

window.onload = function () {
  init(['ump.jpg', 'mel.jpg', 'ivanka.jpg', 'dtj.jpg', 'eric.jpg']);
};
