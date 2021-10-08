/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */
// -- Detect Browser
// 偵測瀏覽器加入對應 js 文件
function isMobile() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}
$(function () {
  if (!isMobile()) {
    let explorer = navigator.userAgent;
    console.log(navigator.userAgent);
    if (explorer.indexOf('Firefox') >= 0) {
      $('body').append(
        '<script async src="js/smooth-scrolling-chrome.js"></script>'
      );
    } else if (explorer.indexOf('Chrome') >= 0) {
      $('body').append(
        '<script async src="js/smooth-scrolling-chrome.js"></script>'
      );
    } else if (explorer.indexOf('Safari') >= 0) {
      $('body').append(
        '<script async src="js/smooth-scrolling-safari.js"></script>'
      );
    }
  }
});

// -- Hover Mobile
$(function () {
  if (isMobile()) {
    $('.u-hover-mobile').css({
      display: 'block',
    });
  } else {
    $('.u-hover-mobile').css({
      display: 'none',
    });
  }
});

//-- Btn Tag
// 抓取檔名
$(function () {
  let url = location.href;
  $('a').each(function () {
    let aHref = $(this).attr('href').split('/');
    let aValue = aHref[aHref.length - 1] || ' ';
    if (url.indexOf(aValue) > -1 && aValue !== '##') {
      $(this).addClass('is-active');
    }
  });
});

// -- burger
$(function () {
  let isOpened = false;
  $('.o-burger').click(function () {
    if (isOpened === false) {
      $(this).addClass('is-opened');
      $('.c-navbar').addClass('is-opened');
      isOpened = true;
    } else if (isOpened === true) {
      $(this).removeClass('is-opened');
      $('.c-navbar').removeClass('is-opened');
      isOpened = false;
    }
  });
});

// -- navbar
$(function () {
  // ! 表示否定
  if (!$('#app').hasClass('is-home')) {
    $('.c-navbar').addClass('is-fixed');
  }
  let initScrollY = 0;
  $(window).scroll(function () {
    let firstScrollY = this.scrollY || this.pageYoffset;
    // 首次向上滾
    // initScrollY -> 0
    // firstScrollY -> 1
    // 第二次向上滾
    // initScrollY -> 1
    // firstScrollY -> 2
    console.log('init', initScrollY);
    console.log('first', firstScrollY);
    if (initScrollY < firstScrollY) {
      $('.c-navbar').addClass('is-scrolldown');
    } else {
      $('.c-navbar').removeClass('is-scrolldown');
    }
    initScrollY = firstScrollY;
    // initScrollY -> 1

    if ($('#app').hasClass('is-home')) {
      // this -> $(window)
      if ($(this).scrollTop() > $('.l-header').outerHeight() / 2) {
        $('.c-navbar').addClass('is-fixed');
      } else {
        $('.c-navbar').removeClass('is-fixed');
      }
    }
  });
  let debounce;
  $(window).on('resize load', function () {
    let self = this;
    // 防止持續執行（防抖）
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(function () {
      console.log('change!!!');
      if (self.matchMedia('(max-width: 767.98px)').matches) {
        $('.c-navbar').addClass('is-burger');
      } else {
        $('.c-navbar').removeClass('is-burger');
      }
    }, 100);
  });
});

// 滾動至 news 時改變背景顏色
$(function () {
  $(window).scroll(function () {
    if ($('.l-news')[0] !== undefined) {
      let $news = $('.l-news');
      let newsTop = $news.offset().top - 60;
      let newsBottom = $news.offset().top + $news.outerHeight() / 1.4;
      if (this.scrollY > newsTop && this.scrollY < newsBottom) {
        $('body').addClass('is-news-active');
      } else {
        $('body').removeClass('is-news-active');
      }
    }
  });
});

// go top
$(function () {
  let gotop = false;
  $('.o-gotop').click(function () {
    if (gotop === false) {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        300
      );
      gotop = true;
      setTimeout(function () {
        gotop = false;
      }, 1000);
    }
  });
});

/* ----------------------------------- */
/* ------ Plugin ------ */
/* ----------------------------------- */
// $(document).ready(function() {
//   //
// })

$(function () {
  // https://png-pixel.com/
  $('img.js-lazy').attr(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAQAAABHvi1JAAACNUlEQVR42u3TMQEAAAgDINc/mLE0gZ8ndCA9BRwiCAgCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoKAIIKAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAgIIggIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCDwZwF2ixVTTYF0mAAAAABJRU5ErkJggg=='
  );
  let lazyLoadImgs = new LazyLoad({
    elements_selector: 'img.js-lazy',
    // 設定載入距離
    threshold: 500,
    callback_loaded: function () {
      AOS.refresh();
    },
  });

  // gsap
  let shapePath = [
    { d: 'M112.715,18.281,1497.056,197.043,1280.964,806.872,10.731,847.574Z' },
    { d: 'M.892,184.042,1499.634,1.633,1293.258,873.754,90.746,758.554Z' },
    { d: 'M218.751,23.581,1472.309,69.5,1430.2,768,30.486,870.39Z' },
  ];
  function shapeAni(index) {
    gsap.to('#banner-shape', {
      attr: { d: shapePath[index].d },
      duration: 1.6,
      ease: 'power1.out',
    });
  }

  // swiper
  if (new Swiper() !== undefined) {
    let headerSwiper = new Swiper('.l-header__swiper', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      longSwipesRatio: 0.1,
      loop: true,
      speed: 1600,
      autoplay: {
        delay: 3000,
        // 用滑鼠切換後停止自動播放
        disableOnInteraction: false,
      },
      on: {
        slideChange: function () {
          // 因為預設是 0 的形狀
          // let shapeIndex = this.realIndex + 1
          // if (this.realIndex + 1 > 2) shapeIndåex = 0
          // shapeAni(shapeIndex)
          shapeAni(this.realIndex);
        },
      },
    });

    let newsSwiper = new Swiper('.l-news__swiper', {
      longSwipesRatio: 0.1,
      loop: true,
      speed: 1600,
      // 分幾個
      slidesPerView: 1,
      spaceBetween: 4,
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
      on: {
        init: function () {
          lazyLoadImgs.update();
        },
      },
      navigation: {
        prevEl: '.l-news__btn-swiper.--pre',
        nextEl: '.l-news__btn-swiper.--next',
      },
    });
  }
});

// -- Parallax
$(function () {
  let jsParallax = [];
  $('.js-parallax').each(function () {
    jsParallax.push(
      // this 指向 $('.js-parallax')
      new Parallax(this, {
        // 滑鼠進入元素內才生效
        hoverOnly: true,
        // 滑鼠相對於指定元素（預設為可視區）
        relativeInput: true,
      })
    );
  });
});
