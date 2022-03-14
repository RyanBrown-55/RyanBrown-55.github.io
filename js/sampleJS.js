var sound = new Howl({
  src: ['sounds/welcome.mp3']
});


function s() {
  sound.play()
}

function changeTitle() {
  let selectedElement = document.getElementById("changeMe")
  console.log(selectedElement)
  selectedElement.innerText = "DIGS"
}

function minuteOfTheDay() {
  var d = new Date()
  var min = d.getMinutes()
  let selectedElement = document.getElementById("time")
  console.log(selectedElement)
  selectedElement.innerText = "It is minute " + min + " of hour  " + d.getHours() + " of the day!"
}


function goodBye() {
  let selectedElement = document.getElementById("goAway")
  selectedElement.style.display = 'none'

}

function howdy() {
  document.getElementById('goAway').style.display = 'block'
}

function launch() {
  alert("You launced a function!")
}

function pop() {
  alert("This is a simple alert message")
}

function parameter(arr) {
  alert('Here are the letters in your word sorted alphabetically: ' + arr.map(element => {
    return element.toLowerCase();
  }).sort().join(', '))

}

function parseArray() {
  let selectedElement = document.getElementById("sortedArr")
  var itter = prompt('How many words would you like to enter?')
  var arr = []
  for (let i = 0; i < itter; i++) {
    arr.push(prompt('Enter word #' + (i + 1).toString()))
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

  connect.onload = function () {
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

function mapLoad2() {
  mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbjU1MiIsImEiOiJja3owcjYyeTAwejM4Mm9sdTdkcWUwZHowIn0.7UW2vKfPdCEg_CjvXA6qBw';

  const map = new mapboxgl.Map({
    container: 'map2', // container id
    style: 'mapbox://styles/ryan552/cl0pqjmye003s15ogbrko1u06' // replace this with your style URL
  });

  map.on('load', () => {
    const layers = [
      '0-9th percentile',
      '10th-29th percentile',
      '30th-49th percentile',
      '50th-69th percentile',
      '70th-89th percentile',
      '90th-100th percentile'
    ];
    const colors = [
      '#0000ff',
      '#4169e1',
      '#00FFFF',
      '#00FF00',
      '#ffff00',
      '#ff0000',
    ];
    const legend = document.getElementById('legend');
    legend.innerText = "Legend"

    layers.forEach((layer, i) => {
      const color = colors[i];
      const item = document.createElement('div');
      const key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;

      const value = document.createElement('span');
      value.innerHTML = `${layer}`;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    });
    
  });
}