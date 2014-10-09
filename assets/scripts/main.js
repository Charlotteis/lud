// Grab each data entry (Date, Train Number, Duty Number)
var dataTitles = document.getElementsByClassName("data-title");
// Grab all the paragraphs accompanying each data entry
var dataContent = document.getElementsByClassName("data-content");

// Loops over an array of elements (most likely a classList) and hides them
function hideElements(elements) {
    for (var i = 0; i < elements.length; i++ ) {
        elements[i].style.display = "none";
        elements[i].style.visibility = "hidden";
    }
}

// Loops over an array of elements and adds an event handler
function addHandlerToArray(elements, fnc, handler) {
    for (var i = 0; i < elements.length; i++){
        elements[i].addEventListener(handler, fnc, false);
    }
}

// When you click each data-entry, reveal the corresponding data-content or hide if already showing
function toggleParagraph(event) {
    // Using event allows you to ge the dom element from the context of the click!

    var elementToShow = event.srcElement.parentNode.nextElementSibling;
    if (elementToShow.style.display === "table-row") {
        elementToShow.style.display = "none";
        elementToShow.style.visibility = "hidden";
    } else {
        elementToShow.style.display = "table-row";
        elementToShow.style.visibility = "visible"; aaaa
    }
}

// On page load, hide the paragraph under each data entry
hideElements(dataContent);
// Add the "click" event to all data-titles, firing the toggleParagraph function
addHandlerToArray(dataTitles, toggleParagraph, "click");
