// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import $ from "jquery";
// window.jQuery = $;
// window.$ = $;
import "slick-carousel";
import "./jStarbox/jstarbox.js";

document.addEventListener('DOMContentLoaded', () => {

  const navHeader = document.querySelector('.header__nav'),
    navBtnBurger = document.querySelector('.header__burger'),
    background = document.querySelector('._background'),
    btnSearch = document.querySelector('.btn_search'),
    showQuestion = document.querySelectorAll('.questions__item'),
    body = document.querySelector('body'),
    scrollUp = document.querySelector('.footer__scroll-top'),
    btnSearchHeader = document.querySelector('.header__search'),
    modalSearch = document.querySelector('.modal-search'),
    btnTags = document.querySelector('#tags'),
    servicesCategory = document.querySelector('.services__category'),
    closeCategory = document.querySelector('.header__close-category')

  navBtnBurger.addEventListener('click', () => {
    navHeader.classList.toggle('active')
    navBtnBurger.classList.toggle('active')
    background.classList.toggle('active')
    body.classList.toggle('_overflow-hidden')
  })

  background.addEventListener('click', () => {
    navHeader.classList.remove('active')
    navBtnBurger.classList.remove('active')
    background.classList.remove('active')
    body.classList.remove('_overflow-hidden')
  })

  if (btnSearchHeader !== null) {
    btnSearchHeader.addEventListener('click', () => {
      modalSearch.classList.toggle('active')
      body.classList.toggle('_overflow-hidden')
      btnSearchHeader.classList.toggle('active')
    })
  }

  if (btnTags !== null) {
    btnTags.addEventListener('click', () => {
      servicesCategory.classList.toggle('active')
      body.classList.toggle('_overflow-hidden')
      closeCategory.classList.toggle('active')
      closeCategory.addEventListener('click', () => {
        servicesCategory.classList.remove('active')
        closeCategory.classList.remove('active')
        body.classList.remove('_overflow-hidden')
      })
    })
  }

  showQuestion.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
    })
  })

  // scroll-up
  $(scrollUp).click(() => {
    $('html, body').animate({
      scrollTop: 0
    }, 0)
  })

  if (btnSearch !== null) {
    function changeBtnSearch() {
      if($(window).width() <= 640) {
        btnSearch.classList.add('mobile-search-btn')
      }
    }

    changeBtnSearch();

    $(window).resize(function() {
      changeBtnSearch();
    });
  }

  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });



  $('.select').each(function() {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 0;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:selected').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
      class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function() {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text( $(this).find('span').text() );

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });


  if ($('.questions__list').length !== 0) {
    const msnry = new Masonry( '.questions__list', {
      columnWidth: 540,
      itemSelector: '.questions__item',
      gutter: 40
    });

    $('.questions__item').on('click', () => {
      const msnry = new Masonry( '.questions__list', {
        columnWidth: 540,
        itemSelector: '.questions__item',
        gutter: 40
      });
    })
  }

})
