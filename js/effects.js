$( document ).ready(function() {
  console.log( 'ready!' );
  console.log($('nav').attr('id'));

  // toggling overlay for mobile
  $('#toggle-overlay').click(function() {
    if ($('nav').attr('id') == 'nav' ) {
      $('nav').attr('id', 'overlay');
    } else {
      $('nav').attr('id', 'nav');
    }
  });
});