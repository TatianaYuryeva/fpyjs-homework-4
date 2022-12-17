function getPasswordChecker(password) {
    return function passwordChecker(passwordFromUser) {
        return password === passwordFromUser
    }
}

let password = getPasswordChecker('123456789')
console.log(password('123456789'))
console.log(password('12345678u'))