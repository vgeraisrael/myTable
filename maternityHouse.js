// function-constructor of human objects
function Human(firstName, lastName, age, gender, married) {
	this.firstName = firstName;
	this.lastName = lastName;

	if (typeof age == "number") {
		this.age = age;
	} else {
		alert("age should be a number");
	}

	if (typeof gender == "boolean") {
		this.gender = gender;
	} else {
		alert("gender should be false (for female) or true (for male)");
	}

	if (typeof married == "boolean") {
		this.married = married;
	} else {
		alert("married should be false or true");
	}
}

// Creating array for human objects
let humanList = [];

// Creating a male`s names array
let namesMale = ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan", "Alexander",
	"Ethan", "Jacob", "Michael", "Daniel", "Henry", "Jackson", "Sebastian", "Aiden", "Matthew"];

// Creating a female`s names array
let namesFemale = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail",
	"Emily", "Elizabeth", "Mila", "Ella", "Avery", "Camila", "Aria", "Scarlett", "Victoria"];

// Creating a lastnames array
let lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez",
	"Anderson", "Taylor", "Thomas", "Moore", "Martin", "Thompson", "White", "Lopez", "Lee"];

//filling human`s array

fillList(humanList, 20);
console.log(humanList);


//creating new humans and pushing them to array
// humanList - array, that we are trying to fill
// counter - number of humans to add
function fillList(humanList, counter) {
	if (counter < 1) {
		alert("number of people you are creating should be at least 1");
		return humanList;
	}

	let i = 1
	while (i <= counter) {
		humanList.push(createHuman());
		counter--;
	}

	return humanList;
}

//Creates new random human, uses namesMale, namesFemale, lastNames arrays and Math.random to receive unic persons
function createHuman() {
	let firstMaleNameIndex = randomNum(0, (namesMale.length - 1));
	let firstFemaleNameIndex = randomNum(0, (namesFemale.length - 1));
	let lastNameIndex = randomNum(0, (lastNames.length - 1));
	let lastName = lastNames[lastNameIndex];
	let age = randomNum(18, 80);
	let gender = ((randomNum(0, 1) == 0) ? false : true);
	let married = ((randomNum(0, 1) == 0) ? false : true);
	let firstName;

	if (gender == true) {
		firstName = namesMale[firstMaleNameIndex];
	} else {
		firstName = namesFemale[firstFemaleNameIndex];
	}

	return new Human(firstName, lastName, age, gender, married);
}

//Randomizer
function randomNum(lowest, highest) {
	return Math.floor(Math.random() * (highest + 1 - lowest) + lowest);
}
