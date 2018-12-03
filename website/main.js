function updteInicial()
{
    includeHTML();
    var updt = updtTime();
    console.log(updt);
    $('#timeupdate').text(updt)
    
}


setInterval(function()
{    
    var updt = updtTime();
    console.log(updt);
    //$('#statusatd').load(document.URL +  '#statusatd');
    location.reload();
    $('#timeupdate').text(updt)
}, 30000);

function updtTime()
{
    // get a new date (locale machine date time)
    var t=30;
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    var timenow = date.toLocaleTimeString();    

    var updt = "atualizado em "+n+" - "+timenow+ " - Proxima atualização automatica em 30 segundos";
    console.log(updt);
    return updt
}

function includeHTML()
{          
    
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
        for(i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                /*make an HTTP request using the attribute value as the file name:*/
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                    }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
            }
        }
}

