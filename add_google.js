
$(document).ready(function () {
	var search = $("#search_form_input").val();

	if(search != undefined) {
		$('#side div:first').prepend('<a href="https://encrypted.google.com/search?q=' + encodeURI(search) + '" target="_blank">Google it!</a><br>');
	}
});

