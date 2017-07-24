//var realoadThumb = jQuery(function() {
jQuery(function() {
    $(".thumb").click(function(){
        var id = $(this).attr('id');
        var res = id.substr(1, 1);
        var cid = '#input-'+id.substr(3);
        $( cid ).val( res );
    });

    jQuery('[data-thumb-rating]').each(function(index, element) {
        element = $(element);
        var data = element.data('thumb-rating'),
            options = jQuery.extend(data.options, {
                callback: function(element) {
                    $.post(data.uri, { id: data.id, type: $('#input-'+data.id).val() })
                    .done(function() {
                        var type = $('#input-'+data.id).val()
                        var existsIp = 't'+type+'-'+data.id;
                        if ( !$( '#'+existsIp ).hasClass( "true" ) ) {
                            var id = 'thumb'+type+'-count-'+data.id;
                            var number = $( '#'+id ).text();
                            number++;
                            $( '#'+id ).text(number);
                            console.log('success');
                        }
                    })
                    .fail(function() {
                        console.log('fail');
                    });
                }
            });
        element.thumbRating(options);
    });

});
