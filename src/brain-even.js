#!/usr/bin/env node
import {
  logicGame,
} from './index.js'

const brainEven = () => {
  logicGame(
    'brainEven',
    'What is the result of the expression?',
  )
}

export default brainEven
