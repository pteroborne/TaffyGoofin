import TAFFY from './taffy.js'

let theDB = TAFFY()

function addTo(name, status) {
    let thingy = document.createElement('li')
    thingy.innerText = name
    document.querySelector(`#${status}`).append(thingy)
}


function submitted() {
    let name = document.querySelector('#name').value
    let choice = document.querySelector('#choice').value

    theDB.insert({name: name, choice: choice})

    theDB({choice: 'Yes'}).each(item => {
        addTo(item.name, 'right')
    })
    theDB({choice: 'No'}).each(item => {
        addTo(item.name, 'wrong')
    })
    theDB({choice: 'Perhaps'}).each(item => {
        addTo(item.name, 'what')
    })

}

document.querySelector('#button').addEventListener('click', () => {
    submitted()
})

console.log('scripts running')