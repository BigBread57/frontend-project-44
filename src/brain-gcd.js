#!/usr/bin/env node
import {
  logicGame,
} from './index.js'

const brainGcd = () => {
  logicGame(
    'brainGcd',
    'Find the greatest common divisor of given numbers.',
  )
}

export default brainGcd
