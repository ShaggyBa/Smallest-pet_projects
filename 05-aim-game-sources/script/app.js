const startBtn = document.querySelector('#start')

const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')

const timer = document.querySelector('#time')

const board = document.querySelector('#board')

const colors = ['#9b111e', '#b79d74', '#fffef4', '#50c878 ', '#082567', '#007ba7', '#9966cc', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white']


let time = 0

let score = 0

startBtn.addEventListener('click', (event) => {
	screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
	if (event.target.classList.contains('time-btn')) {
		time = parseInt(event.target.getAttribute('data-time'))
		startGame()
	}
	else if (event.target.classList.contains('time-range')) {
		console.log(event.target)
		event.target.setAttribute('data-time', `${document.querySelector('#range').value}`)
		time = parseInt(event.target.getAttribute('data-time'))
		startGame()
	}
})

board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createRandomCircle()
	}
})


function startGame() {
	screens[1].classList.add('up')

	setTime(time)

	setInterval(decreaseTime, 1000);

	createRandomCircle()
}

function finishGame() {
	timer.parentNode.remove()
	board.innerHTML = `<h2>Счет: <span class="primary">${score}</span></h2>`
}

function decreaseTime() {
	if (time > 0) {
		let current = --time
		if (current < 10)
			current = `0${current}`
		setTime(current)
	}
	else finishGame()
}

function setTime(value) {
	if ((value / 60) < (1 + 1 / 6) && (value / 60) >= 1) {
		timer.innerHTML = `0${Math.floor(value / 60)}:0${value % 60}`
	}
	else if ((value / 60) > 1 && (value / 60) >= 1 + 1 / 6) {
		timer.innerHTML = `0${Math.floor(value / 60)}:${value - 60}`
	}
	else timer.innerHTML = `00:${value}`
}

function createRandomCircle() {
	const circle = document.createElement('div')

	const { width, height } = board.getBoundingClientRect()

	const size = getRandomNumber(10, 40)

	circle.classList.add('circle')

	circle.style.width = `${size}px`

	circle.style.height = `${size}px`

	circle.style.top = `${getRandomNumber(0, height - size - 15)}px`

	circle.style.left = `${getRandomNumber(0, width - size - 15)}px`

	circle.style.background = getRandomColor()

	board.append(circle)
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}