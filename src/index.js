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
  const start = getRandomInt(30)
  const step = getRandomInt(10) + 1
  const length = 10
  const missingIndex = getRandomInt(length)
  const progression = []
  for (let i = 0; i < length; i++) {
    if (i === missingIndex) {
      progression.push('..')
    }
    else {
      progression.push((start + i * step).toString())
    }
  }
  return {
    correctResult: (start + missingIndex * step).toString(),
    progression: progression.join(', '),
  }
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
