const data = ["Smith John", "20 years", "BSc Computer Science", "72", "A"];

const tableData = document.querySelectorAll(".data");

for (let i = 0; i < tableData.length; i++) {
  tableData[i].innerHTML = data[i];
}

// document
//   .querySelectorAll(".data")
//   .forEach((element, i) => (element.innerHTML = data[i]));

let coict = "College of Informatics and Virtual Education";
const temp = coict.replace(
  "Informatics and Virtual Education",
  "Information and Communication Technologies"
);

const repl = document.getElementById("replace");
repl.innerHTML = coict;

function show() {
  repl.innerHTML = temp;
}

// console.log({ coict, temp });
