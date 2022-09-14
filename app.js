const hamburgerEl = document.querySelector('.burger');
const XIconEl = document.querySelector('.XIcon');
const mainMobileNavListEl = document.querySelector('.main-nav__list__mobile');
const featuredSpeakers = document.querySelector('.featured-speakers__items');

const featuredSpeakersArray = [
  {
    name: 'Ali Morshedlou',
    image: 'images/speakers/ali-morshedlou.jpg',
    qualification: 'BEng. Computer Science',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Christina Wocinte',
    image: 'images/speakers/christina-wocintechchat.jpg',
    qualification: 'BEng. Civil Engineering',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'David Mumma',
    image: 'images/speakers/david-mumma.jpg',
    qualification: 'BEng. Mechanical Engineering',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Elin Tabitha',
    image: 'images/speakers/elin-tabitha.jpg',
    qualification: 'BEng. Industrial Chemistry',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Gift Habeshaw',
    image: 'images/speakers/gift-habeshaw.jpg',
    qualification: 'BEng. Food Engineering',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Juan Enclada',
    image: 'images/speakers/juan-encalada.jpg',
    qualification: 'BEng. Electrical Engineering',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
];

document.querySelector('.card__title').style.backgroundClip = 'text';

const toggleNav = () => {
  hamburgerEl.addEventListener('click', () => {
    mainMobileNavListEl.classList.add('show');
    hamburgerEl.classList.add('hide');
  });

  XIconEl.addEventListener('click', () => {
    mainMobileNavListEl.classList.remove('show');
    hamburgerEl.classList.remove('hide');
  });
};

const renderFeaturedSpeaker = () => {
  let markup = '';
  featuredSpeakersArray.forEach((elem) => {
    markup += `<li class="featured-speakers__item flex-row">
    <div class="featured-speaker__image">
      <img src="${elem.image}" alt="" />
    </div>
    <div class="featured-speaker flex-column">
      <h5 class="featured-speaker__name">${elem.name}</h5>
      <h6 class="feature-speaker__qualification">
      ${elem.qualification}
      </h6>
      <p class="featured-speaker__about">
        <span>${elem.about.substring(0, 5)}</span>${elem.about.substring(5)}
      </p>
    </div>
  </li>`;
  });

  featuredSpeakers.innerHTML = markup;
};

toggleNav();
renderFeaturedSpeaker();