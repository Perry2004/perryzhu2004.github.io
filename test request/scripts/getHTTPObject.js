function getHTTPObject() {
    
    // determines if the browser is not IE. 
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {

            // scripts for different versions of IEs. 
            try { 
                return new ActiveXObject("Msxml2.XMLHTTP.6.0"); 
            }
            catch (e) { }
            try { 
                return new ActiveXObject("Msxml2.XMLHTTP.3.0"); 
            }
            catch (e) { }
            try { 
                return new ActiveXObject("Msxml2.XMLHTTP"); 
            }
            catch (e) { } 
            return false;
        }
    return new XMLHttpRequest();
}

var request = getHTTPObject();