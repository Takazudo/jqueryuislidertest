$(function(){

  $('#slider')
    .slider({
      animate: true,
      min: -10,
      max: 20,
      step: 0.5,
      value: 10
    })
    .on('slide', function(e, ui) {
      console.log(ui.value);
    });

  $('#slider2')
    .slider({
      animate: true,
      min: -10,
      max: 20,
      step: 0.5,
      value: 10,
      orientation: 'vertical'
    });

});
