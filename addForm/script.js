// getting elements
const form = document.getElementById('customer-form')
const resultContainer = document.querySelector('.result')

// name in ls
const lsName = "customers"

function addToLocalStorage(data) {

    const items = JSON.parse(localStorage.getItem(lsName)) || []

    items.push(data)

    localStorage.setItem(lsName, JSON.stringify(items))
}

function showItem(item) {
   
    const tmp = `
        ${item.name}: ${item.subjects.join('|')}
    `
    // creating the element
    const li = document.createElement('li')

    li.innerText = tmp 
    
    // appending to the html, body
    resultContainer.appendChild(li)

}
function showItemsToHtml() {

    // getting notes from localStorage
    const students = JSON.parse(localStorage.getItem(lsName))

    //adding to html
    if(students) {
        students.forEach(student => {
            showItem(student)
        })
    }

}

showItemsToHtml()

form.addEventListener('submit',  e => {
    // preventing the default 
    e.preventDefault()

    // getting the user's data : name, age and salary 
    // for some reasons this.elements doesn't work LOL
    const data = {
        name: e.target.name.value,
        subjects: [e.target.sub1.value, e.target.sub2.value, e.target.sub3.value]
    }
    
    // adding to the local storage
    addToLocalStorage(data)

    form.reset()
})

