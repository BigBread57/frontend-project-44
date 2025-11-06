#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  getCongratulationMessage,
  getCorrectMessage,
  getErrorMessage,
  getRandomInt,
  getStartMessage, isPrime,
} from './index.js'

const brainPrime = () => {
  const name = getStartMessage()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  let correctAnswersCount = 0
  while (correctAnswersCount !== 3) {
    const randomNumber = getRandomInt(100) + 1
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer:')
    let correctResult = isPrime(randomNumber)
    if (userAnswer === correctResult) {
      getCorrectMessage()
      correctAnswersCount += 1
    }
    else {
      getErrorMessage(userAnswer, correctResult, name)
      return
    }
  }
  getCongratulationMessage(name)
}

export default brainPrime
