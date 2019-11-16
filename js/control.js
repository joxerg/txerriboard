var web = false;
var bai = false;
var img = false;
var yt = false;
var fa = false;

function ytmode() {

    yt = true;
    img = false;
	bai = false;
    web = false;
	fa = false;
    document.getElementsByName('searchbox')[0].placeholder = 'youtube';
    document.getElementById("srch");
    document.title = "YouTube";

}

function baimode() {

    bai = true;
	yt = false;
    img = false;
    web = false;
	fa = false;
    document.getElementsByName('searchbox')[0].placeholder = 'baietz lehenengoan!';
    document.getElementById("srch");
    document.title = "Baietz lehenengoan!";

}

function famode() {

    fa = true;
	yt = false;
	bai = false;
    img = false;
    web = false;
    document.getElementsByName('searchbox')[0].placeholder = 'film affinity';
    document.getElementById("srch");
    document.title = "Film affinity";

}

function imgmode() {

    img = true;
    yt = false;
	bai = false;
    web = false;
	fa = false;
    document.getElementsByName('searchbox')[0].placeholder = 'google irudiak';
    document.getElementById('srch');
    document.title = "Google irudiak";

}

function webmode() {

    web = true;
    img = false;
	bai = false;
    yt = false;
	fa = false;
    document.getElementsByName('searchbox')[0].placeholder = 'google';
    document.getElementById("srch");
    document.title = "Google";

}

function openurl(e) {

    var url;
    var input = document.getElementById("srch").value;
    input = input.trim();

    input = input.replace("+", "%2B");

    input = input.replace(" ", "+");
    input = input.replace("=", "%3D");
    input = input.replace("&", "%26");

	var srchurl = "https://www.google.com/search?q=";
	var imgurl = "https://www.google.com/search?tbm=isch&q=";
    var baiurl = "https://www.google.com/search?btnI&q=";
    var yturl = "https://www.youtube.com/results?search_query=";
	var faurl = "https://www.filmaffinity.com/es/search.php?stext=";

    if (img == true) {
        url = imgurl.concat(input);
    } else if (yt == true) {
        url = yturl.concat(input);
		} else if (fa == true) {
        url = faurl.concat(input);
		} else if (bai == true) {
        url = baiurl.concat(input);
    } else if (web == true) {
        url = srchurl.concat(input);
    } else {
        url = srchurl.concat(input);
    }

    if (e.keyCode == 13 && input != "") {
        window.open(url, '_blank'); //lehio berri batean irekitzeko aldatua
		event.currentTarget.value = "";
    }

}
