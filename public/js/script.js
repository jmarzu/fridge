$(document).ready(function() {
  console.log('Hello World, the script.js file works');
   $('select').material_select();
   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

   $('.deleteBtn').on('click', function(e) {
    e.preventDefault();
    var that = this;
    var url = $(this).attr('action');
    var id = $(this).parent()[0].children[1].value;

    $.ajax({
      method: 'DELETE',
      url: url + id,
      success: function(response) {
        console.log('delete success');
        $(that).parent().remove();
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log('delete error');
      }
    });
  });

   $('.deleteList').on('click', function(e) {
    e.preventDefault();
    var that = this;
    var url = $(this).attr('action');
    var id = $(this).parent()[0].children[2].value;
    console.log(id);

    $.ajax({
      method: 'DELETE',
      url: url + id,
      success: function(response) {
        console.log('delete success');
        $(that).parent().remove();
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log('delete error');
      }
    });
  });
});