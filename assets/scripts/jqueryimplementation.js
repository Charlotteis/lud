// On page load, hide all elements with the class "content"

// When I click on an element with the class "click", toggle the element immediately after it. In jQuery, toggle either hides or shows the element depending on its current state.
$(".data-title").click(function(){
    if ($(this).next().attr("aria-expanded") === "false") {
        $(this).next().attr({"aria-expanded" : true});
        console.log("changing");
    } else if ($(this).next().attr("aria-expanded") === "true") {
        $(this).next().attr({"aria-expanded" : false});
        console.log("changing2");
    }
});
