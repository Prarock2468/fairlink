var segments = []
$('[data-segment]').each(function() {
  var segment = $(this).data('segment'),
      top = $(this).offset().top
  $('[data-target-segment='+segment+']').click(function() {
    $(window).scrollTop(top)
  })
  segments.push({
    name: segment,
    top: top - $(this).height() / 2
  })
})

$(window).scroll(function (e) {
  var currentScrollTop = $(this).scrollTop()
  var scrollDistance = 600;
  for(let i = 0, len = segments.length ; i < len ; i++) {
    var matchSegments = segments.filter(function(segment) {
      return currentScrollTop > segment.top
    })
    if(matchSegments.length) {
      var first = matchSegments[matchSegments.length - 1]
      $('[data-target-segment]').removeClass('activeScroll')
      $('[data-target-segment='+first.name+']').addClass('activeScroll')
    }
  }

  if ($(this).scrollTop() >= scrollDistance) {
    $('.scroll_nav_wrapper').addClass('scrolled');
} else {
    $('.scroll_nav_wrapper').removeClass('scrolled');
}
});

