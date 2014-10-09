// On page load, hide all elements with the class "content"

$(".data-content").hide();

// When I click on an element with the class "click", toggle the element immediately after it. In jQuery, toggle either hides or shows the element depending on its current state.
$(".data-title").click(function(){
  $(this).next().toggle();
})
