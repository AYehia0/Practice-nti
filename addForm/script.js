// getting elements
const form = document.getElementById('customer-form')

form.addEventListener('submit',  e => {
    // preventing the default 
    e.preventDefault()

    // getting the user's data : name, age and salary 
    // for some reasons this.elements doesn't work LOL
    const name = e.target.name.value
    const age = e.target.age.value
    const salary = e.target.salary.value

    const data = {
        name: name,
        age: age,
        salary: salary
    }

    console.log(data)

    form.reset()
})

