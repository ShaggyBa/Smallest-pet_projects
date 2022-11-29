const item = document.querySelector('.item')

const placeholders = document.querySelectorAll('.placeholder')


const array_colors = ["#ff85e4", "#209cff", "#84fab0"]

placeholders.forEach((item) => {
	item.addEventListener('dragover', dragover) //Когда элемент находится над placeholder-ом
	item.addEventListener('dragenter', dragenter) //Когда элемент попадает в область placeholder-а
	item.addEventListener('dragleave', dragleave) //Когда  элемент покидает область placeholder-а
	item.addEventListener('drop', dragdrop) //Когда отпустили элемент в области placeholder-а
})

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(event) {
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)
}
function dragEnd(event) {
	event.target.className = 'item'
}

function dragover(event) {
	event.preventDefault()
}

function dragenter(event) {
	document.documentElement.style.cssText = `--hovered_color: ${array_colors[event.target.getAttribute('count') - 1]} `
	event.target.classList.add('hovered')
}

function dragleave(event) {
	event.target.classList.remove('hovered')
}

function dragdrop(event) {
	event.target.classList.remove('hovered')
	event.target.append(item)

}