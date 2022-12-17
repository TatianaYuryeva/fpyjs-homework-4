const rl = require('readline').createInterface(process.stdin, process.stdout)

function getCounter(start=0) {
    let counter = start
    return function() {
        counter++
        return counter
    }
}

const cnt = getCounter()

function guessNumber(numberToGuess) {
    rl.question(`Попытка ${cnt()}. Введите число: `, numberFromUser => {
        if (numberFromUser == 'q') {
            rl.close()
            return
        }
        console.log('Вы ввели: ', numberFromUser)
        if (numberFromUser == numberToGuess) {
            console.log(`Вы угадали! Количество попыток: ${cnt() - 1}`)
            rl.close()
            return
        } else if (numberFromUser > numberToGuess) {
            console.log('Это число больше загаданного')
        } else if (numberFromUser < numberToGuess) {
            console.log('Это число меньше загаданного')
        }
        
        guessNumber(numberToGuess)
    })
}

guessNumber(158)