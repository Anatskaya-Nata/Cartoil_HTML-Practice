const menuToggle = document.querySelectorAll('.menu__link')
const menuTab = document.querySelectorAll('.tab')
const menuCash = document.querySelectorAll('.menu__cash')

for (let i = 0; i < menuToggle.length; i++) {
	menuToggle[i].addEventListener('click', (event) => {
		event.preventDefault()
		/*удаляем класс фону*/
		/*	for (let b = 0; b < menuCash.length; b++) {
			menuCash[b].classList.remove('menu__cash_sell')
		}

		/*добавляем класс фону
		menuCash[i].classList.add('menu__cash_sell')*/

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

/*Добавляем маску на инпут с телефоном*/
const PhoneInput = document.querySelector('.top__form_number-mask')
/*console.log(PhoneInput)*/
const maskOptions = {
	mask: '(000)000-00-00',
}
const mask = new IMask(PhoneInput, maskOptions)

/*var mask = IMask(element, maskOptions)*/

/*Переключение кнопок фильтра - временное*/
const FilterButton = document.querySelectorAll('.lien__filter_cell')
const GreenSquare = document.querySelectorAll('.lien__filter_square')

const LienCard = document.querySelector('.lien__card')

/*console.log(GreenSquare)*/

for (let i = 0; i < FilterButton.length; i++) {
	FilterButton[i].addEventListener('click', (e) => {
		e.preventDefault()
		/*удаляем класс кнопке фильтра*/
		for (let a = 0; a < GreenSquare.length; a++) {
			GreenSquare[a].classList.remove('lien__filter_square-active')
		}
		console.log()
		/*добавляем класс кнопке фильтра*/
		GreenSquare[i].classList.add('lien__filter_square-active')
		console.log(e.target)
	})
}
console.log('где я!!!!')
