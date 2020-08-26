
let ul = document.querySelector('#client-list')

for (let i of customers){
    let listElement = document.createElement('li')
    let imageEl = document.createElement("i")
    let emailEl = document.createElement("i")
    let genderEl = document.createElement("i")
    let locationEl = document.createElement("i")
    let  = document.createElement("i")
    let  = document.createElement("i")
    let  = document.createElement("i")

    console.log('i')

    imageEl.src = i.picture.medium
    console.log(imageEl)
    emailEl.innerText = i.email
    locationEl.innerText = i.location.street
    genderEl.innerText = i.gender


    listElement.appendChild(imageEl)
    listElement.appendChild(emailEl)
    listElement.appendChild(locationEl)
    listElement.appendChild(genderEl)
    console.log(listElement)

    ul.appendChild(listElement)

    }

// function createImageElement(i){
//     let imageEl = document.createElement('img')
//     imageEl.src = i.picture
//     return imageEl
// }