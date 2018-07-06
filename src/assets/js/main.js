$(window).on("load", function(){

  // navigation menu
  $(".nav-link").click( function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  })

  //hide hints on input fields
  $('input').on('focus', function() {
              $(this).siblings('.placeholder').hide();
            })
            .on('blur', function() {
              if ( !$(this).val() )
                $(this).siblings('.placeholder').show();
            });
  //hide hint on select field
  $('select').on('focus', function() {
                $(this).siblings('.placeholder').hide();
              })
              .on('blur', function() {
                if ( !$(this).val() )
                $(this).siblings('.placeholder').show();
              });
  //hide hint on textarea field
  $('textarea').on('focus', function() {
                $(this).siblings('.placeholder').hide();
              })
              .on('blur', function() {
                if ( !$(this).val() )
                $(this).siblings('.placeholder').show();
              });
});
