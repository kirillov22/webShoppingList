$('.boughtCheck').click(function() {
  if ($(this).prop('checked')) {
    $(this).closest('tr').addClass('bought');
  } else {
    $(this).closest('tr').removeClass('bought');
  }
});
