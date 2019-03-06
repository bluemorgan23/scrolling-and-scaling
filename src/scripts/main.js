const audrey = document.getElementById("audrey");
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let widthAdjustment = (1/3) * window.scrollY;
    audrey.style.width = `${widthAdjustment}px`;
    audrey.style.minWidth = "50px";

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
    let heightAdjustment = (1/4) * window.scrollY;
    audrey.style.height = `${heightAdjustment}px`;
    audrey.style.minHeight = "100px";

})