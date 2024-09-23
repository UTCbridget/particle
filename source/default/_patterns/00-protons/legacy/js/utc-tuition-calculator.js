(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.tuitioncalculator = {
    attach: function (context, settings) {
      //console.log('tuition js loaded.');

      var tuitionForm = document.getElementsByClassName(
        'block--utc-tuition-block'
      );

      var something = (function () {
        var executed = false;
        return function () {
          if (!executed) {
            executed = true;
            $('.bef-links[name="field_student_type_value"] ul').append(
              '<li class="tuition-placeholder-btn"></li>'
            );
          }
        };
      })();

      something(); // "do something" happens
      something(); // nothing happens

      if ($(tuitionForm).length > 0) {
        $('.block--utc-tuition-block').addClass('block');

        $('body').addClass('tuition-calculator-page');
        $(tuitionForm).each(function () {
          $(this)
            .closest('.themag-layout__region')
            .attr('id', 'tuition-calculator-region');
        });

        var befElement = $('a.bef-link');
        var anyString = '- Any -';
        $(befElement).each(function () {
          var thisElement = $(this);
          var befLink = $(this).text();
          if (befLink.indexOf(anyString) != -1) {
            $(thisElement).parent().remove();
          }
        });

        $('.form-item-field-student-type-value a').on('click', function () {
          $('#tuition-calculator-region').addClass('selection-1-true');
          $(this).addClass('option-selected');
        });

        $('.form-item-field-delivery-type-value a').on('click', function () {
          $('#tuition-calculator-region').addClass('selection-2-true');
          $(this).addClass('option-selected');
        });

        $('.form-item-field-residency-type-value a').on('click', function () {
          $('#tuition-calculator-region').addClass('selection-3-true');
          $(this).addClass('option-selected');
        });
      }
      var addBtnPlaceholder = (function () {
        var executed = false;
        return function () {
          if (!executed) {
            executed = true;
            $('.bef-links[name="field_student_type_value"] ul,.bef-links[name="field_delivery_type_value"] ul').append(
              '<li class="tuition-placeholder-btn"></li>'
            );
          }
        };
      })();
      if ($('body').hasClass('tuition-calculator-page')){
        addBtnPlaceholder(); // "do something" happens
        //addBtnPlaceholder(); // nothing happens
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
