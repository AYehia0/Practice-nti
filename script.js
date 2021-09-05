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

getUserInput()
