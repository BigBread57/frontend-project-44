#!/usr/bin/env node
import {
  logicGame,
} from './index.js'

const brainPrime = () => {
  logicGame(
    'brainPrime',
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  )
}

export default brainPrime
