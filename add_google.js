
var button_id = 0;

function addButton(link, message) {
    var label = chrome.i18n.getMessage(message);
    $('#side').prepend('<div class="button ddf' + button_id + '"><span class="trig_search"></span><a href="' + link + '" class="button-link">' + label + '</a></div>');
    $('.ddf' + button_id).bind('click', function() {
        location.href = link;
    });
    button_id += 1;
}

var searchQuery = $("#search_form_input").val();

if(searchQuery != undefined) {
    var encodedSearchQuery = encodeURI(searchQuery);
    addButton('https://encrypted.google.com/search?q=' + encodedSearchQuery, 'google');
}

