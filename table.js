
let ul = document.querySelector('#client-list')

for (let i of customers){
    let listElement = document.createElement('li')
    let emailEl = document.createElement("i")
    console.log('i')

    emailEl.innerText = i.email

    listElement.appendChild(emailEl)
    console.log(listElement)

    ul.appendChild(listElement)

    }

// function createEmail(i){
//     // let emailEl = document.createElement('emails')
//     emailEl.innerText = i.email
//     return emailEl
// }