document.getElementById('button').addEventListener('click', findInteger)

function findInteger () {
  let number = document.getElementById('userinput').value
  number = parseInt(number)
  let type = 'an integer.'
  if (number < 0) {
    type = 'negative.'
  } else if (number > 0) {
    type = 'positive.'
  } else {
    type = 'either not a proper number or has a value of 0.'
  }
  document.getElementById('answertext').innerHTML = 'The number ' + Math.floor(number) + ' is ' + type
}
