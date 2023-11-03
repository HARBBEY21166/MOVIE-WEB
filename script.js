//preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  }, 3000); // 9000 milliseconds (9 seconds) delay
});
//let see

// script.js
//window.addEventListener('load', () => {
    //const loader = document.querySelector('.loader');
    
    //setTimeout(() => {
     //   loader.style.display = 'none';
   // }, 9000); // Hide the loader after 9 seconds
//});
//loader

const product = [
/* {
    id: 6,
    image: 'resident.jpg',
    title: 'Resident evil retribution (2010)',
    link: '#',
  },*/
  {
    id: 16,
    image: 'https://i.pinimg.com/236x/12/42/2d/12422db4398ec5c2537cc0e5f8b96435.jpg',
    title: 'Gran Turismo (2023)',
    link: '/movies.html/gran_turismo.html',
  },
  
  {
    id: 15,
    image: 'IMG_20231028_020003_542.jpg',
    title: 'The White Storm 3: Heaven or Hell (2023)',
    link: '#',
  },

  {
    id: 14,
    image: 'IMG_20231028_020024_799.jpg',
    title: 'Khunpan 3 (2023)',
    link: '#',
  },

  {
    id: 13,
    image: 'IMG_20231028_020035_336.jpg',
    title: 'The  Exorcist Believer (2023)',
    link: '#',
  },

  {
    id: 12,
    image: 'IMG_20231028_020107_188.jpg',
    title: 'Sayen : Desert Road (2023)',
    link: '#',
  },

  {
    id: 11,
    image: 'IMG_20231028_020122_606.jpg',
    title: 'Megalodon : The Frenzy (2023)',
    link: '#',
  },

  {
    id: 10,
    image: 'IMG_20231028_020132_925.jpg',
    title: 'Herd (2023)',
    link: '#',
  },

{
    id: 9,
    image: 'IMG_20231028_020145_641.jpg',
    title: 'Mortal Kombat Legends : Cage Match (2023)',
    link: '#',
  },

  {
    id: 8,
    image: 'IMG_20231028_020202_100.jpg',
    title: 'Expendables 4 (2023)',
    link: '#',
  },

  {
    id: 7,
    image: 'IMG_20231028_020303_112.jpg',
    title: 'Muzzle (2023)',
    link: '#',
  },

  {
    id: 6,
    image: 'IMG_20231028_020312_206.jpg',
    title: 'Ballerina (2023)',
    link: '#',
  },

  
  /*{
    id: 5,
    image: 'fifth.jpg',
    title: 'Gods Country (2022)',
    link: '#',
  },

  {
    id: 4,
    image: 'fourth.jpg',
    title: 'Trick or Treat Scooby-Doo (2022)',
    link: '#',
  },

  {
    id: 3,
    image: 'third.jpg',
    title: 'Jumping From High Places (2022)',
    link: '#',
  },

  {
    id: 2,
    image: 'second.jpg',
    title: 'Togo (2022)',
    link: '#',
  },

  {
    id: 1,
    image: 'first.jpg',
    title: 'Jeepers Creepers Reborn (2022)',
    link: '#',
  },

  {
    id: 0,
    image: 'resident.jpg',
    title: 'Resident evil retribution (2010)',
    link: '#',
  },*/
        ];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchData)
    )
  })
  displayItem(filteredData)
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
    var { image, title, link } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
              <img class='images' src=${image}></img>
            </div> 
            <div class='bottom'>
              <a href="${link}">${title}</a>
            </div>
          </div>`
    );
  }).join('');
};
displayItem(categories);