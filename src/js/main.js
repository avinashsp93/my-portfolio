// Scroll to events on click of nav buttons

$("#anchor-home span").click(function() {
    console.log($("#skills").offset());
    $('html, body').animate(
        {scrollTop: 0}, 1500
    )
});

$("#anchor-skills span").click(function() {
    console.log($("#skills").offset());
    $('html, body').animate(
        {scrollTop: $("#skills").offset().top}, 1500
    )
});

$("#anchor-projects span").click(function() {
    console.log($("#projects").offset());
    $('html, body').animate(
        {scrollTop: $("#projects").offset().top}, 1500
    )
});

$("#anchor-activities span").click(function() {
    console.log($("#activities").offset());
    $('html, body').animate(
        {scrollTop: $("#activities").offset().top}, 1500
    )
});
