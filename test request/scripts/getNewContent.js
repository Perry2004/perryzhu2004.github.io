function getNewContent() {
    var request = getHTTPObject(); 
    if (request) {
        request.open("GET", "example.txt", true); 
        
        // event handler that is triggered when the server shends response. 
        request.onreadystatechange = function () {
            
            // readyState 4 states for complete. 
            if (request.readyState == 4) {
                var para = document.createElement("p");

                // respondText is a string property of the response data. 
                var txt = document.createTextNode(request.responseText); 
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        }

        // sends a request. 
        request.send(null);
    } 
    else {
        alert('Sorry, your browser doesn\'t support XMLHttpRequest');
    }
}

window.onload = function () {
    getNewContent();
}