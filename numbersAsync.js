const rl = require('readline').createInterface(process.stdin, process.stdout)

function getCounter(start=0) {
    let counter = start
    return function() {
        counter++
        return counter
    }
}

const cnt = getCounter()

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, data => {
            resolve(data)
        })
    })
}

async function guessNumber(numberToGuess) {
    while (true) {
        const numberFromUser = await question(`Попытка ${cnt()}. Введите число: `)
        if (numberFromUser === 'q') {
            rl.close()
            break
        } 
        console.log('Вы ввели: ', numberFromUser)
        if (numberFromUser == numberToGuess) {
            console.log(`Вы угадали! Количество попыток: ${cnt() - 1}`)
            rl.close()
            break
        } else if (numberFromUser > numberToGuess) {
            console.log('Это число больше загаданного')
        } else if (numberFromUser < numberToGuess) {
            console.log('Это число меньше загаданного')
        }
    }
}

guessNumber(569)