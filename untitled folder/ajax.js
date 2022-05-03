function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch (e) { } return false;
        }
    return new XMLHttpRequest();
}


function getNewContent(callBackFunction) {
    var request = getHTTPObject(); //creates an HTTP request object
    if (request) { //checkes if the request object was created
        request.open("GET", "example.txt", true);  //sets the request to be asynchronous (last parameter means it is processed asynchronously)
        request.onreadystatechange = callBackFunction;
        request.send(null);
    } 
    else {
        alert('Sorry, your browser doesn\'t support XMLHttpRequest');
    }
}