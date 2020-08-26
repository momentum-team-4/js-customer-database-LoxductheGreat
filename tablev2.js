let ul = document.querySelector('#client-list')

let test = customers[0]


let listElement = document.createElement('li')
console.log("li")

let emailEl = document.createElement("email")
console.log("email")

emailEl.innerText = test.email
console.log[emailEl]


// this line under causes error on page
listElement.appendChild(emailEl)
console.log(listElement)



  ul.appendChild(listElement)

// function createEmailElement (yert){
//     let emailEl = document.createElement('email')
//     emailEl = 
// }

