import readlineSync from "readline-sync";

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}


export const getStartMessage = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`)
    return name
}

export const getErrorMessage = (userAnswer, correctResult, name) => {
    console.log(
       `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.\n` +
       `Let's try again, ${name}!`
    )
}

export const getCorrectMessage = (answer, name) => {
    console.log('Correct!')
}

export const getCongratulationMessage = (name) => {
    console.log(`Congratulations, ${name}!`)
}