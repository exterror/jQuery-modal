$("body").attr("style", "text-align: center; color: grey; font-size: 18px;");

$('.js-btn-modal').on('click', function () {
  $('#overlay').fadeIn(3);
  let id = $(this).data('id');
  $('.js-modal[data-id="modal' + id + '"]').fadeIn(3);
});

$('.js-close-btn').on('click', function () {
  $('#overlay').fadeOut(3);
  $('.js-modal').fadeOut(3);
});
$('#overlay').on('click', function () {
  $('#overlay').fadeOut(3);
  $('.js-modal').fadeOut(3);
});
