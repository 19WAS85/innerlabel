/*
 * Inner Label 0.1
 * Copyright (c) 2009 Wagner Andrade (http://wagnerandrade.com).
 * Licensed under the Creative Commons Attribution-Noncommercial 3.0 (http://creativecommons.org/licenses/by-nc/3.0/).
 */
(function($) {
  
  $.fn.innerLabel = function(options) {
    
    // Default options.
    var defaults = { labelColor: '#AAA', foreColor: '#000' }
    
    // Merge default into options.
    settings = $.extend(defaults, options);
    
    // Iterate each selected input.
    return this.each(function() {
      
      // Create a var for selected input.
      var input = $(this)
      
      // Get title attribute for be the label.
      var label = input.attr('title')
      
      // Set label in blanks inputs.
      if(label != null && input.val() == '') {
        input.css('color', settings['labelColor'])
        input.val(label)
      }
      
      // Remove label on focus.
      input.focus(function() {
        if(input.val() == label) {
          input.val('')
          input.css('color', settings['foreColor'])
        }
      })
      
      // Reset label on focus if input is blank.
      input.blur(function() {
        if(label != null && input.val() == '') {
          input.css('color', settings['labelColor'])
          input.val(label)
        }
      })
      
    })
    
  }
  
})($)