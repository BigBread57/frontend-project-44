#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  getCongratulationMessage,
  getCorrectMessage,
  getErrorMessage,
  getProgression,
  getStartMessage,
} from './index.js'

const brainProgression = () => {
  const name = getStartMessage()
  console.log('What number is missing in the progression?')
  let correctAnswersCount = 0
  while (correctAnswersCount !== 3) {
    const { correctResult, progression } = getProgression()
    console.log(`Question: ${progression}`)
    const userAnswer = readlineSync.question('Your answer:')
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

export default brainProgression
