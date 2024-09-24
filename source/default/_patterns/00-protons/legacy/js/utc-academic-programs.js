(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.academicprograms = {
    attach: function (context, settings) {
      //console.log("utc-academic-programs.js is loaded.")

      if (window.location.href.indexOf('degrees-and-programs') > -1) {
        $('body').addClass('utc-programs-page').addClass('modal-programs-video-window');
      }
      var programBlock = document.getElementsByClassName('utc-programs-block');
      if ($(programBlock).length > 0) {
        $('body').addClass('utc-programs-page').addClass('programs-block-present');
      }
      $(window).scroll(function () {
        if ($(this).scrollTop() > 925) {
          $('.program-table thead').addClass('scrolled');
        } else {
          $('.program-table thead').removeClass('scrolled');
        }
      });
      var programHeadline = $(
        '.utc-programs-page .program-page-title-and-crumbs'
      );
      var programOverlay = $('.utc-programs-page .program-overlay');

      $(programOverlay).css({ 'z-index': '-1', opacity: '.75' });

      function ghostMainContent() {
        $(programHeadline).css('opacity', '.25');
        $(programOverlay).css('z-index', '2');
        $('.page-footer').css('z-index', '3');
        $('.utcpage-title').css('z-index', '1');
      }
      function unghostMainContent() {
        $(programHeadline).css('opacity', '1');
        $(programOverlay).css('z-index', '-1');
        $('.page-footer').css('z-index', 'unset');
        $('.utcpage-title').css('z-index', '5');
      }
      function togglediv(getProgramBtnDetailId) {
        $('.offscreen-program-details').each(function () {
          var detailId = $(this).attr('id');
          if (detailId == getProgramBtnDetailId) {
            $('.offscreen-program-details')
              .css('right', '-650px')
              .removeClass('detail-open');
            $(this).css('right', '0').addClass('detail-open');
          }
          ghostMainContent();
        });
      }
      $('.program-btn').each(function () {
        var getProgramBtnDetailId = $(this).attr('data-src');
        $(this).on('click', function () {
          togglediv(getProgramBtnDetailId);
          //console.log('program open btn clicked.');
        });
      });
      $('.close-btn').each(function () {
        var parentId = $(this).closest('.offscreen-program-details').attr('id');
        $(this).on('click', function () {
          $('#' + parentId).css('right', '-650px');
          unghostMainContent();
          //console.log('program close btn clicked.');
        });
      });
      $(document).mouseup(function (e) {
        if ($(e.target).closest('.offscreen-program-details').length === 0) {
          $('.offscreen-program-details').css('right', '-650px');
          unghostMainContent();
        }
      });
      $('.utc-programs-page').each(function () {
        $(this)
          .find('.offscreen-program-details')
          .wrapAll("<div class='program-window'></div>");
      });

      if ($('body').hasClass('modal-programs-video-window')){
        var modalVideoWindow = document.getElementById('dp-modal');
        var modalVideoBtn = document.getElementById('dp-modal-button');
        var modalVideoCloseBtn = document.getElementsByClassName('close-modal')[0];
        modalVideoBtn.onclick = function () {
          modalVideoWindow.style.display = 'flex';
          //console.log('video modal link clicked.');
        };
        modalVideoCloseBtn.onclick = function () {
          modalVideoWindow.style.display = 'none';
          //console.log('video modal close btn clicked.')
        };
        window.onclick = function (event) {
          if (event.target == modalVideoWindow) {
            modalVideoWindow.style.display = 'none';
          }
        };
      }

    },
  };
})(jQuery, Drupal, drupalSettings);
