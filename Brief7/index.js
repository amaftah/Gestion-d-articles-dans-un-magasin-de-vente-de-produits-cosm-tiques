function reflechire() {
    let ajouter = document.querySelector("#ajouter");
    ajouter.disabled = true;
}

function Ajouter() {
    let Article = document.getElementById('Article').value;
    let Marque = document.getElementById('Marque').value;
    let Prix = document.getElementById('prix').value;
    let Date = document.getElementById('date').value;
    let Type = document.getElementById('TYpe').value;
    let oui = document.getElementById('oui');
    let non = document.getElementById('non');


    let table = document.querySelector('table');
    const tBody = document.querySelector('tbody');

    for (let i = 0; i < 1; i++) {
        const row = document.createElement("tr")
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                const suppButton = document.createElement("button");
                const modiButton = document.createElement("button");
                const nomOutput = document.querySelector("#nomOutput");

                
                row.appendChild(cell);
                if (j == 0 && Article.match(/[0-9]/g)) {
                    nomOutput.innerText = "Erreur";
                    nomOutput.style.color = "red";
                    
                }
                else if ( j == 0 && Article.length > 30){
                    Ajouter.disabled = false;
                    cell.innerText = Nom;
                }
                if (j == 0 && Nom.match(/[0-9]/g)) {
                    nomOutput.textContent = "Erreur";
                    nomOutput.style.color = "red";
                    
                }
                else if ( j == 0 && Nom.length > 30){
                    ajouter.disabled = false;
                    cell.textContent = Article;
                }
                    if(j == 1){
                     cell.textContent = Marque;
                 }
                 if(j == 2){
                     cell.textContent = Prix;
                 }
                 if(j == 3){
                     cell.textContent = Type;
                 }
                 if(j == 4){ 
                     cell.textContent = Date;
                 }
                 if(j == 5){
                     cell.textContent = Nom;
                 }
                 if(j == 6){
                     // iserer un botton de modification  
                        modiButton.innerText = "Modifier";
                     modiButton.setAttribute("class", "modifier");
                     cell.appendChild(modiButton);
                     // iserer un botton de suppression 
                     suppButton.innerText = "Supprimer";
                     suppButton.setAttribute("class", "supprimer");
                     suppButton.setAttribute("onclick", "deletRow(this)");
                     cell.appendChild(suppButton);
                 }
            }
            table.appendChild(row);

 





    }
}
function deletRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);

const btn = document.querySelector('.supprimer');
     btn.addEventListener("click", function()
     { btn.closest("tr").remove(); });
    
}