window.Wrapli= Ember.Application.create();
Wrapli.ApplicationAdapter = DS.FixtureAdapter;

$(document).ready(function () {
  $(document).on('click', '[data-toggle=offcanvas], #sidebar', function () {
    $('.row-offcanvas').toggleClass('active')
  });
  setTimeout(function() { $('.row-offcanvas').toggleClass('active') }, 100);
});

