const board = document.querySelector('#board')

const colors = ['#9b111e', '#b79d74', '#fffef4', '#50c878 ', '#082567', '#007ba7', '#9966cc', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white']

const SQUARES_NUMBER = 800


for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')

	square.classList.add('square')


	square.addEventListener('mouseover', () => {
		setColor(square)
	})

	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})

	square.addEventListener('click', () => {
		let array = new Array
		for (let i = 0; i < 25; i++) {
			array.push(getRandomElement())

		}
		const ALL_SQUARES = board.querySelectorAll('div')
		array.forEach((element) => {
			setColor(ALL_SQUARES[element])
		})
	})

	board.append(square)


}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px  ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #000'

}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}


// function spawnFruit() {
// 	const squaresGroup = board.querySelectorAll('div')
// 	const fruit = squaresGroup[getRandomElement()]
// 	fruit.style.backgroundColor = 'white'
// 	console.log(fruit)
// 	return fruit
// }

function getRandomElement() {
	const index = Math.floor(Math.random() * SQUARES_NUMBER)
	return index
}

// spawnFruit()