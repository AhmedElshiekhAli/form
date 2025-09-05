
let arrName = [];
let arremail = [];
let arrNumber = [];


function collectData() {
    
    let name = document.getElementById("input_name101").value;
    let email = document.getElementById("input_Email").value;
    let number = document.getElementById("input_Number").value;

    let tbody1 = document.createElement("tbody");
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let tab = document.createElement("table");

    td1.appendChild(name);
    td1.appendChild(email);
    td1.appendChild(number);

    tr1.appendChild(td1);
    tbody1.appendChild(tr1);
    tab.appendChild(tbody1);

    document.body.appendChild(tab);

    

}


