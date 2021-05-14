$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});


// 問い合わせmodal
$(function() {
    $('#exampleModal').on('show.bs.modal', function () {
      var name = $('#form-name').val()
      var email = $('#form-email').val()
      var subject = $('#form-subject').val()
      var content = $('#form-content').val()
      var modal = $(this)
      modal.find('#modal-name').text(name)
      modal.find('#modal-email').text(email)
      modal.find('#modal-subject').text(subject)
      modal.find('#modal-content').text(content)
    })
  });
