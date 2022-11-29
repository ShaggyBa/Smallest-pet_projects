const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})


// !Обработка событий нажатия клавиш
document.addEventListener('keydown',
	event => {
		if (event.key === 'ArrowUp') {
			changeSlide('up')
		}
		else if (event.key === 'ArrowDown') {
			changeSlide('down')
		}
	})

function changeSlide(btnDirection) {
	if (btnDirection === 'up') {
		if (activeSlideIndex === slidesCount - 1) {
			activeSlideIndex = 0
		}
		else activeSlideIndex++
	}
	if (btnDirection === 'down') {
		if (activeSlideIndex <= 0) {
			activeSlideIndex = slidesCount - 1
		}
		else activeSlideIndex--
	}

	const height = mainSlide.clientHeight

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}
