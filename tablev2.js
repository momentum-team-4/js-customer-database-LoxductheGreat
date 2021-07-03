let PageEl = document.querySelector('#client-list')

// for (customer of customers){
//     let Elements = document.createElement('div')
//     let nameEl = document.createElement('div')
//     Elements.appendChild(nameEl)
//     let imageEl = document.createElement('img')
//     Elements.appendChild(imageEl)


//     PageEl.appendChild(Elements)
// }


// let test = customers[0]

for (let customer of customers){
let listElement = document.createElement('li')
console.log("li")

let nameEl = document.createElement('h2')
console.log('h2')
nameEl.innerText = customer.name.first + " " + customer.name.last
console.log(nameEl)

let locationEl = document.createElement('p')
console.log('p')
locationEl.innerHTML =customer.location.street + '<br>' + customer.location.city + '<br>' + customer.location.state + customer.location.postcode
console.log(locationEl)

let emailEl = document.createElement('a')
console.log('a')
emailEl.innerText = customer.email
console.log(emailEl)

let imageEl = document.createElement('img')
console.log('img')
imageEl.src = customer.picture.large
console.log(imageEl)

// let DOBEl = document.createElement('p')
// console.log('p')
// let dob = moment(customer.dob)
// DOBEl.innerHTML = 'DOB:' + dob.format("MMM, DD, YYYY")


// attaching everything to the page
PageEl.appendChild(listElement)

listElement.appendChild(imageEl)
listElement.appendChild(nameEl)
listElement.appendChild(emailEl)
listElement.appendChild(locationEl)

}
// // this line under causes error on page
// listElement.appendChild(emailEl)
// console.log(listElement)



//   ul.appendChild(listElement)

// // function createEmailElement (yert){
// //     let emailEl = document.createElement('email')
// //     emailEl = 
// // }

