/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */
// Navbar
let isOpened = false;
const $body = document.body;
const $navbar = document.querySelector('.l-navbar');
const $burger = document.querySelector('.o-burger');

function toggleNavbar() {
  if (!isOpened) {
    $body.style.overflow = 'hidden';
    $navbar.classList.add('is-opened');
    $burger.classList.add('is-opened');
    isOpened = true;
  } else {
    $body.style.overflow = '';
    $navbar.classList.remove('is-opened');
    $burger.classList.remove('is-opened');
    isOpened = false;
  }
}

// $burger.addEventListener('click', function() {
//   toggleNavbar();
// });

const $news = document.querySelector('.l-news');
window.addEventListener('scroll', function() {
  if ($news !== null) {
    // $news.getBoundingClientRect().top; news 跟視窗頂部的距離
    const newsTop = $news.getBoundingClientRect().top;
    console.dir($news)
    const newsHeight = $news.offsetHeight
    // -200 提前變色
    const start = newsTop - 200
    // 除以 2 提前結束
    const end = (newsHeight * -1) / 2
    if (start < 0 && newsTop > end) {
      $body.classList.add('is-news-active');
    } else {
      $body.classList.remove('is-news-active');
    }
  }
})


/* ----------------------------------- */
/* ------ Plugins ------ */
/* ----------------------------------- */
// Lenis
const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


const $lazyImgs = document.querySelectorAll('img.js-lazy');
$lazyImgs.forEach(function(item) {
  // https://png-pixel.com/
  item.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAQAAABHvi1JAAACNUlEQVR42u3TMQEAAAgDINc/mLE0gZ8ndCA9BRwiCAgCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoKAIIKAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAgIIggIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCDwZwF2ixVTTYF0mAAAAABJRU5ErkJggg=='
});
// https://github.com/verlok/vanilla-lazyload
const lazyLoad = new LazyLoad({
  elements_selector: '.js-lazy',
  // 設定距離可視區(視窗)底部多遠觸發
  threshold: 500,
  callback_loaded: function() {
    AOS.refresh();
  }
});

//-- Parallax
const $parallaxes = document.querySelectorAll('.js-parallax');
$parallaxes.forEach(function(item) {
  new Parallax(item, {
    // 滑鼠進入元素內才生效
    hoverOnly: true,
    // 滑鼠相對於指定元素（預設為可視區）
    relativeInput: true,
  })
});

