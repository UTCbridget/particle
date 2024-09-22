(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.tuitioncalculator = {
    attach: function (context, settings) {
      //console.log('tuition js loaded.');

      $('.block.block--utc-tuition-block').css({ 'display':'block!important' });

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
      $(
        '.bef-links[name="field_student_type_value"] ul,.bef-links[name="field_delivery_type_value"] ul'
      ).append('<li class="tuition-placeholder-btn"></li>');
      /*document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector(".block--utc-tuition-block").style.visibility = "hidden";
            document.querySelector(".block-loader").style.visibility = "visible";
        } else {
            document.querySelector(".block-loader").style.display = "none";
            document.querySelector(".block--utc-tuition-block").style.visibility = "visible";
        }
      };*/
    },
  };
})(jQuery, Drupal, drupalSettings);
