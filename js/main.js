const menuToggle = document.querySelectorAll('.menu__link')
const menuTab = document.querySelectorAll('.tab')
const menuCash = document.querySelectorAll('.menu__cash')
console.log(menuCash)

for (let i = 0; i < menuToggle.length; i++) {
	menuToggle[i].addEventListener('click', (event) => {
		event.preventDefault()
		/*удаляем класс фону*/
		for (let b = 0; b < menuCash.length; b++) {
			menuCash[b].classList.remove('menu__cash_sell')
		}

		/*добавляем класс фону*/
		menuCash[i].classList.add('menu__cash_sell')

		/*удаляем класс ссылке*/
		for (let e = 0; e < menuToggle.length; e++) {
			menuToggle[e].classList.remove('menu__link_active')
		}

		/*добавляем класс ссылке*/
		event.target.classList.add('menu__link_active')
		/*удаляем класс контента*/
		for (let a = 0; a < menuTab.length; a++) {
			menuTab[a].classList.remove('tab__active')
		}

		/*добавляем класс контенту*/
		menuTab[i].classList.add('tab__active')
		console.log(menuTab[i])
	})
}
