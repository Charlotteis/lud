// Grab each data entry (Date, Train Number, Duty Number)
var dataTitles = document.getElementsByClassName("data-title");
// Grab all the paragraphs accompanying each data entry
var dataContent = document.getElementsByClassName("data-content");

// Loops over an array of elements and adds an event handler
function addHandlerToArray(elements, fnc, handler) {
    for (var i = 0; i < elements.length; i++){
        elements[i].addEventListener(handler, fnc, false);
    }
}

// When you click each data-entry, reveal the corresponding data-content or hide if already showing.
function toggleParagraph(event) {
    // Using event allows you to ge the dom element from the context of the click!

    // Here we are setting aria-expanded to true/false. This interacts with the tr[aria-expanded=true] && tr[aria-expanded=false] CSS properties to hide or show the element.
    var elementToShow = event.srcElement.parentNode.nextElementSibling;
    if (elementToShow.getAttribute("aria-expanded") === "true") {

        elementToShow.setAttribute("aria-expanded", false);

    } else if (elementToShow.getAttribute("aria-expanded") === "false") {

        elementToShow.setAttribute("aria-expanded", true);
    }
}

// Add the "click" event to all data-titles, firing the toggleParagraph function
addHandlerToArray(dataTitles, toggleParagraph, "click");
