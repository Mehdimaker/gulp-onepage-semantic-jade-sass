$(document).ready(function() {

  // Fix menu when passed
  $('#home')
    .visibility({
      once: false,
      observeChanges: false,
      offset: 50,
      onBottomPassed:  function() {
        $('.navbar.fixed').removeClass('navone');
        $('.navbar.fixed').addClass('navtwo');
        $('.navbar.fixed').removeClass('inverted');
      },
      onBottomPassedReverse: function() {
        $('.navbar.fixed').removeClass('navtwo');
        $('.navbar.fixed').addClass('navone');
        $('.navbar.fixed').addClass('inverted');

        $('.navbar .ui.item').removeClass('active');
        $('.navbar .ui.item.'+this.id).addClass('active');
      }
    });

  // Create sidebar and attach to menu open
  $('.ui.sidebar').sidebar({
    'closable':false    
  });
  $('.toc.item, .sidebar .item').on('click', function() {
    if( $('.ui.sidebar').hasClass("visible") ){
      $('.toc.item').removeClass("open");
      $('.toc.item').addClass("closed");
      $('.ui.sidebar').sidebar('hide');
    }
    else{
      $('.toc.item').removeClass("closed");
      $('.toc.item').addClass("open");
      $('.ui.sidebar').sidebar('show');
    }
  });
  
  // Scrollmovement
  $(function () {
    // Au click sur chaque lien nous ferons apelle à la fonction animate de Jquery
    $('.navbar a.item:not(a.item.toc)').on('click', function (e) {
      e.preventDefault();
      // hash permet de cibler le href de nos liens.
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
      }, 1000, function () {
          window.location.hash = hash;
      });
    });
  });

  //add class active on scroll
  $('section')
    .visibility({
      once: false,
      observeChanges: false,
      offset: 50,
      onTopPassed: function() {
        $('.navbar .ui.item').removeClass('active');
        $('.navbar .ui.item.'+this.id).addClass('active');
         },
      onBottomPassedReverse: function() {
        $('.navbar .ui.item').removeClass('active');
        $('.navbar .ui.item.'+this.id).addClass('active');
      }
  });

  //add class active on click
  $('.sidebar .ui.item').on('click', function() {
    $('.ui.sidebar').sidebar('hide');
  }); 
  
});


