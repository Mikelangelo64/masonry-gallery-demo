$(document).ready(function () {
    let $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        // gutter: 2,
      });

      // $grid.imagesLoaded().progress( function() {
      //   $grid.masonry();
      // });    
})