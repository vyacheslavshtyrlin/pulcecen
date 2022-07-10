
const sliderLine = document.querySelector('.slider');
const articleSlider = document.querySelector('.article__slider');
const section = document.querySelector('.promotion__section');
const article = document.querySelector('.article')
const plan = document.querySelectorAll('.effictivity')
const buttonArticles = document.querySelector('.effectivity__button_articles');
const buttonPlan = document.querySelector('.effectivity__button_plans');
const elementPlan = buttonPlan.parentElement;
const parentPlan = elementPlan.parentElement;
const elementArticle = buttonArticles.parentElement;
const parentArticle = elementArticle.parentElement;
const sidebar = document.querySelector('.sidebar');
const page = document.querySelector('.page');
const buttonModal = document.querySelector('.button__modal')
const buttonClose = document.querySelector('.form__button')
const form = document.querySelector('.form')
const toolbar = document.querySelector('.sidebar__toolbar');
const sidebarMenu = document.querySelector('.sidebar__menu')

toolbar.addEventListener('click', () => {
  sidebarMenu.classList.toggle('sidebar__menu_active');

})



buttonClose.addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.remove('form_active');
})

buttonModal.addEventListener('click', () => {
  form.classList.add('form_active');
})

let check = false;

buttonArticles.addEventListener('click', () => {
  if (check) {
    section.classList.remove('promotion__section_active');
    parentPlan.classList.remove('effictivity__active');
    check = !check
  }
  article.classList.toggle('articale_active');
  parentArticle.classList.toggle('effictivity__active');
  check = !check;
});

buttonPlan.addEventListener('click', () => {
  if (check) {
    article.classList.remove('articale_active');
    parentArticle.classList.remove('effictivity__active');
    check = !check;
  }
  section.classList.toggle('promotion__section_active');
  parentPlan.classList.toggle('effictivity__active');
  check = !check
});


let start = 0;

document.querySelector('.promotion__slider_arrow').addEventListener('click', function(){
  start = start + 1528;
  if (start > 3096) {
    start = 0
  };
  sliderLine.style.left = -start + 'px';
});

document.querySelector('.article__slider_arrow').addEventListener('click', () => {
  start = start + 360;
  if (start > 360) {
    start = 0
  };
  articleSlider.style.left = -start + 'px';
})

sidebar.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_active');
  page.classList.toggle('sidebar_active');
});


