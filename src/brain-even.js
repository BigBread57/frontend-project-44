#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {getCongratulationMessage, getCorrectMessage, getErrorMessage, getRandomInt, getStartMessage} from "./index.js";


const isEven = (num) => {
    return num % 2 === 0
}

const brainEven = () => {
    const name = getStartMessage()
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswersCount  = 0
    while (correctAnswersCount  !== 3) {
        const randomNumber = getRandomInt(1000)
        console.log(`Question: ${randomNumber}`)
        const userAnswer = readlineSync.question('Your answer:')
        const correctResult = isEven(randomNumber) ? 'yes' : 'no'
        if (userAnswer === correctResult) {
            getCorrectMessage()
            correctAnswersCount  += 1
        } else {
            getErrorMessage(userAnswer, correctResult, name)
            return;
        }
    }
    getCongratulationMessage(name)
}

export default brainEven