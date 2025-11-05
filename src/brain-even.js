#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}
const isEven = (num) => {
    return num % 2 === 0
}


const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`)

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswer = 0
    while (correctAnswer !== 3) {
        const randomNumber = getRandomInt(1000)
        console.log(`Question: ${randomNumber}`)
        const answer = readlineSync.question('Your answer:')
        const userAnswer = isEven(randomNumber) ? 'yes' : 'no'
        if (answer === userAnswer) {
            console.log('Correct!')
            correctAnswer += 1
        } else {
           console.log(
               `'${answer}' is wrong answer ;(. Correct answer was '${answer}'.\n` +
               `Let's try again, ${name}!`
           )
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)
}

export default brainEven