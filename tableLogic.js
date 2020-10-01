//inserting a wrap-div into a body
let wrap = document.createElement("div");
wrap.className = "twoDimCentered";
wrap.classList.add("wrapDiv");
document.body.append(wrap);

// todo: insert sorting windows here
//inserting table into wrap
let myTable = document.createElement("table");
myTable.className = "table";
wrap.append(myTable);

// Inserting table name
let tabHeader = document.createElement("caption");
tabHeader.textContent = "List of Employees";
myTable.append(tabHeader);

// Inserting head of the table
let tabHead = document.createElement("thead");
myTable.append(tabHead);

let headRow = document.createElement("tr");
tabHead.append(headRow);

//Creating array of human properties
let properties = Object.keys(humanList[0]);
console.log(properties);

// Creating a table head  with properties
for (i = 0; i < properties.length; i++) {
	let tcell = document.createElement("th");
	tcell.className = "headerCell";
	tcell.textContent = properties[i];
	headRow.append(tcell);
}

let imgYes = document.createElement("img");
imgYes.className = "icon";
imgYes.scr = "img\close-circle-outline.svg"

//Creating table content
for (let i = 0; i < humanList.length; i++) {
	let tabRow = document.createElement("tr");
	myTable.append(tabRow);
	for (let j = 0; j < properties.length; j++) {
		let tabCell = document.createElement("td");
		tabCell.className = "cell";
		tabCell.textContent = humanList[i][properties[j]];

		if (properties[j] == "married") {
			if (tabCell.textContent === "true") {
				tabCell.innerHTML = "+";
			} else {
				tabCell.innerHTML = "-";
			}
		}

		if (properties[j] == "gender") {
			if (tabCell.textContent === "true") {
				tabCell.innerHTML = "male";
			} else {
				tabCell.innerHTML = "female";
			}
		}
		tabRow.append(tabCell);
	}
}








