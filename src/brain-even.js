#!/usr/bin/env node
import {
  logicGame,
} from './index.js'

const brainEven = () => {
  logicGame(
    'brainEven',
    'Answer "yes" if the number is even, otherwise answer "no".',
  )
}

export default brainEven
