loadXMLDoc();

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "/Sources/cd_catalog.xml", true);
    xmlhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<th colspan='2' style='background-color: red;'>Filmes Hoje</th>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("FILME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("DATA")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}