/--Slider--/ 
const buttons = document.querySelectorAll("[data-slide-direction]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideDirection === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

const changeSlide = (offset) => {
  const slides = document.querySelector(".slider__ul");
  const activeSlide = slides.querySelector("[data-active-slide]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  newIndex =
    newIndex < 0
      ? slides.children.length - 1
      : newIndex === slides.children.length
      ? 0
      : newIndex;
  slides.children[newIndex].dataset.activeSlide = true;
  delete activeSlide.dataset.activeSlide;

  const circles = document.querySelector(".slider__title");
  const activeCircle = circles.querySelector("[data-active-slide]");
  circles.children[newIndex].dataset.activeSlide = true;
  delete activeCircle.dataset.activeSlide;
};

setInterval(changeSlide.bind(null, 1), 6000);
// /--Slider-Title--/ 
var sliderTitleApi = `http://localhost:3000/slider__title`;
var aboutApi = `http://localhost:3000/about`;
var memberApi = `http://localhost:3000/member`;
var tourApi = `http://localhost:3000/tour`;

function star () {
    getSliderTitle(renderSliderTitle);
    getAbout(renderAbout);
    getTour();
    getMember();
};

function getSliderTitle (callback) {
    fetch(sliderTitleApi)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}

function getTour (callback) {
    fetch(tourApi)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}

function renderSliderTitle (sliderTitle) {
    var sliderTitleSelect = document.querySelector(`.slider__title > div`);
    for (var i = 0; i < sliderTitle.length ; i++) {
        var htmls = sliderTitle.map(function(slider) {
            if (i == slider.id) {
                return `
                <h3>${slider.h3}</h3>
                <p>${slider.p}</p>
            `;
            }; 
        });
    }
    sliderTitleSelect.innerHTML = htmls.join(``);
};
// /---Get- About---/
function getAbout (callback) {
    fetch(aboutApi)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}
function renderAbout (about) {
    var aboutHeadingSelect = document.querySelector(`h2.content--heading`);
    var aboutSubSelect = document.querySelector(`p.content--sub-heading`);
    var aboutTextSelect = document.querySelector(`p.content__about-text`);
    // var htmls = 
    about.forEach(function(band) {
        aboutHeadingSelect.innerHTML = band.name;
        aboutSubSelect.innerHTML = band.slogan;
        aboutTextSelect.innerHTML = band.description;
     });
}; 
// /---Get-Member---/
function getMember (callback) {
    fetch(memberApi)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}



// ------show-Modal
const getBuyTickets = document.querySelectorAll('.js__btn');
const modal = document.querySelector('.js__modal');
const modalClose = document.querySelector('.js__modal-close');
const modalContainer = document.querySelector('.js__modal-container');
function showBuyTickets () {
     modal.classList.add('open')
};
function sloseBuyTickets () {
     modal.classList.remove('open')
};
function stopEvent(event) {
    event.stopPropagation();
}
for ( var getBuyTicket of getBuyTickets) {
    getBuyTicket.addEventListener('click',showBuyTickets)
};
modalClose.addEventListener('click',sloseBuyTickets);
modal.addEventListener('click',sloseBuyTickets);
modalContainer.addEventListener('click',stopEvent)
// star();
