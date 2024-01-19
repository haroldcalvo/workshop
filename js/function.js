function Artworks(){
    document.querySelector('#Skills').classList.toggle('ChangeArtworks');
}
$('.scroll-link').on('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the anchor link

    var target = $(this).data('target'); // Get the target section from the data-target attribute
    var $targetSection = $('#' + target);

    if ($targetSection.length) {
        // Scroll to the section smoothly using scrollIntoView
        $targetSection[0].scrollIntoView({
            behavior: 'smooth'
        });
    }
});