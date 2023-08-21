const dogBtn = document.querySelector('.random-dog');
const catBtn = document.querySelector('.random-cat');
const randomPetBtn = document.querySelector('.all-random');
const petImg = document.querySelector('#pet-img');

dogBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((Response) => Response.json())
    .then((data) => {
      petImg.src = data.message;
    });
});

catBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((Response) => Response.json())
    .then((data) => {
      petImg.src = data[0].url;
    });
});

randomPetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then((Response) => Response.json())
    .then((data) => {
      const petUrl = data.message || data[0].url;
      petImg.src = petUrl;
    });
});
