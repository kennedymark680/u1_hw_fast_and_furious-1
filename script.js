let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector('#main-title').innerText = 'Hello'

  // Part 2
  document.querySelector('body').style.backgroundColor = 'blue'

  // Part 3
  document.querySelector('#favorite-things').childNodes[11].remove()

  // Part 4
  document
    .querySelectorAll('.special-title')
    .forEach((num) => (num.style.fontSize = '2rem'))

  // Part 5
  document.querySelector('#past-races').childNodes[7].remove()

  // Part 6
  const newCity = document.createElement('li')
  newCity.innerText = 'Philly'
  document.querySelector('#past-races').appendChild(newCity)

  // Part 7
  const newDiv = document.createElement('div')
  const newH1 = document.createElement('h1')
  const newP = document.createElement('p')

  newDiv.setAttribute('class', 'blog-post purple')
  newH1.innerText = 'Philly'
  newP.innerText = 'I dont know what to say'

  newDiv.appendChild(newH1)
  newDiv.appendChild(newP)

  document.querySelector('.main').appendChild(newDiv)
}
