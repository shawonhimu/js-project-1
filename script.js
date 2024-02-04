var tbody = document.getElementById("tbody");

function addCell() {
	//create row
	let tr = document.createElement("tr");
	//create columns
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	let td3 = document.createElement("td");
	//add column values
	td1.innerHTML = Math.floor(Math.random() * 10);
	td2.innerHTML = Math.floor(Math.random() * 10);
	td3.innerHTML = Math.floor(Math.random() * 10);
	// add columns to row
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	//add row to table
	tbody.appendChild(tr);
}

function removElement() {
	if (tbody.lastElementChild == null) {
		alert("There is no element to remove, please add new !");
	} else {
		tbody.removeChild(tbody.lastElementChild);
	}
}
