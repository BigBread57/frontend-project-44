#!/usr/bin/env node
import readlineSync from 'readline-sync'
import _ from 'lodash'
import {
  getCongratulationMessage,
  getCorrectMessage,
  getErrorMessage,
  getRandomInt,
  getStartMessage,
} from './index.js'

const brainCalc = () => {
  const name = getStartMessage()
  console.log('What is the result of the expression?')
  let correctAnswersCount = 0
  const mathOperations = ['+', '-', '*']
  while (correctAnswersCount !== 3) {
    const randomNumberOne = getRandomInt(50)
    const randomNumberTwo = getRandomInt(50)
    const randomMathOperations = _.sample(mathOperations)

    console.log(`Question: ${randomNumberOne} ${randomMathOperations} ${randomNumberTwo}`)
    const userAnswer = readlineSync.question('Your answer:')
    let correctResult
    switch (randomMathOperations) {
      case '+':
        correctResult = randomNumberOne + randomNumberTwo
        break
      case '-':
        correctResult = randomNumberOne - randomNumberTwo
        break
      case '*':
        correctResult = randomNumberOne * randomNumberTwo
        break
    }
    correctResult = correctResult.toString()
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

export default brainCalc
