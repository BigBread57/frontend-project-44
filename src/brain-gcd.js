#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  getCongratulationMessage,
  getCorrectMessage,
  getErrorMessage,
  getGcd,
  getRandomInt,
  getStartMessage,
} from './index.js'

const brainGcd = () => {
  const name = getStartMessage()
  console.log('Find the greatest common divisor of given numbers.')
  let correctAnswersCount = 0
  while (correctAnswersCount !== 3) {
    const randomNumberOne = getRandomInt(50) + 1
    const randomNumberTwo = getRandomInt(50) + 1
    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`)
    const userAnswer = readlineSync.question('Your answer:')
    let correctResult = getGcd(randomNumberOne, randomNumberTwo)
    if (userAnswer === correctResult.toString()) {
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

export default brainGcd
