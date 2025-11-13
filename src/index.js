import readlineSync from 'readline-sync'
import {
  getCongratulationMessage,
  getCorrectMessage,
  getErrorMessage,
  getGcd,
  getProgression,
  getRandomInt,
  getStartMessage,
  isEven,
  isPrime,
} from './utils.js'
import _ from 'lodash'

export const brainEvenLogic = (name) => {
  const randomNumber = getRandomInt(1000)
  console.log(`Question: ${randomNumber}`)
  const userAnswer = readlineSync.question('Your answer:')
  const correctResult = isEven(randomNumber) ? 'yes' : 'no'
  if (userAnswer === correctResult) {
    getCorrectMessage()
    return 1
  }
  else {
    getErrorMessage(userAnswer, correctResult, name)
  }
}

export const brainCalcLogic = (name, mathOperations) => {
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
    return 1
  }
  else {
    getErrorMessage(userAnswer, correctResult, name)
  }
}

export const brainGcdLogic = (name) => {
  const randomNumberOne = getRandomInt(50) + 1
  const randomNumberTwo = getRandomInt(50) + 1
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`)
  const userAnswer = readlineSync.question('Your answer:')
  let correctResult = getGcd(randomNumberOne, randomNumberTwo)
  if (userAnswer === correctResult.toString()) {
    getCorrectMessage()
    return 1
  }
  else {
    getErrorMessage(userAnswer, correctResult, name)
  }
}

export const brainPrimeLogic = (name) => {
  const randomNumber = getRandomInt(100) + 1
  console.log(`Question: ${randomNumber}`)
  const userAnswer = readlineSync.question('Your answer:')
  let correctResult = isPrime(randomNumber)
  if (userAnswer === correctResult) {
    getCorrectMessage()
    return 1
  }
  else {
    getErrorMessage(userAnswer, correctResult, name)
  }
}

export const brainProgressionLogic = (name) => {
  const { correctResult, progression } = getProgression()
  console.log(`Question: ${progression}`)
  const userAnswer = readlineSync.question('Your answer:')
  if (userAnswer === correctResult) {
    getCorrectMessage()
    return 1
  }
  else {
    getErrorMessage(userAnswer, correctResult, name)
  }
}

export const logicGame = (gameName, startMessage) => {
  const name = getStartMessage()
  console.log(startMessage)
  let correctAnswersCount = 0
  const mathOperations = ['+', '-', '*']
  try {
    while (correctAnswersCount !== 3) {
      switch (gameName) {
        case 'brainEven':
          correctAnswersCount += brainEvenLogic(name)
          break
        case 'brainCalc':
          correctAnswersCount += brainCalcLogic(name, mathOperations)
          break
        case 'brainGcd':
          correctAnswersCount += brainGcdLogic(name)
          break
        case 'brainPrime':
          correctAnswersCount += brainPrimeLogic(name)
          break
        case 'brainProgression':
          correctAnswersCount += brainProgressionLogic(name)
          break
      }
    }
    getCongratulationMessage(name)
  }
  catch (error) {
    console.log(error.message)
  }
}
