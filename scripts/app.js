
//adias code//1. need to locate where the handlebars is on the html 2. we have to take that
//source and create a template from html handlebars//must do once//
//next step- pass data you want to display into the template//last step//
//append new data w template in it onto the page//

$(document).ready(function(){
  var counter = 0;
  var source = $('#eta-students').html();//variable that tells where handlebars is
  var template = Handlebars.compile(source);//creates template from source//moving it so we dont have to keep calling it//

  function callData () {
  $.ajax({
    url: '/data/eta.json'
  }).done(function(data){
    // var source = $('#eta-students').html();//variable that tells where handlebars is
    // var template = Handlebars.compile(source); //creates template from source
    var passData = template(data.eta[counter]);
    $('.main').html(passData);
    etaArray = data.eta;
  });
}
callData();//the moment the page loads we calll the data
$('.foward').on('click', function(){
  counter++;
  if(counter > 20){
    counter = 0;
  }
  callData();
});
$('.back').on('click', function(){
  counter--;
  if(counter < 0){
    counter = 20;
  }
  callData();
})
});
// handle bar set up
//
// #each takes object, looks for favorite movies.
// does that over everything in each block
