/*
Data una lista della spesa (inventatela), 
stampare in pagina gli elementi della lista 
individualmente con un ciclo while.  
(anche brutalmente, basta che si vedano)
*/

//Targhettizzo gli elementi in pagina
const expense = document.getElementById("expense");

//Creo array
const toBuy = ["uova", "latte", "formaggio", "pane"];

let listItem = "";

let i = 0;

while (i < toBuy.length) {
  listItem += `<li>${toBuy[i]}</li>`;
  i++;
}

const list = `<ul>${listItem}</ul>`;

expense.innerHTML = list;
