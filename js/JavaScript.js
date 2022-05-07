d3.csv("Data/example.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: '6 Month',
  x: unpack(rows, 'Date'),
  y: unpack(rows, '6 Months'),
  line: {
    width: 3
}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: '12 Month',
  x: unpack(rows, 'Date'),
  y: unpack(rows, '12 Months'),
  visible: 'legendonly',
  line: {
    width: 3
}
}

var trace3 = {
  type: "scatter",
  mode: "lines",
  name: '24 Month',
  x: unpack(rows, 'Date'),
  y: unpack(rows, '24 Months'),
  visible: 'legendonly',
  line: {
    width: 3
}
}

var trace4 = {
  type: "rect",
  name: 'Recession',
  color: '#adaba5',
  fillcolor: '#adaba5',
  // opacity: 0.5,
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Actual'),
  line: {
    width: 3
}
}

var data = [trace1,
            trace2,
            trace3,
          trace4];

var layout = {
  title: 'Recession Probability',
  hovermode: 'x unified',
  texttemplate: "%{value:.1f}",
  xaxis: {
    autorange: true,
    type: 'Date'
  },
};

Plotly.newPlot('myDiv', data, layout);
})

// Using XMLHttpRequest().
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            var table_container = document.getElementById('table-container');
            csv_string_to_table(xmlhttp.responseText, table_container);
        }
    }
};
xmlhttp.open("GET", "test.csv", true);
xmlhttp.send();

// Or using fetch() 
fetch('test.csv')
.then(function(response){
    return response.text();
})
.then(function(data){
    var table_container = document.getElementById('table-container');
    csv_string_to_table(data, table_container);
});

function csv_string_to_table(csv_string, element_to_insert_table) {
  var rows = csv_string.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows
  var table = '';
  var table_rows = '';
  var table_header = '';

  rows.forEach(function(row, row_index) {
      var table_columns = '';
      var columns = row.split(','); // split/separate the columns in a row
      columns.forEach(function(column, column_index) {
          table_columns += row_index == 0 ? '<th>' + column + '</th>' : '<td>' + column + '</td>';
      });
      if (row_index == 0) {
          table_header += '<tr>' + table_columns + '</tr>';
      } else {
          table_rows += '<tr>' + table_columns + '</tr>';
      }
  });

  table += '<table>';
      table += '<thead>';
          table += table_header;
      table += '</thead>';
      table += '<tbody>';
          table += table_rows;
      table += '</tbody>';
  table += '</table>';

  element_to_insert_table.innerHTML += table;
}
