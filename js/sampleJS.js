
function changeTitle(){
    let selectedElement  = document.getElementById("changeMe")
    console.log(selectedElement)
    selectedElement.innerText = "DIGS"
}

function minuteOfTheDay(){
    var d = new Date()
    var min = d.getMinutes()
    let selectedElement  = document.getElementById("time")
    console.log(selectedElement)
    selectedElement.innerText =  "It is minute "+ min + " of hour  " + d.getHours() + " of the day!"
}


function goodBye(){
    let selectedElement = document.getElementById("goAway")
    selectedElement.style.display = 'none'

}

function howdy(){
    document.getElementById('goAway').style.display = 'block'
}

function launch(){
    alert("You launced a function!")
}

function pop(){
    alert("This is a simple alert message")
}

function parameter(arr){
    alert('Here are the letters in your word sorted alphabetically: ' + arr.map(element => {
        return element.toLowerCase();
      }).sort().join(', '))

}

function parseArray(){
    let selectedElement  = document.getElementById("sortedArr")
    var itter = prompt('How many words would you like to enter?') 
    var arr = []   
    for (let i = 0; i < itter; i++) {
        arr.push(prompt('Enter word #' + (i+1).toString()))
        }
    selectedElement.innerText = 'Your words: ' + arr.join(', ') + '\n Your words sorted: ' + arr.sort().join(', ')

}

function mapLoad() {
    //Define the lat lon coordinate
    var latLng = [41.784623612268106, -87.60031037731093];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
      }),
      streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
      });
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
      .bindPopup("<b>My<br>Dorm</b>").openPopup();
  
  
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
  }


  function wikipediaSearch() {
    let searchTerm = document.getElementById("searchTerm").value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;
    connect.open('GET', url);
 
    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        var pages = wikiObject.query.pages;
        for (var i in pages) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute("class", "row");
            newDiv.setAttribute("id", pages[i].title);
            
            var newATag = document.createElement("a");
            newATag.setAttribute('class', "h6")
            newATag.setAttribute('href', "https://en.wikipedia.org/?curid=" + pages[i].pageid.toString());
            newATag.innerText = pages[i].title;
 
            document.getElementById("wikipediatarget").appendChild(newDiv);
            document.getElementById(pages[i].title).appendChild(newATag);
 
        }
    }
 
    connect.send();
 
}
 