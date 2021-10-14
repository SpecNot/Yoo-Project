

const getData = async () => {
    const response = await fetch('https://l25tfgokh5.execute-api.us-east-2.amazonaws.com/get', {
        mode: 'cors'
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    // console.log(myJson)
    // return myJson

    table = document.createElement("table");
    tableRowH = document.createElement("tr");
    tableHead = document.createElement("th");
    tableHead2 = document.createElement("th");
    tableHead3 = document.createElement("th");
    tableHead.innerHTML = "Name"
    tableHead2.innerHTML = "Status"
    tableHead3.innerHTML = "Dietary Requirements"
    tableRowH.appendChild(tableHead)
    tableRowH.appendChild(tableHead2)
    tableRowH.appendChild(tableHead3)
    table.appendChild(tableRowH)




    tableG = document.createElement("table");
    tableRowH2 = document.createElement("tr");
    tableHead2 = document.createElement("th");
    tableHead22 = document.createElement("th");
    tableHead32 = document.createElement("th");
    tableHead2.innerHTML = "Name"
    tableHead22.innerHTML = "Status"
    tableHead32.innerHTML = "Dietary Requirements"
    tableRowH2.appendChild(tableHead2)
    tableRowH2.appendChild(tableHead22)
    tableRowH2.appendChild(tableHead32)
    tableG.appendChild(tableRowH2)




    tableN = document.createElement("table");
    tableRowH3 = document.createElement("tr");
    tableHead3 = document.createElement("th");
    tableHead23 = document.createElement("th");
    tableHead33 = document.createElement("th");
    tableHead3.innerHTML = "Name"
    tableHead23.innerHTML = "Status"
    tableHead33.innerHTML = "Dietary Requirements"
    tableRowH3.appendChild(tableHead3)
    tableRowH3.appendChild(tableHead23)
    tableRowH3.appendChild(tableHead33)
    tableN.appendChild(tableRowH3)




    for ([key, value] of Object.entries(myJson["attendees"])) {

        if(value["status"] == "none"){
            tableRow = document.createElement("tr");
            TableDataName = document.createElement("td");
            TableDataName.innerHTML = value["name"]
            TableDataStatus = document.createElement("td");
            TableDataStatus.innerHTML = "Not Responded"
            TableDataDietary = document.createElement("td");
            if("diet" in value){
                if (value["diet"] == "No"){
                    TableDataDietary.innerHTML = "None"
                }
                else{
                    TableDataDietary.innerHTML = value["diet"]
                }
            }
            else{
            TableDataDietary.innerHTML = "None"
            }
            tableRow.appendChild(TableDataName)
            tableRow.appendChild(TableDataStatus)
            tableRow.appendChild(TableDataDietary)
            table.appendChild(tableRow)
        }
        else if(value["status"] == "Yes"){
            tableRow = document.createElement("tr");
            TableDataName = document.createElement("td");
            TableDataName.innerHTML = value["name"]
            TableDataStatus = document.createElement("td");
            TableDataStatus.innerHTML = "Going"
            TableDataDietary = document.createElement("td");
            if("diet" in value){
                if (value["diet"] == "No"){
                    TableDataDietary.innerHTML = "None"
                }
                else{
                    TableDataDietary.innerHTML = value["diet"]
                }
            }
            else{
            TableDataDietary.innerHTML = "None"
            }            tableRow.appendChild(TableDataName)
            tableRow.appendChild(TableDataStatus)
            tableRow.appendChild(TableDataDietary)
            tableG.appendChild(tableRow)
        }
        else if(value["status"] == "No"){
            tableRow = document.createElement("tr");
            TableDataName = document.createElement("td");
            TableDataName.innerHTML = value["name"]
            TableDataStatus = document.createElement("td");
            TableDataStatus.innerHTML = "Not Going"
            TableDataDietary = document.createElement("td");
            if("diet" in value){
                if (value["diet"] == "No"){
                    TableDataDietary.innerHTML = "None"
                }
                else{
                    TableDataDietary.innerHTML = value["diet"]
                }
            }
            else{
            TableDataDietary.innerHTML = "None"
            }            tableRow.appendChild(TableDataName)
            tableRow.appendChild(TableDataStatus)
            tableRow.appendChild(TableDataDietary)
            tableN.appendChild(tableRow)
        }
        // console.log(value);
      }

      document.querySelector(".players").appendChild(table)
      document.querySelector(".playersY").appendChild(tableG)
      document.querySelector(".playersN").appendChild(tableN)


}

getData()