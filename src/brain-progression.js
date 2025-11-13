#!/usr/bin/env node
import {
  logicGame,
} from './index.js'

const brainProgression = () => {
  logicGame(
    'brainProgression',
    'What number is missing in the progression?',
  )
}

export default brainProgression
