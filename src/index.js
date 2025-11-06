import readlineSync from 'readline-sync'

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

export const isEven = (num) => {
  return num % 2 === 0
}

export const getStartMessage = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

export const getErrorMessage = (userAnswer, correctResult, name) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.\n`
    + `Let's try again, ${name}!`,
  )
}

export const getCorrectMessage = () => {
  console.log('Correct!')
}

export const getCongratulationMessage = (name) => {
  console.log(`Congratulations, ${name}!`)
}

export const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return getGcd(b, a % b)
}

export const getProgression = () => {
  let progression = ''
  let correctResult
  const start = getRandomInt(30)
  const step = getRandomInt(10) + 1
  const length = 10
  const missing = getRandomInt(length)
  for (let i = 0; i < length; i++) {
    let stepProgression = (start + i * step).toString()
    if (i === missing) {
      progression += ', ..'
      correctResult = stepProgression
    }
    else {
      progression += ', ' + stepProgression
    }
  }
  return { correctResult, progression }
}

export const isPrime = (number) => {
  if (number <= 1) {
    return 'no'
  }
  if (number === 2) {
    return 'yes'
  }
  if (number % 2 === 0) {
    return 'no'
  }

  for (let i = 3; i < Math.sqrt(number) + 1; i++) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}
