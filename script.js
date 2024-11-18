// Example jQuery for smooth scrolling between sections
$(document).ready(function() {
    $("nav a").click(function(event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
