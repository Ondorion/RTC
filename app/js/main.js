$(function () {

  $('.menu__burger').on('click', function () {
    $(this).toggleClass('menu__burger--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.reviews__tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.reviews__tabs__top-item').removeClass('reviews__tabs__top-item--active');
    $(this).addClass('reviews__tabs__top-item--active');
    $('.reviews__tabs-content__item').removeClass('reviews__tabs-content__item--active');
    $($(this).attr('href')).addClass('reviews__tabs-content__item--active');
  });
});

//Слайдеры

$(function () {

  var $carousel;
  var $slickCache;
  var previousFilter = '';
  var currentFilter = 'all';
  var filtered = 'false';

  $('.news__filbtn').on('click', function (event) {
    $(".news__filbtn").removeClass("active");
    $(this).addClass("active");
    console.log(this, event.currentTarget.value);
    filterHandler(event.currentTarget.value);
  });

  /**
   * Filter function for carousel
   * @param  {String} [tag=''] filter string to be applied
   */
  filterHandler = function (tag) {
    var query = '[data-tags*="' + tag + '"]';
    var slick = $carousel[0].slick;

    // Removes filter state if cache is active ( indicates a filter is applied).
    // Work around for https://github.com/kenwheeler/slick/issues/3161
    if (slick.$slidesCache !== null) {
      slick.unload();
      slick.$slideTrack.children(slick.options.slide).remove();
      $slickCache.appendTo(slick.$slideTrack);
      slick.reinit();
      slick.goTo(0);
    }

    // Store a deep copy of the original carousel
    $slickCache = slick.$slides.clone(true, true);

    // Store the previous filter for reference
    previousFilter = currentFilter;

    // If the filter is being removed
    if (tag === '' || tag === 'all') {

      // Store useful properties. Log
      filtered = false;
      currentFilter = '';

      // A filter is being applied
    } else {
      // Pass custom function to slick to query UI for our target
      slick.filterSlides(function (index, element) {
        return $(element).find(query).length > 0;
      });

      // Reset slider position
      slick.goTo(0);

      // Store useful properties.
      filtered = true;
      currentFilter = tag;
    }

    return currentFilter;
  }



  /*----------  Carousel Slick ----------*/
  $carousel = $('.news-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: "<img src='images/arrow-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='images/arrow-right.svg' class='next' alt='2'>",
    infinite: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 1002,
        settings: {
          arrows: false
        },
      },
      {
        breakpoint: 755,
        settings: {
          arrows: false,
          variableWidth: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 710,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
      {
        breakpoint: 385,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  });


  var $carousel1;
  var $slickCache1;
  var previousFilter1 = '';
  var currentFilter1 = 'all';
  var filtered1 = 'false';

  $('.marks__filbtn').on('click', function (e) {

    $(".marks__filbtn").removeClass("active");
    $(this).addClass("active");
    console.log(this, e.currentTarget.value);
    filterHandler1(e.currentTarget.value);
  });

  /**
   * Filter function for carousel
   * @param  {String} [tag=''] filter string to be applied
   */
  filterHandler1 = function (tag) {
    var query1 = '[data-tags*="' + tag + '"]';
    var slick1 = $carousel1[0].slick;


    // Removes filter state if cache is active ( indicates a filter is applied).
    // Work around for https://github.com/kenwheeler/slick/issues/3161
    if (slick1.$slidesCache !== null) {
      console.log(slick1);

      slick1.unload();
      console.log(slick1);
      slick1.$slideTrack.children(slick1.options.slide).remove();
      $slickCache1.appendTo(slick1.$slideTrack);
      slick1.reinit();
      slick1.goTo(0);
    }

    // Store a deep copy of the original carousel
    $slickCache1 = slick1.$slides.clone(true, true);

    // Store the previous filter for reference
    previousFilter1 = currentFilter1;

    // If the filter is being removed
    if (tag === '' || tag === 'all') {

      // Store useful properties. Log
      filtered1 = false;
      currentFilter1 = '';

      // A filter is being applied
    } else {
      // Pass custom function to slick to query UI for our target
      slick1.filterSlides(function (index, element) {
        return $(element).find(query1).length > 0;
      });

      // Reset slider position
      slick1.goTo(0);

      // Store useful properties.
      filtered1 = true;
      currentFilter1 = tag;
    }

    return currentFilter1;
  };



  /*----------  Carousel Slick ----------*/
  $carousel1 = $('.marks-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='images/arrow-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='images/arrow-right.svg' class='next' alt='2'>",
    variableWidth: true,
    infinite: false,
    centerMode: false,
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: false
        },
      },
      {
        breakpoint: 385,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  });


});

// Конец jQuery кода

//Интерактив этажей

const buildInner = document.querySelector('.plan-tabs-stage__build-img');
const imgPaths = document.querySelectorAll('path[data-path]');
const floorBtns = document.querySelectorAll('button[data-numFloorBtn]');


imgPaths.forEach(element => element.addEventListener('mouseover', mouseOveringImg));
imgPaths.forEach(element => element.addEventListener('mouseout', mouseOutingImg));
imgPaths.forEach(element => element.addEventListener('click', clickOnPathImg));

floorBtns.forEach(element => element.addEventListener('mouseover', mouseOveringBtn));
floorBtns.forEach(element => element.addEventListener('mouseout', mouseOutingBtn));
floorBtns.forEach(element => element.addEventListener('click', clickOnSpan));


function clickOnPathImg(e) { 
  imgPaths.forEach(element => element.addEventListener('mouseout', mouseOutingImg));
  imgPaths.forEach(el => {
    el.classList.remove('plan-tabs-stage__path--active');
  });
  document.querySelectorAll(`span[data-numFloor]`).forEach(el => {
    el.classList.remove('plan-tabs-stage__build-span--active');
  });

  const dataOver = e.target.getAttribute('data-path');
  const spanNum = document.querySelector(`span[data-numFloor="${dataOver}"]`);
  spanNum.classList.add('plan-tabs-stage__build-span--active');
  e.target.classList.add('plan-tabs-stage__path--active');
  e.target.removeEventListener('mouseout', mouseOutingImg);
  // document.querySelector(`button[data-numFloorBtn="${dataOver}"]`).style.background='transparent';

  console.log(document.querySelectorAll('button[data-numFloorBtn]:not(.floor-plan-tabs__btn--active)'));
  
  document.querySelectorAll('button[data-numFloorBtn]').forEach(element => {
    element.style.background = '#f8f8f8';
  })
  

  document.querySelectorAll(`button[data-numFloorBtn]`).forEach(element => {
    element.classList.remove('floor-plan-tabs__btn--active');
  });
  document.querySelector(`button[data-numFloorBtn="${dataOver}"]`).style.background = '#FFC700';
  document.querySelector(`button[data-numFloorBtn="${dataOver}"]`).classList.add('floor-plan-tabs__btn--active');
}

function mouseOutingImg(e) {
  const dataOver = e.target.getAttribute('data-path');
  const spanNum = document.querySelector(`span[data-numFloor="${dataOver}"]`);
  spanNum.classList.remove('plan-tabs-stage__build-span--active');
  e.target.style.opacity = '0';
  document.querySelector(`button[data-numFloorBtn="${dataOver}"]`).style.background='#f8f8f8';
}

function mouseOveringImg(e) {
  imgPaths.forEach(element => element.addEventListener('mouseout', mouseOutingImg));
  if (e.target.classList.contains('plan-tabs-stage__path--active')) {
    e.target.removeEventListener('mouseout', mouseOutingImg);
  }
  const dataOver = e.target.getAttribute('data-path');
  const spanNum = document.querySelector(`span[data-numFloor="${dataOver}"]`);
  spanNum.classList.add('plan-tabs-stage__build-span--active');
  document.querySelectorAll(`path[data-path]`).forEach(element => {
    element.style.opacity = '';
  });
  e.target.style.opacity = '0.7';
  document.querySelector(`button[data-numFloorBtn="${dataOver}"]`).style.background='#FFC700';
  
}

function mouseOveringBtn(element) {
  imgPaths.forEach(element => {
    element.addEventListener('mouseout', mouseOutingBtn);
  });
  floorBtns.forEach(element => element.addEventListener('mouseout', mouseOutingBtn));
  element.target.style.background='#FFC700';
  const atttibBtn = element.target.getAttribute('data-numFloorBtn');
  const pathNum = document.querySelector(`path[data-path="${atttibBtn}"]`);
  if (pathNum.classList.contains('plan-tabs-stage__path--active')) {
    element.target.removeEventListener('mouseout', mouseOutingBtn);
    console.log('nnh');
  } else {
    pathNum.style.opacity = '0.7';
  }
  
  const spanNum = document.querySelector(`span[data-numFloor="${atttibBtn}"]`);
  spanNum.classList.add('plan-tabs-stage__build-span--active');
}

function mouseOutingBtn(element) {
  element.target.style.background='';
  if (!element.target.classList.contains('floor-plan-tabs__btn--active')) {
    element.target.style.background='#f8f8f8';
  } 
  const atttibBtn = element.target.getAttribute('data-numFloorBtn');
  const pathNum = document.querySelector(`path[data-path="${atttibBtn}"]`);
  pathNum.style.opacity = '0';
  const spanNum = document.querySelector(`span[data-numFloor="${atttibBtn}"]`);
  spanNum.classList.remove('plan-tabs-stage__build-span--active');
}

function clickOnSpan(element) {
  floorBtns.forEach(element => element.style.background='');

  floorBtns.forEach(element => element.classList.remove('floor-plan-tabs__btn--active'));
  element.target.classList.add('floor-plan-tabs__btn--active');
  element.target.removeEventListener('mouseout', mouseOutingBtn);
  const atttibBtn = element.target.getAttribute('data-numFloorBtn');

  document.querySelectorAll(`span[data-numFloor]`).forEach(element => {
    element.classList.remove('plan-tabs-stage__build-span--active')
  });

  const spanNum = document.querySelector(`span[data-numFloor="${atttibBtn}"]`);
  spanNum.style.opacity = '';
  spanNum.style.visibility = '';
  spanNum.classList.add('plan-tabs-stage__build-span--active');


  document.querySelectorAll(`path[data-path]`).forEach(element => {
    element.classList.remove('plan-tabs-stage__path--active');
  });

  const pathNum = document.querySelector(`path[data-path="${atttibBtn}"]`);
  pathNum.style.opacity = '';
  pathNum.classList.add('plan-tabs-stage__path--active');

  // const spanNum = document.querySelector(`span[data-numFloor="${atttibBtn}"]`);
  // spanNum.style.opacity = '1';
  // spanNum.style.visibility = 'visible';
}


//Табы

const clickFlats = document.querySelectorAll('path[data-flat]');
const tabArea = document.querySelector('.modal-floor');
const tabAreaInner = document.querySelector('.modal-floor__inner');
const closeTabbtn = document.querySelector('.modal-floor__close-btn img');

console.log(clickFlats);

clickFlats.forEach(el => {
  el.addEventListener('click', (e) => {
    console.log(tabArea);
    
    tabArea.classList.add('is-open');
  })
});


if(tabArea !== null) {
  tabArea.addEventListener('click', clickOnTab);
}

function clickOnTab(e) {
  console.log(e.target);
  
  if(e.target === closeTabbtn || !e.target.closest('.modal-floor__inner')) {
    tabArea.classList.remove('is-open');
  }
}

//Главные табы страницы stage

const tabsVisial = document.querySelectorAll('.tabs-stage__btn');
const tabsItems = document.querySelectorAll('.tabs-stage__item');

tabsVisial.forEach((btn, i) => {
  btn.addEventListener('click', (e)=> {

    tabsVisial.forEach(el => {
      el.classList.remove('tabs-stage__btn--active');
    });

    tabsItems.forEach(el => {
      el.classList.remove('tabs-stage__item--active');
    });

    e.target.classList.add('tabs-stage__btn--active')
    tabsItems[i].classList.add('tabs-stage__item--active');
  })
});






//Прокрутка вниз

$('.header-content__bottom-left a').on('click', function () {

  let href = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 370, // по умолчанию «400» 
    easing: "linear" // по умолчанию «swing» 
  });

  return false;
});





//динамический адаптив

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();

// data-da=".селектор, разрешение, место"