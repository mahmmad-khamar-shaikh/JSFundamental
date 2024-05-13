var intervalReference;

function setMeup() {
  const txtReference = document.getElementById("txtInterval");

  if (txtReference.value < 2) {
    validate(txtReference, true);
  } else {
    validate(txtReference, false);
    let fethCounter = 1;
    intervalReference = setInterval(() => {
      fetchResponse(fethCounter)
        .then((response) => response.json())
        .then((json) => drawTable(json));
      fethCounter++;
    }, txtReference.value * 1000);
  }
}

function drawTable(rowToAdd) {
  if (rowToAdd) {
    const tableRef = document.getElementById("tblResult");
    const tr = document.createElement("tr");

    const userID = rowToAdd.userId;
    const title = rowToAdd.title;
    const status = rowToAdd.completed;

    const td1 = document.createElement("td");
    td1.innerHTML=userID;
    td1.style.border="1px solid #000";
  
    const td2 = document.createElement("td");
    td2.innerHTML=title;
    td2.style.border="1px solid #000";
  
  
    const td3 = document.createElement("td");
    td3.innerHTML=status;
    td3.style.border="1px solid #000";
  
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.style.border="1px solid #000";
    if (status) {
      tr.style.color = "green";
    }
    tableRef.appendChild(tr);
  }
}

function stopProcess() {
  clearInterval(intervalReference);
}

function fetchResponse(id) {
  console.log(`Counter in Fetch Response ${id}`);
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

function validate(element, trigger) {
  if (trigger) {
    element.style.borderColor = "red";
    element.title = " please set interval more than 2 Sec";
  } else {
    element.style.borderColor = "";
    element.title = "Interval";
  }
}

function initilizeForm() {

  //Define main Div - Form
  const appDiv = document.createElement("div");
  appDiv.id = "app";


  // Define input box
  const inputTxt = document.createElement("input");
  inputTxt.type = "text";
  inputTxt.title = "Interval";
  inputTxt.id = "txtInterval";
  appDiv.appendChild(inputTxt);

  //define Trigger Button
  const btnFetchRef = document.createElement("button");
  btnFetchRef.name = "setMeUp";
  btnFetchRef.id = "btnSetup";
  btnFetchRef.innerHTML = "Fetch Post";

  btnFetchRef.addEventListener('click',setMeup);
  appDiv.appendChild(btnFetchRef);



// Define Reset button
  const btnRestRef = document.createElement("button");
  btnRestRef.click = "stopProcess()";
  btnRestRef.name = "stopMe";
  btnRestRef.id = "btnStop";
  btnRestRef.innerHTML = "Stop";
btnRestRef.addEventListener('click',stopProcess)

  // add Form to Main div
  appDiv.appendChild(btnRestRef);



// Define Result div
  const resultDvRef = document.createElement("div");
  resultDvRef.id = "result";


  // Define Table show response
  const tableRef = document.createElement("table");
  tableRef.id = "tblResult";
  tableRef.style.border = "1px solid #000";

// Define Header row
  const headerRow = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.innerHTML="UserId"
  th1.style.border="1px solid #000";

  const th2 = document.createElement("th");
  th2.innerHTML="Title"
  th2.style.border="1px solid #000";


  const th3 = document.createElement("th");
  th3.innerHTML="Completed"
  th3.style.border="1px solid #000";


  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  headerRow.appendChild(th3);

  // headerRow.innerHTML = `<th>UserID</th> <th>Title </th><th>Completed </th>`;
  headerRow.style.border="1px solid #000";

  // add Header row to Table
  tableRef.appendChild(headerRow);

  // Add table to Result Div
  resultDvRef.appendChild(tableRef);


  document.body.appendChild(appDiv);
  document.body.appendChild(resultDvRef);

}

initilizeForm();
