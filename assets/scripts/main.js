// Grab each data entry (Date, Train Number, Duty Number)
var dataTitles = document.getElementsByClassName("data-title");
// Grab all the paragraphs accompanying each data entry
var dataContent = document.getElementsByClassName("data-content");

// When you click each data-entry, reveal the corresponding data-content or hide if already showing
function toggleParagraph(event) {
    // Using event allows you to ge the dom element from the context of the click!

    var elementToShow = event.srcElement.parentNode.nextElementSibling;
    if (elementToShow.style.display === "table-row") {
        elementToShow.style.display = "none";
        elementToShow.style.visibility = "hidden";
    } else {
        elementToShow.style.display = "table-row";
        elementToShow.style.visibility = "visible";
    }
}

// When you click each data-entry, reveal the corresponding data-content
for (var i = 0; i < dataTitles.length; i++){
    dataTitles[i].addEventListener("click", toggleParagraph, false);
}


// // On page load, hide the paragraph under each data entry
for (var i = 0; i < dataContent.length; i++ ) {
    dataContent[i].style.display = "none";
    dataContent[i].style.visibility = "hidden";
}
