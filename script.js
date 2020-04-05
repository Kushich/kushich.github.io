const html = '<i class="fab fa-html5"></i>'
const css =  '<i class="fab fa-css3-alt"></i>'
const js = '<i class="fab fa-js"></i>'
const bootstrap = '<i class="fab fa-bootstrap"></i>'
const react = '<i class="fab fa-react"></i>'
const nodejs = '<i class="fab fa-node-js"></i>'
const vue = '<i class="fab fa-vuejs"></i>'

const works = [
{id: 1, title: 'Task Landing Page', link: '../task/index.html', isComplete: true, stack: [html, css]},
{id: 2, title: 'Mogo Landing Page', link: '../mogo/index.html', isComplete: true, stack: [html, css]},
{id: 3, title: 'Fashion Ecommerce Landing Page', link: '../fashion/index.html', isComplete: true, stack: [html, css, bootstrap]},
{id: 4, title: 'Filterable List', link: '../filterable-list/index.html', isComplete: true, stack: [html, css, js]},
{id: 5, title: 'Capital Search', link: '../capital-search/index.html', isComplete: true, stack: [html, css, js, bootstrap]},
{id: 6, title: 'Weight Converter', link: '../weight-converter/index.html', isComplete: true, stack: [html, css, js, bootstrap]},
{id: 7, title: 'Number Facts', link: '../number-facts/index.html', isComplete: true, stack: [html, css, js, bootstrap]},
{id: 8, title: 'Lyric Search', link: '/lyric-search', isComplete: true, stack: [html, css, js, bootstrap, react]},
{id: 9, title: 'Step Form', link: '/step-form', isComplete: true, stack: [html, css, js, react]},
{id: 10, title: 'Note', link: '/note-app', isComplete: true, stack: [html, css, js, react]},
{id: 11, title: 'Marioplan', link: '/marioplan', isComplete: true, stack: [html, css, js, react]},
{id: 12, title: 'Hotel reservation', link: '/hotel-reservation', isComplete: true, stack: [html, css, js, react]},
{id: 13, title: 'Tasks App', link: '/v-tasks-app', isComplete: true, stack: [html, css, js, vue]},
{id: 14, title: '...', link: '#', isComplete: false, stack: [html, css, js, vue]}
]

const stack = [
{id: 1, icon: html, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
{id: 2, icon: css, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
{id: 3, icon: js, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
{id: 4, icon: react, link: 'https://reactjs.org/'},
{id: 5, icon: nodejs, link: 'https://nodejs.org/en/'},
{id: 6, icon: vue, link: 'https://vuejs.org/'}
]

// Scroll btn
let btn = document.querySelector('.btn--totop')

function showScrollBtn() {
	if (window.pageYOffset > 30) {
		btn.style.display = 'block'
	} else { 
		btn.style.display = 'none' 
	}
}
btn.onclick = function () {
	window.scrollTo(0,0)
}

window.onscroll = showScrollBtn
//

// Birth date
let birth = new Date(1999, 11, 14)
let today = new Date()
let age = (today.getMonth() < 11 || today.getMonth() === 11 && today.getDate() < 14) ? today.getFullYear() - birth.getFullYear() - 1 : today.getFullYear() - birth.getFullYear()

document.querySelector('#birthDate').textContent = age
// 


// create works html
function createWorksHtml(work) {
	return (`
	<div class="work">
		<a href="${work.link}" class="work__title">
			<h5>${work.title} ${work.isComplete ? '' : '<span class="wip">[WIP]</span></h5>'}</h5>
			<span class="work__stack">
				${work.stack.join('')}
			</span>
		</a>
	</div>
	`)
}

// create stack html
function createStackHtml(tech) {
	return (`
	<div class="stack__item">
		<a href="${tech.link}">
			${tech.icon}
		</a>
	</div>
	`)
}

// render
function render() {
	const worksHtml = works.map(createWorksHtml).join('')
	const stackHtml = stack.map(createStackHtml).join('')
	document.querySelector('#worksItems').innerHTML = worksHtml
	document.querySelector('#stackItems').innerHTML = stackHtml
}
render()
