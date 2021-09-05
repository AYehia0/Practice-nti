const readline = require("readline");

// readline input/out
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// getting the user info using node 
function getUserInput() {

    rl.question("what is your name ? ", name =>{
        rl.question("what is your age ? ", age => {
            rl.question("what is your salary ? ", salary=>{
                const userLog = `Your name is ${name}, your salary is ${salary} and you're ${age} years old`
                console.log(userLog)

                // closing ...
                rl.close()
            })
        })

    })

}
// display names, salary and etc
function showUserInfo(name, age, salary){

    const userLog = `Your name is ${name}, your salary is ${salary} and you're ${age} years old`

    console.log(userLog)
}



// cut the salary based on some percentage
function cutSalary(salary) {

    // 5% cut off
    const percentFirst = 0.05 

    // 10%
    const percentSecond = 0.1

    // invalid salary 
    if (!salary) return "Invalid"

    // zero salary 
    if (salary == '0') return "Invalid"

    if (salary >= 2000 && salary <= 5000) return salary - (salary*percentFirst)

    if (salary > 5000) return salary - (salary*percentSecond)

} 

function modifiySalary(){
    rl.question("What if your salary ? ", sal => {
        console.log(`Your new salary is : ${cutSalary(sal)}`)

        rl.close()
    })
}

modifiySalary()
