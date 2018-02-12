$(document).ready(function(){
let hoveringOn = null;

const throttledOnHover = _.debounce(function() {

  hoveringOn = this;
  
  console.log('hoveringOn', hoveringOn);

  // disable animation for making divs smaller
  const $others = $(this).siblings();
  $others.addClass('disable-transition');
  $(this).parent().find('.box').removeClass('large');
  setTimeout(() => $(this).parent().find('.box').removeClass('disable-transition'));
  
  // make this one bigger
  $(this).addClass('large');
  
}, 333);


$('.box').hover(throttledOnHover);
})