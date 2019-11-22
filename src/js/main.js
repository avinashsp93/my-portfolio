$("#anchor-skills span").click(function() {
    console.log('click')
    $('html, body').animate(
        {scrollTop: $("#skills").offset().top}, 500
    )
});