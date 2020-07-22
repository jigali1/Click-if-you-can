function escapeF() {
	let randNumT = Math.random();
	let randNumL = Math.random();
	if (randNumT >= 0.5) {
		document.querySelector('.answerY').style.top = Math.floor(Math.random() * Math.floor(450)) + 'px';
	} else {
		document.querySelector('.answerY').style.top = Math.floor(Math.random() * -Math.floor(-300)) + 'px';
	}
	
	if (randNumL >= 0.5) {
		document.querySelector('.answerY').style.left = Math.floor(Math.random() * Math.floor(document.querySelector('.question').offsetWidth / 2)) + 'px';
	} else {
		document.querySelector('.answerY').style.left = Math.floor(Math.random() * -Math.floor(document.querySelector('.question').offsetWidth / 2)) + 'px';
	}
}

let count = -1;
out = document.querySelector('.out');
function massageF() {
	if (count == -1) {
		out.textContent = 'Did you give up so quickly?)';
		count++;
	} else if (count == 0) {
		out.textContent = 'Oh, you are again here...';
		count++
	} else if (count == 1) {
		out.textContent = 'You will keep doing it?';
		count++;
	} else {
		out.textContent = 'You are incorrigible..'
		count = 0;
	}
}

document.querySelector('.answerY').onmousemove = escapeF;
document.querySelector('.answerY').ontouchstart = escapeF;
document.querySelector('.answerY').onclick = () => {
	out.textContent = 'you are cheater!';
}

document.querySelector('.answerN').onclick = massageF;

