$(function () {
  $('#callback-button').click(function (e) {
    e.preventDefault();
    $('#modal-1').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.modal__close-button').click(function (e) {
    e.preventDefault();
    $('#modal-1').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});