let a = 1
let b = 2

console.log(a + b)
const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const myFavoriteDay = 'Saturday'

const saturday = {
  weekday: false,
  good: true,
  quote: 'Saturdays do indeed exist.'
}

function randomDay() {
  return daysOfTheWeek[Math.floor(Math.random() * daysOfTheWeek.length)]
}

const myName = 'Ben'

export {
  daysOfTheWeek,
  myFavoriteDay,
  saturday,
  randomDay,
  myName
}