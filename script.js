// script.js
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.style.display = 'none';
    }, 9000); // Hide the loader after 9 seconds
});
//loader

const product = [
/* {
    id: 6,
    image: 'resident.jpg',
    title: 'Resident evil retribution (2010)',
    link: '#',
  },*/

  {
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
  },
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