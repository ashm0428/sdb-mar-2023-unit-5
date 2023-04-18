console.log("it works from soccer")

let tableBody = document.querySelector("tbody");

// tableBody.innerHTML = ` 



function displayInnerHTML(playerArray) {
    let htmlString = "";
    for(let i=0; i < playerArray.length; i++)  {
        htmlString += `
        <tr>
        <td>${i+1}</td>
        <td>${playerArray[i].firstName}</td>
        <td>${playerArray[i].lastName}</td>
        <td>${playerArray[i].position}</td>
        <td>${playerArray[i].team}</td>
        <td>${playerArray[i].jerseyNumber}</td>
        </tr> `;
    }
    tableBody.innerHTML = htmlString;
}

function displayPlayers(playerArray) {
    // Clear out the ninerHTML of the tbody
    tableBody.innerHTML = "";
    for(let i=0; i < playerArray.length; i++) {
// Create <tr>
        let tableRow = document.createElement("tr");

// Create a functiont hat will take my tr tag and players info to create the <td> and append them to the <tr>
        tableBody.appendChild(tableRow);
        tableDataBuilder(tableRow, i + 1);
        tableDataBuilder(tableRow, playerArray[i].firstName);
        tableDataBuilder(tableRow, playerArray[i].lastName);
        tableDataBuilder(tableRow, playerArray[i].position);
        tableDataBuilder(tableRow, playerArray[i].team);
        tableDataBuilder(tableRow, playerArray[i].jerseyNumber);
    }
}

function tableDataBuilder(tableRow, playerDataToDisplay) {
    // Create a TD tag
    let tableData = document.createElement("td");
    // Change the textContent of the TD to the playerDataTo Display
    tableData.textContent = playerDataToDisplay;
    // append the TD tag to the tablerow
    tableRow.appendChild(tableData);
}


async function getAllPlayers() {
    let url = "http://localhost:4000/player/view-all";
    try {
        let response = await fetch(url);
        let data = await response.json();
        // displayInnerHtml(data.player)
        displayPlayers(data.player);
    } catch (error) {
        console.log(error);
    }
}

getAllPlayers();


let soccerPlayerForm = document.querySelector("form");
soccerPlayerForm.addEventListener("submit", submitNewPlayer)

async function submitNewPlayer(e) {
    e.preventDefault();
    try {
        let formData = new FormData(e.target);
        let json = JSON.stringify(Object.fromEntries(formData));
    // 1, Create the url for the fetch (this should match postman)
        let url = "http://localhost:4000/player/add";
    // 2. Create HEaders Object and append Content-Type
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    // 3. Create a request Options Object and supply your body, method, and headers
        let requestOptions = {
            method:"POST",
            body: json,
            headers: myHeaders,
        };
    // 4. Conduct the fetch with request options.
        await fetch(url, requestOptions);
    // If the Fetch is successful refresh teh table
        getAllPlayers();
        // Clear the form values
        soccerPlayerForm.reset();
    } catch (error) {
        console.error(error);
    }

}

