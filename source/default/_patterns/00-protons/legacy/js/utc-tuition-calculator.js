(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.tuitioncalculator = {
    attach: function (context, settings) {
      console.log('tuition js loaded.');
      var tuitionForm = document.getElementsByClassName(
        'block--utc-tuition-block'
      );
      if ($(tuitionForm).length > 0) {
        $('body').addClass('tuition-calculator-page');
        $(tuitionForm).each(function () {
          $(this)
            .closest('.themag-layout__region')
            .attr('id', 'tuition-calculator-region');
        });
      }

      var befElement = $('a.bef-link');
      var anyString = '- Any -';
      $(befElement).each(function () {
        var thisElement = $(this);
        var befLink = $(this).text();
        if (befLink.indexOf(anyString) != -1) {
          $(thisElement).parent().remove();
        }
      });
      if ($(tuitionForm).length > 0) {
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
    },
  };
})(jQuery, Drupal, drupalSettings);
