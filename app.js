
//input provided
var data = ["Name,Position,DateOfBirth,Age",
    "John Doe,Developer,12 Mar,28",
    "Mellisa May,QA Specialist,17 April,30",
    "David Doctor,Tester,17 April,27",
    "Lisa Stuart,Designer,2 November,29",
    "Johanna Maringer,Project Manager,15 August,28"];

// creates table tag and stores in variable
var tableData = '<table id="table">';

// loop through the array and split string elements
for (var i = 0; i < data.length; i++) {

    var cellData = data[i].split(",");

    //start a tr tag
    tableData += '<tr>';

    //print data and HTML tags
    for (var j = 0; j < cellData.length; j++) {
        //if position is 0 print table heading, else prints table cells
        if (i === 0) {
            tableData += '<th>' + cellData[j] + '</th>';
        } else {
            tableData += '<td>' + cellData[j] + '</td>';
        }
    }

    // end a tr tag
    tableData += '</tr>';
}
// end a table tag
tableData += '</table>';

document.querySelector('.table').innerHTML = tableData;

// data to sort
var tableToSort = document.getElementById("table");
var sorted = true;

// if no sorting is required -> stops the loop
while (sorted) {
    sorted = false;
    var rows = tableToSort.rows;

    // loop through all rows 
    for (var i = 1; i < (rows.length - 1); i++) {
        var isSorted = false;

        // compare 2 elements 
        let x = rows[i].getElementsByTagName("td")[3];
        let y = rows[i + 1].getElementsByTagName("td")[3];

        // Check if 2 rows need to be switched
        if (x.innerHTML > y.innerHTML) {
            // If yes, mark Switch as needed and break loop 
            isSorted = true;
            break;
        }
    }

    // switch rows
    if (isSorted) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        sorted = true;
    }
} 