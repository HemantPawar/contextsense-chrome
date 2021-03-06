var doc = document.implementation.createHTMLDocument("example-contextsense");

chrome.tabs.getSelected( function(tab){
    var url = "http://wingify.com/contextsense?url=" + encodeURIComponent(tab.url);
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onload = function(){
        doc.documentElement.innerHTML = req.responseText;

        // set contextsense block
        document.getElementById("result").innerHTML = doc.getElementsByClassName("result")[0].innerHTML;
        document.getElementById("value").style.width = doc.getElementsByClassName("value")[0].style.width;
        document.getElementById("report").addEventListener('click', function(){window.open(url)});

        // display contextsense block
        document.getElementById("loading").style.display = "none";
        document.getElementById("contextsense").style.display = "block";
    }
    req.send(null);

});