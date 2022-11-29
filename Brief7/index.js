// var rIndex,
//     table = document.getElementById("table");
let table = document.getElementById('table')
function checkEmptyInput(){
            var isEmpty = false,
                nom = document.getElementById("Article").value,
                marque = document.getElementById("Marque").value,
                prix = document.getElementById("prix").value;
                date = document.getElementById("date").value;
                type = document.getElementById("TYpe").value;
                promotion = document.getElementById("promotion").value;
                
        
            if(nom === ""){
                alert("il faux écrire un nom");
                isEmpty = true;
            }
            else if(marque === ""){
                alert("il faux écrire la marque");
                isEmpty = true;
            }
            else if(prix === ""){
                alert("il faux ajouter un prix");
                isEmpty = true;
            }
            else if(date === ""){
              alert("il faux ajouter une date");
              isEmpty = true;
            }
            else if(type === ""){
              alert("il faux ajouter un type");
              isEmpty = true;
            }
            else if(promotion === ""){
              alert("il faux ajouter un promotion");
              isEmpty = true;
            }
            return isEmpty;
}

let btn =document.getElementById("ajouter");
btn.addEventListener("click", insertNewRow);
function insertNewRow(e){

  e.preventDefault();

  if (!checkEmptyInput()){ 
  // creat line 
var line = document.createElement("tr");
line.classList.add('newLine')
table.append(line)
// add  td
var nom = document.getElementById("Article").value;
var marque = document.getElementById("Marque").value;
var prix = document.getElementById("prix").value
var date = document.getElementById("date").value;
var type = document.getElementById("TYpe").value;

var oui = document.getElementById("oui")
var non = document.getElementById("non")

var  Narticle = document.createElement("td");
line.append(Narticle)
var  NMarque = document.createElement("td");
line.append(NMarque)
var  Nprix = document.createElement("td");
line.append(Nprix)
var  Ndate = document.createElement("td");
line.append(Ndate)
var  Ntype = document.createElement("td");
line.append(Ntype)
var  Npromotion = document.createElement("td");
line.append(Npromotion)

Narticle.innerHTML = nom ;
NMarque.innerHTML = marque;
Nprix.innerHTML = prix;
Ndate.innerHTML = date;
Ntype.innerHTML = type;
if (oui.checked  ) {
  console.log("oui")
  Npromotion.innerHTML = oui.value;
}
if (non.checked  ) {
  console.log("non")
  Npromotion.innerHTML = non.value;  
}
}























  // var newRow = table.insertRow(table.length),
  //     cell2 = newRow.insertCell(1),
  //     cell3 = newRow.insertCell(2),
  //     cell4 = newRow.insertCell(3),
  //     cell5 = newRow.insertCell(4),
  //     cell6 = newRow.insertCell(5),
  //     cell7 = newRow.insertCell(6),

  //   article = document.getElementById("Article").value,
  //   marque = document.getElementById("Marque").value,
  //   prix = document.getElementById("prix").value,
  //   date = document.getElementById("date").value,
  //   type = document.getElementById("TYpe").value,
  //   promotion = document.getElementById("promotion");
  //    cell1.innerHTML = article;
  //    cell2.innerHTML = marque;
  //    cell3.innerHTML = prix
  //    cell4.innerHTML = date
  //    cell5.innerHTML = type
  //    cell6.innerHTML = promotion
    //  selectedRowToInput();
   
 
}
