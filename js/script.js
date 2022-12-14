/*
Data una lista della spesa (inventatela), 
stampare in pagina gli elementi della lista 
individualmente con un ciclo while.  
(anche brutalmente, basta che si vedano)
*/

//Creo array
const toBuy = ["uova", "latte", "formaggio", "pane"];

// # TEMPLATE LITERALS
//Targhettizzo gli elementi in pagina
const expense = document.getElementById("expense");

let listItem = "";

let i = 0;

while (i < toBuy.length) {
  listItem += `<li>${toBuy[i]}</li>`;
  i++;
}

const list = `<ul>${listItem}</ul>`;

expense.innerHTML = list;

// # NODES
//Targhettizzo gli elementi in pagina
const expenseNode = document.getElementById("expense-node");

//Creo elemento ul
const listNode = document.createElement("ul");

let j = 0;

while (j < toBuy.length) {
  //Creo elemento li
  const itemNode = document.createElement("li");
  //Inserisco elemento corrente array nel li
  itemNode.append(toBuy[j]);
  //Inserisco il li completo nell' ul
  listNode.appendChild(itemNode);
  j++;
}

//Inserisco l'ul nel DOM
expenseNode.appendChild(listNode);
