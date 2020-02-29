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