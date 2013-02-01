
var button_id = 0;

function addButton(link, label) {
    $('#side').prepend('<div class="button ddf' + button_id + '"><span class="trig_search"></span><a href="' + link + '" class="button-link">' + label + '</a></div>');
    $('.ddf' + button_id).bind('click', function() {
        location.href = link;
    });
    button_id += 1;
}

var search = $("#search_form_input").val();

if(search != undefined) {
    var encodedSearch = encodeURI(search);
    addButton('https://encrypted.google.com/search?q=' + encodedSearch, 'Search on Google');
}

