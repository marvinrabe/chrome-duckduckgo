
var searchField = document.getElementById("search_form_input");

function getAddButtonFunction(searchQuery) {

    var sideBar = document.getElementById("side");

    function addButton(link, message) {
        var label = chrome.i18n.getMessage(message);
        var searchURL = link + searchQuery;

        var text = document.createTextNode(label);

        // Create link
        var link = document.createElement("a");
        link.className = "button-link";
        link.setAttribute("href", searchURL); 
        link.appendChild(text);

        // Create div
        var element = document.createElement("div");
        element.className = "button fallback_button";
        element.appendChild(link);

        // Prepend div before default DuckDuckGo buttons
        sideBar.insertBefore(element,sideBar.childNodes[0]);

    }

    return addButton;
}

if(undefined != searchField.value) {
    var encodedSearchQuery = encodeURI(searchField.value);
    var addButton = getAddButtonFunction(encodedSearchQuery)
    addButton('https://encrypted.google.com/search?q=', 'google');
}

