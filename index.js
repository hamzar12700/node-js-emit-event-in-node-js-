import readline from 'readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todo = []

const showData = () => {
    console.log('\n1 : Add a Task');
    console.log('2 : View Task');
    console.log('3 : Exit');
    rl.question('Choose an option : ', handleInput)
}

function handleInput(option) {
    if (option === '1') {
        rl.question('Enter your task : ', (task) => {
            todo.push(task)
            console.log('Task Added : ', task);
            showData()
        })
    } else if (option === '2') {
        console.log('\n Your Todo List');
        todo.forEach((task, index) => {
            console.log(task, index + 1);
        })
        showData()
    } else if (option === '3') {
        console.log('Good Bye');
        rl.close()
    } else {
        console.log('Invalid Option');
        showData()
    }
}

showData()

// console.log(rl);
