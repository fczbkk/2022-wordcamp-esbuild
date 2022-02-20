import { greetUtility } from './utilities.js'
import sum from 'lodash-es/sum'
import { produceAnError } from './produce-an-error.js'
import './style.css'
import { greet } from './typescript.ts'

console.log('hello world')

greetUtility()

console.log('sum', sum([1, 2, 3]))

produceAnError()

console.log(greet('typescript'))
