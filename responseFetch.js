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

    tr.innerHTML = `<td> ${userID}</td> <td> ${title} </td><td>${status} </td>`;
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
