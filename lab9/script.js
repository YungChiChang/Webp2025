var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200){
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset){
  var myTable = document.getElementById("csie");
  dataset.forEach(function(data, index){
    var row = myTable.insertRow(-1);
    row.insertCell(0).innerHTML = data['title'];

    var location = data['showInfo'][0] ? data['showInfo'][0]['location'] : 'N/A';
    var price = data['showInfo'][0] ? data['showInfo'][0]['price'] : 'N/A';

    row.insertCell(1).innerHTML = location;
    row.insertCell(2).innerHTML = price;
  });
}