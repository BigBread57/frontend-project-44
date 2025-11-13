#!/usr/bin/env node

import {
  logicGame,
} from './index.js'

const brainCalc = () => {
  logicGame(
    'brainCalc',
    'What is the result of the expression?',
  )
}

export default brainCalc
