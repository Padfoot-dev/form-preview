const username = document.getElementById("username");
const gender = document.getElementsByName("gender");
const report = document.getElementById("report");
const country = document.getElementById("country");
const email = document.getElementById("email");
const address = document.getElementById("address");
const password = document.getElementById("password");
const verification = document.getElementById("verification").querySelectorAll("input[type='checkbox']");
const conditions = document.getElementById("acceptance").querySelectorAll("input[type='checkbox']");
const btn = document.getElementById("btn");


const resultRow = document.getElementById("result");


const generateResult = (result) => {

    let row = document.getElementById("result");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");
    let cell6 = document.createElement("td");
    let cell7 = document.createElement("td");
    let cell8 = document.createElement("td");


    cell1.innerHTML = result["username"]
    cell2.innerHTML = result["gender"]
    cell3.innerHTML = result["report"]
    cell4.innerHTML = result["country"]
    cell5.innerHTML = result["email"]
    cell6.innerHTML = result["address"]
    cell7.innerHTML = result["verification"]
    cell8.innerHTML = result["conditions"]

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    row.appendChild(cell8);



}



const handleSubmit = (event) => {
    event.preventDefault()
    const result = {};
    result["username"] = username.value;
    for(let i = 0; i < gender.length; i++) {
    if(gender[i].checked) {
        result["gender"] = gender[i].value;
        }
    }
    result["report"] = report.value;
    result["country"] = country.value;
    result["email"] = email.value;
    result["address"] = address.value;
    result["password"] = password.value;
    let verificationList = [];
    verification.forEach((checkbox)=> {
        if( checkbox.checked) {
            verificationList.push(checkbox.value)
        }
    })
    result["verification"] = verificationList;
    let conditionsList = [];
    conditions.forEach((condition)=> {
        conditionsList.push(condition.value)
    })
    result["conditions"] = conditionsList;

    generateResult(result);
    console.log(result)

}

btn.addEventListener("click" , handleSubmit);