
function getButtonFunction() {

    var sideBar = document.getElementById("duckbar_static");
    var searchField = document.getElementById("search_form_input");

    // Return undefined if there is no search field or side bar
    if (undefined == searchField || undefined == sideBar) {
        return undefined;
    }

    var searchQuery = encodeURI(searchField.value);

    return function(link, message) {
        var label = chrome.i18n.getMessage(message);
        var searchURL = link + searchQuery;

        var text = document.createTextNode(label);

        // Create link
        var link = document.createElement("a");
        link.className = "zcm__link";
        link.setAttribute("href", searchURL); 
        link.appendChild(text);

        // Create div
        var element = document.createElement("li");
        element.className = "zcm__item";
        element.appendChild(link);

        // Append li to duckbar
        sideBar.appendChild(element);
    }
}

var addButton = getButtonFunction();

if(undefined != addButton) {
    addButton('https://encrypted.google.com/search?q=', 'google');
}

