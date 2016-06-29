$(document).ready(function() {
  console.log('Hello World, the script.js file works');
   $('select').material_select();
   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});